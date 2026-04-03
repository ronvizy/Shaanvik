(() => {
const { GALLERY } = window.AppData;
const { navigateToPage } = window.AppUtils;
const { useReveal } = window.AppHooks;

window.AppPages.HomePage = function HomePage({ setPage }) {
  useReveal();
  const nav = nextPage => navigateToPage(nextPage);

  return React.createElement(
    'div',
    { className: 'page' },
    React.createElement(
      'section',
      { className: 'hero' },
      React.createElement('div', { className: 'hero-blob b1' }),
      React.createElement('div', { className: 'hero-blob b2' }),
      React.createElement('div', { className: 'hero-blob b3' }),
      React.createElement(
        'div',
        { className: 'hero-content' },
        React.createElement('div', { className: 'eyebrow hero-eyebrow' }, 'Fine Jewelry, Made to Order'),
        React.createElement('h1', { className: 'h1 hero-title' }, 'Every piece tells ', React.createElement('em', { className: 'italic-pink' }, 'your story')),
        React.createElement('p', { className: 'body-txt hero-sub' }, 'Jewelry is more than an accessory — it is a story, a memory, and a statement. Crafted with precision for those who believe in the extraordinary.'),
        React.createElement(
          'div',
          { className: 'hero-actions' },
          React.createElement('button', { className: 'btn-dark', onClick: () => nav('Collection') }, React.createElement('span', null, 'Explore Collection')),
          React.createElement('button', { className: 'btn-outline', onClick: () => nav('Contact') }, 'Customize Yours')
        )
      ),
      React.createElement(
        'div',
        { className: 'hero-visual' },
        React.createElement(
          'div',
          { className: 'hero-morph' },
          React.createElement(
            'svg',
            { width: '55%', height: '55%', viewBox: '0 0 200 200', fill: 'none' },
            React.createElement('polygon', { points: '100,12 130,72 192,82 152,122 162,182 100,152 38,182 48,122 8,82 70,72', fill: 'none', stroke: '#e8b4b8', strokeWidth: '1.5' }),
            React.createElement('polygon', { points: '100,32 124,76 172,84 140,116 148,162 100,140 52,162 60,116 28,84 76,76', fill: 'rgba(232,180,184,0.18)', stroke: '#c9a96e', strokeWidth: '1' }),
            React.createElement('circle', { cx: '100', cy: '100', r: '22', fill: 'none', stroke: '#a8c5d6', strokeWidth: '1.5' }),
            React.createElement('circle', { cx: '100', cy: '100', r: '9', fill: 'rgba(168,197,214,0.38)' })
          )
        )
      ),
      React.createElement('div', { className: 'hero-scroll' }, React.createElement('div', { className: 'scroll-line' }), 'Scroll to explore')
    ),
    React.createElement(
      'div',
      { className: 'stats-bar' },
      [['500+', 'Bespoke Pieces'], ['100%', 'Made to Order'], ['15+', 'Years Craft'], ['∞', 'Stories Told']].map(([number, label]) =>
        React.createElement(
          'div',
          { key: label, className: 'stat-item rv' },
          React.createElement('div', { className: 'stat-num' }, number),
          React.createElement('div', { className: 'stat-label' }, label)
        )
      )
    ),
    React.createElement(
      'section',
      { style: { padding: '120px 64px', background: '#fff' } },
      React.createElement(
        'div',
        { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' } },
        React.createElement(
          'div',
          null,
          React.createElement('div', { className: 'eyebrow rv', style: { marginBottom: 20 } }, 'About Shaanvik'),
          React.createElement('h2', { className: 'h2 rv d1' }, 'Where craftsmanship meets ', React.createElement('em', { className: 'italic-pink' }, 'emotion')),
          React.createElement('p', { className: 'body-txt rv d2', style: { marginTop: 20, marginBottom: 36 } }, 'At Shaanvik Group Co., Ltd., we believe jewelry is more than an accessory — it is a story, a memory, and a statement. From concept to completion, our team works closely with every client.'),
          React.createElement('button', { className: 'btn-dark rv d3', onClick: () => nav('About') }, React.createElement('span', null, 'Discover Our Story'))
        ),
        React.createElement(
          'div',
          { className: 'rv d2', style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 } },
          [['✦', 'Bespoke Design', 'Every piece uniquely conceived for you.'], ['◈', 'Fine Materials', 'Ethically sourced gemstones & metals.'], ['⟡', 'Master Artisans', 'Decades of expertise in every detail.'], ['◇', 'Timeless Quality', 'Crafted to be treasured for generations.']].map(([icon, title, description]) =>
            React.createElement(
              'div',
              { key: title, className: 'af-card' },
              React.createElement('div', { className: 'af-icon' }, icon),
              React.createElement('div', { className: 'af-title' }, title),
              React.createElement('div', { className: 'af-desc' }, description)
            )
          )
        )
      )
    ),
    React.createElement(
      'section',
      { style: { padding: '120px 64px', background: 'linear-gradient(160deg,#f9f4f2,#edf0f5)', textAlign: 'center' } },
      React.createElement('div', { className: 'eyebrow rv', style: { justifyContent: 'center', marginBottom: 16 } }, 'The Journey'),
      React.createElement('h2', { className: 'h2 rv d1', style: { marginBottom: 16 } }, 'From ', React.createElement('em', { className: 'italic-pink' }, 'vision'), ' to reality'),
      React.createElement('p', { className: 'body-txt rv d2', style: { maxWidth: 520, margin: '0 auto 72px' } }, 'A meticulous three-step process where your dream becomes a wearable masterpiece.'),
      React.createElement(
        'div',
        { style: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32, position: 'relative' } },
        React.createElement('div', { style: { position: 'absolute', top: 56, left: 'calc(16.66% + 28px)', right: 'calc(16.66% + 28px)', height: '1px', background: 'linear-gradient(90deg,var(--pink),var(--blue))' } }),
        [['💡', '01', 'Client Inspiration', 'You share your vision — a photo, a feeling, a dream. We listen deeply.'], ['⚙️', '02', 'Manufacturing', 'Our artisans translate your vision into precise models, then craft each detail.'], ['✨', '03', 'Final Piece', 'Delivered as a wearable story, finished to perfection.']].map(([icon, number, title, description]) =>
          React.createElement(
            'div',
            { key: number, className: 'rv', style: { display: 'flex', flexDirection: 'column', alignItems: 'center' } },
            React.createElement('div', { style: { width: 52, height: 52, borderRadius: '50%', background: '#fff', border: '1.5px solid var(--pink-l)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Cormorant Garamond,serif', fontSize: '1.2rem', marginBottom: 28, boxShadow: '0 4px 20px rgba(232,180,184,.2)', zIndex: 1 } }, number),
            React.createElement(
              'div',
              { style: { background: '#fff', borderRadius: 24, padding: '40px 32px', boxShadow: '0 8px 40px rgba(200,150,140,.1)', width: '100%' } },
              React.createElement('div', { style: { fontSize: '2.4rem', marginBottom: 16 } }, icon),
              React.createElement('h3', { className: 'h3', style: { marginBottom: 12 } }, title),
              React.createElement('p', { className: 'small-txt' }, description)
            )
          )
        )
      ),
      React.createElement('button', { className: 'btn-outline rv', style: { marginTop: 60 }, onClick: () => nav('Process') }, 'See Full Process')
    ),
    React.createElement(
      'section',
      { style: { padding: '120px 64px', background: '#fff' } },
      React.createElement(
        'div',
        { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 52, flexWrap: 'wrap', gap: 24 } },
        React.createElement(
          'div',
          null,
          React.createElement('div', { className: 'eyebrow rv', style: { marginBottom: 16 } }, 'Featured'),
          React.createElement('h2', { className: 'h2 rv d1' }, 'Selected ', React.createElement('em', { className: 'italic-pink' }, 'works'))
        ),
        React.createElement('button', { className: 'btn-outline rv d2', onClick: () => nav('Gallery') }, 'View Full Gallery')
      ),
      React.createElement(
        'div',
        { style: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 22 } },
        GALLERY.filter(item => item.cat === 'rings').slice(0, 4).map((item, index) =>
          React.createElement(
            'div',
            {
              key: item.id,
              className: `rv d${index + 1}`,
              style: { borderRadius: 20, overflow: 'hidden', cursor: 'pointer', transition: 'all .5s cubic-bezier(0.23,1,0.32,1)' },
              onClick: () => nav('Gallery'),
              onMouseEnter: event => {
                event.currentTarget.style.transform = 'translateY(-6px)';
                event.currentTarget.style.boxShadow = '0 24px 60px rgba(200,140,130,.2)';
              },
              onMouseLeave: event => {
                event.currentTarget.style.transform = 'translateY(0)';
                event.currentTarget.style.boxShadow = 'none';
              },
            },
            React.createElement('img', { src: item.image, alt: item.label, loading: 'lazy', decoding: 'async', style: { height: 240, width: '100%', objectFit: 'cover', display: 'block' } }),
            React.createElement(
              'div',
              { style: { padding: '18px 20px', background: '#fff' } },
              React.createElement('div', { style: { fontSize: '.6rem', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 6 } }, item.cat),
              React.createElement('div', { className: 'h3', style: { fontSize: '1.1rem' } }, item.label)
            )
          )
        )
      )
    ),
    React.createElement(
      'section',
      { style: { padding: '120px 64px', background: 'var(--dark)', textAlign: 'center', position: 'relative', overflow: 'hidden' } },
      React.createElement('div', { style: { position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center,rgba(232,180,184,.1) 0%,transparent 70%)', pointerEvents: 'none' } }),
      React.createElement('h2', { className: 'h2 rv', style: { color: '#fff', marginBottom: 20, position: 'relative', zIndex: 1 } }, 'Ready to wear ', React.createElement('em', { className: 'italic-pink' }, 'your story?')),
      React.createElement('p', { className: 'body-txt rv d1', style: { color: 'rgba(255,255,255,.55)', maxWidth: 480, margin: '0 auto 48px', position: 'relative', zIndex: 1 } }, "Let's create something uniquely yours. Our artisans are waiting to bring your vision to life."),
      React.createElement('button', { className: 'btn-pink rv d2', style: { position: 'relative', zIndex: 1 }, onClick: () => nav('Contact') }, 'Begin Your Journey')
    )
  );
};
})();
