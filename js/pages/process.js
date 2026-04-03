(() => {
const { useReveal: useRevealProcess } = window.AppHooks;

window.AppPages.ProcessPage = function ProcessPage() {
  useRevealProcess();
  const steps = [
    { n: '01', icon: '💡', title: 'Client Inspiration', desc: 'The journey begins with you. Share your vision — a photograph, a feeling, an occasion, a dream. We listen deeply to understand not just what you want, but why you want it. This emotional intelligence guides everything.', tag: 'Discovery' },
    { n: '02', icon: '📐', title: 'Design & Modeling', desc: 'Our design team translates your inspiration into precise 3D CAD models and detailed sketches. You review, refine, and approve — we never move forward without your complete satisfaction at every stage.', tag: 'Creation' },
    { n: '03', icon: '⚙️', title: 'Master Manufacturing', desc: 'Once approved, our master craftsmen take over — shaping, setting, soldering, and polishing with years of expertise. Each piece passes through multiple quality checks at every stage of production.', tag: 'Crafting' },
    { n: '04', icon: '✨', title: 'Final Crafted Piece', desc: 'Your unique jewelry is meticulously finished, quality-certified, and packaged in our signature presentation. Delivered as a wearable story — a masterpiece that exceeds every expectation.', tag: 'Delivery' },
  ];

  return React.createElement('div', { className: 'page process-page' },
    React.createElement('div', { className: 'process-hero' },
      React.createElement('div', { className: 'eyebrow rv', style: { justifyContent: 'center', marginBottom: 16 } }, 'The Journey'),
      React.createElement('h1', { className: 'h1 rv d1', style: { marginBottom: 20 } }, 'From ', React.createElement('em', { className: 'italic-pink' }, 'vision'), ' to reality'),
      React.createElement('p', { className: 'body-txt rv d2', style: { textAlign: 'center' } }, 'A meticulous, deeply personal four-step process where your dream becomes a wearable masterpiece worthy of a lifetime.')
    ),
    React.createElement('div', { className: 'process-steps' },
      steps.map((step, index) =>
        React.createElement('div', { key: step.n, className: `p-step rv d${(index % 3) + 1}` },
          index % 2 === 0
            ? React.createElement(React.Fragment, null,
                React.createElement('div', { className: 'p-content-left' },
                  React.createElement('div', { className: 'p-card' },
                    React.createElement('div', { className: 'p-icon' }, step.icon),
                    React.createElement('h2', { className: 'p-title' }, step.title),
                    React.createElement('p', { className: 'p-desc' }, step.desc),
                    React.createElement('div', { className: 'p-tag' }, step.tag)
                  )
                ),
                React.createElement('div', { className: 'p-spine' },
                  React.createElement('div', { className: 'p-spine-line' }),
                  React.createElement('div', { className: 'p-spine-node' }, step.n),
                  React.createElement('div', { className: 'p-spine-line' })
                ),
                React.createElement('div', { className: 'p-content-right' },
                  React.createElement('div', { className: 'p-empty', style: { fontSize: '5rem', opacity: 0.1 } }, step.icon)
                )
              )
            : React.createElement(React.Fragment, null,
                React.createElement('div', { className: 'p-content-left' },
                  React.createElement('div', { className: 'p-empty', style: { fontSize: '5rem', opacity: 0.1 } }, step.icon)
                ),
                React.createElement('div', { className: 'p-spine' },
                  React.createElement('div', { className: 'p-spine-line' }),
                  React.createElement('div', { className: 'p-spine-node' }, step.n),
                  React.createElement('div', { className: 'p-spine-line' })
                ),
                React.createElement('div', { className: 'p-content-right' },
                  React.createElement('div', { className: 'p-card' },
                    React.createElement('div', { className: 'p-icon' }, step.icon),
                    React.createElement('h2', { className: 'p-title' }, step.title),
                    React.createElement('p', { className: 'p-desc' }, step.desc),
                    React.createElement('div', { className: 'p-tag' }, step.tag)
                  )
                )
              )
        )
      )
    )
  );
};
})();
