(() => {
const { useState: useStateContact } = React;
const { useReveal: useRevealContact } = window.AppHooks;

window.AppPages.ContactPage = function ContactPage() {
  useRevealContact();
  const [sent, setSent] = useStateContact(false);
  const submit = () => {
    setSent(true);
    setTimeout(() => setSent(false), 4000);
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
    React.createElement('div', { className: 'cf' },
      React.createElement('div', { className: 'eyebrow rv', style: { marginBottom: 36 } }, 'Send a Message'),
      React.createElement('div', { className: 'fr2 rv d1' },
        React.createElement('div', null, React.createElement('label', { className: 'fl' }, 'First Name'), React.createElement('input', { type: 'text', className: 'fi', placeholder: 'Your name' })),
        React.createElement('div', null, React.createElement('label', { className: 'fl' }, 'Email'), React.createElement('input', { type: 'email', className: 'fi', placeholder: 'your@email.com' }))
      ),
      React.createElement('div', { className: 'fr rv d2' }, React.createElement('label', { className: 'fl' }, 'Jewelry Type'), React.createElement('input', { type: 'text', className: 'fi', placeholder: 'e.g. Engagement ring, necklace...' })),
      React.createElement('div', { className: 'fr rv d2' }, React.createElement('label', { className: 'fl' }, 'Budget Range'), React.createElement('input', { type: 'text', className: 'fi', placeholder: 'e.g. $500–$2000' })),
      React.createElement('div', { className: 'fr rv d3' }, React.createElement('label', { className: 'fl' }, 'Your Vision'), React.createElement('textarea', { className: 'fi ft2', placeholder: 'Describe your dream piece — the gemstone, metal, style, occasion, story...' })),
      React.createElement('button', { className: `fs rv d3${sent ? ' sent' : ''}`, onClick: submit }, sent ? "✓ Message Sent — We'll be in touch soon!" : 'Send Inquiry')
    )
  );
};
})();
