(() => {
const { useState: useStateContact } = React;
const { useReveal: useRevealContact } = window.AppHooks;
const { CONTACT_FORM_ENDPOINT } = window.AppData;

const INITIAL_FORM_STATE = {
  firstName: '',
  email: '',
  phoneNumber: '',
  jewelryType: '',
  budgetRange: '',
  vision: '',
};

async function submitContactForm(payload) {
  const response = await fetch(CONTACT_FORM_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify(payload),
  });

  const rawResponse = await response.text();

  if (!response.ok) {
    throw new Error(rawResponse || 'The form could not be submitted.');
  }

  if (!rawResponse) {
    return {};
  }

  try {
    return JSON.parse(rawResponse);
  } catch (error) {
    return { message: rawResponse };
  }
}

window.AppPages.ContactPage = function ContactPage() {
  useRevealContact();
  const [form, setForm] = useStateContact(INITIAL_FORM_STATE);
  const [status, setStatus] = useStateContact({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useStateContact(false);

  const updateField = field => event => {
    const nextValue = event.target.value;
    setForm(current => ({ ...current, [field]: nextValue }));
  };

  const submit = async event => {
    event.preventDefault();

    if (!CONTACT_FORM_ENDPOINT || CONTACT_FORM_ENDPOINT.includes('PASTE_YOUR_GOOGLE_APPS_SCRIPT')) {
      setStatus({
        type: 'error',
        message: 'Add your Google Apps Script web app URL in js/data.js before using this form.',
      });
      return;
    }

    if (!form.firstName.trim() || !form.email.trim() || !form.vision.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in your name, email, and vision before sending.',
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await submitContactForm({
        ...form,
        firstName: form.firstName.trim(),
        email: form.email.trim(),
        phoneNumber: form.phoneNumber.trim(),
        jewelryType: form.jewelryType.trim(),
        budgetRange: form.budgetRange.trim(),
        vision: form.vision.trim(),
        submittedAt: new Date().toISOString(),
        sourcePage: window.location.href,
      });

      setForm(INITIAL_FORM_STATE);
      setStatus({
        type: 'success',
        message: "Message sent successfully. Your details have been added to Google Sheets.",
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong while sending your message.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return React.createElement('div', { className: 'page contact-page' },
    React.createElement('div', null,
      React.createElement('div', { className: 'eyebrow rv', style: { marginBottom: 18 } }, "Let's Connect"),
      React.createElement('h1', { className: 'h1 rv d1' }, "Let's create ", React.createElement('em', { className: 'italic-pink' }, 'together')),
      React.createElement('p', { className: 'body-txt rv d2', style: { marginTop: 20 } }, "Have a design in mind? Share your inspiration and we'll take it from there. No idea is too bold, no vision too intricate."),
      React.createElement('div', { className: 'ci-card rv d3' },
        [['✉️', 'Email', 'Shaanvikgroup@gmail.com'], ['📞', 'Phone / WhatsApp', '+66 63 819 8812'], ['📍', 'Studio Address', 'Bangkok, Thailand']].map(([icon, label, value]) =>
          React.createElement('div', { key: label, className: 'cd' },
            React.createElement('div', { className: 'cd-icon' }, icon),
            React.createElement('div', null,
              React.createElement('div', { className: 'cd-lbl' }, label),
              React.createElement('div', { className: 'cd-val' }, value)
            )
          )
        )
      )
    ),
    React.createElement('form', { className: 'cf', onSubmit: submit },
      React.createElement('div', { className: 'eyebrow rv', style: { marginBottom: 36 } }, 'Send a Message'),
      React.createElement('div', { className: 'fr2 rv d1' },
        React.createElement('div', null, React.createElement('label', { className: 'fl', htmlFor: 'firstName' }, 'First Name'), React.createElement('input', { id: 'firstName', type: 'text', className: 'fi', placeholder: 'Your name', value: form.firstName, onChange: updateField('firstName'), required: true })),
        React.createElement('div', null, React.createElement('label', { className: 'fl', htmlFor: 'email' }, 'Email'), React.createElement('input', { id: 'email', type: 'email', className: 'fi', placeholder: 'your@email.com', value: form.email, onChange: updateField('email'), required: true }))
      ),
      React.createElement('div', { className: 'fr2 rv d2' },
        React.createElement('div', null, React.createElement('label', { className: 'fl', htmlFor: 'phoneNumber' }, 'Phone Number'), React.createElement('input', { id: 'phoneNumber', type: 'tel', className: 'fi', placeholder: 'e.g. +66 63 819 8812', value: form.phoneNumber, onChange: updateField('phoneNumber') })),
        React.createElement('div', null, React.createElement('label', { className: 'fl', htmlFor: 'jewelryType' }, 'Jewelry Type'), React.createElement('input', { id: 'jewelryType', type: 'text', className: 'fi', placeholder: 'e.g. Engagement ring, necklace...', value: form.jewelryType, onChange: updateField('jewelryType') }))
      ),
      React.createElement('div', { className: 'fr rv d2' }, React.createElement('label', { className: 'fl', htmlFor: 'budgetRange' }, 'Budget Range'), React.createElement('input', { id: 'budgetRange', type: 'text', className: 'fi', placeholder: 'e.g. THB 20,000–80,000', value: form.budgetRange, onChange: updateField('budgetRange') })),
      React.createElement('div', { className: 'fr rv d3' }, React.createElement('label', { className: 'fl', htmlFor: 'vision' }, 'Your Vision'), React.createElement('textarea', { id: 'vision', className: 'fi ft2', placeholder: 'Describe your dream piece — the gemstone, metal, style, occasion, story...', value: form.vision, onChange: updateField('vision'), required: true })),
      React.createElement('button', { className: `fs rv d3${status.type === 'success' ? ' sent' : ''}`, type: 'submit', disabled: isSubmitting }, isSubmitting ? 'Sending...' : 'Send Inquiry'),
      status.message ? React.createElement('p', { className: `form-status ${status.type === 'error' ? 'error' : 'success'} rv d3`, role: 'status' }, status.message) : null
    )
  );
};
})();
