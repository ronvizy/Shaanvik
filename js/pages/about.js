(() => {
const { useReveal: useRevealAbout } = window.AppHooks;

window.AppPages.AboutPage = function AboutPage() {
  useRevealAbout();
  return React.createElement('div', { className: 'page about-page' },
    React.createElement('div', { style: { maxWidth: 600, marginBottom: 80 } },
      React.createElement('div', { className: 'eyebrow rv', style: { marginBottom: 18 } }, 'Our Philosophy'),
      React.createElement('h1', { className: 'h1 rv d1' }, 'We craft ', React.createElement('em', { className: 'italic-pink' }, 'meaning')),
      React.createElement('p', { className: 'body-txt rv d2', style: { marginTop: 22 } }, 'At Shaanvik Group Co., Ltd., we believe jewelry is more than an accessory — it is a story, a memory, and a statement. Every piece we create carries the soul of its wearer.')
    ),
    React.createElement('div', { className: 'about-split' },
      React.createElement('div', { className: 'about-visual-wrap rv' },
        React.createElement('div', { className: 'av-main' }, '💎'),
        React.createElement('div', { className: 'av-accent' }),
        React.createElement('div', { className: 'av-badge' },
          React.createElement('div', { className: 'av-num' }, '100%'),
          React.createElement('div', { className: 'av-lbl' }, 'Made to Order')
        )
      ),
      React.createElement('div', null,
        React.createElement('div', { className: 'eyebrow rv', style: { marginBottom: 18 } }, 'What We Do'),
        React.createElement('h2', { className: 'h2 rv d1' }, 'Custom jewelry, ', React.createElement('em', { className: 'italic-pink' }, 'made for you')),
        React.createElement('p', { className: 'body-txt rv d2', style: { marginTop: 18, marginBottom: 16 } }, 'We specialize in made-to-order jewelry, offering customized designs crafted with precision and high-quality materials. From concept to completion, our team works closely with clients.'),
        React.createElement('p', { className: 'body-txt rv d2', style: { marginBottom: 40 } }, 'Our mission is to deliver fine craftsmanship, exceptional quality, and timeless designs that exceed every expectation.'),
        React.createElement('div', { className: 'about-features' },
          [['✦', 'Bespoke Design', 'Every piece uniquely conceived and crafted for you alone.'], ['◈', 'Fine Materials', 'Ethically sourced gemstones and precious metals, always.'], ['⟡', 'Master Artisans', 'Decades of expertise poured into every stroke and setting.'], ['◇', 'Timeless Quality', 'Designed to be cherished and passed down generations.']].map(([icon, title, description]) =>
            React.createElement('div', { key: title, className: 'af-card rv d2' },
              React.createElement('div', { className: 'af-icon' }, icon),
              React.createElement('div', { className: 'af-title' }, title),
              React.createElement('div', { className: 'af-desc' }, description)
            )
          )
        )
      )
    ),
    React.createElement('div', { style: { textAlign: 'center', marginBottom: 72 } },
      React.createElement('div', { className: 'eyebrow rv', style: { justifyContent: 'center', marginBottom: 16 } }, 'Our Values'),
      React.createElement('h2', { className: 'h2 rv d1' }, 'Built on ', React.createElement('em', { className: 'italic-pink' }, 'principles'))
    ),
    React.createElement('div', { className: 'about-values' },
      [['💎', 'Fine Craftsmanship', 'Every cut, every setting, every polish is executed with obsessive attention to detail. Our artisans carry decades of tradition in their hands.'], ['🌿', 'Ethical Sourcing', 'We believe beautiful jewelry should have a beautiful story — which is why we partner only with ethical, responsible suppliers.'], ['🎨', 'True Customization', 'Your jewelry should be an extension of you — not a catalog pick. We work intimately with each client to design something genuinely unique.']].map(([icon, title, description]) =>
        React.createElement('div', { key: title, className: 'value-card rv' },
          React.createElement('div', { className: 'value-icon' }, icon),
          React.createElement('h3', { className: 'value-title' }, title),
          React.createElement('p', { className: 'value-desc' }, description)
        )
      )
    )
  );
};
})();
