(() => {
const { useState: useStateGallery, useEffect: useEffectGallery } = React;
const { createPortal } = ReactDOM;
const { GALLERY: GALLERY_ITEMS } = window.AppData;
const { navigateToPage: goToPage, getGalleryFilterFromUrl } = window.AppUtils;
const { useReveal: useRevealGallery } = window.AppHooks;

window.AppPages.GalleryPage = function GalleryPage({ setPage, activeFilter = 'all', setActiveFilter }) {
  const initialFilter = activeFilter === 'all' ? getGalleryFilterFromUrl() : activeFilter;
  const [filter, setFilter] = useStateGallery(initialFilter);
  const [modal, setModal] = useStateGallery(null);
  useRevealGallery([filter]);
  useEffectGallery(() => {
    document.body.classList.toggle('modal-open', Boolean(modal));
    return () => document.body.classList.remove('modal-open');
  }, [modal]);
  useEffectGallery(() => {
    setFilter(activeFilter || getGalleryFilterFromUrl() || 'all');
  }, [activeFilter]);
  const categoryLabels = {
    all: 'All',
    rings: 'Rings',
    necklaces: 'Necklaces',
    earings: 'Earings',
    bracelets: 'Bracelets',
    pendents: 'Pendents',
  };
  const cats = ['all', ...new Set(GALLERY_ITEMS.map(item => item.cat))];
  const descs = {
    1: 'A stunning emerald-cut center stone set in 18k yellow gold with tapered baguette accents. Made entirely to order.',
    2: 'Brilliant-cut diamonds set in platinum, designed for the woman who commands every room she enters.',
    3: 'Cascading yellow gold with diamond accents — a statement of drama and elegance for every occasion.',
    4: 'A vivid blue topaz oval with crossing diamond shoulders in white gold. Bold and architectural.',
    5: 'An emerald pendant surrounded by a halo of pear-shaped diamonds. Nature-inspired luxury.',
    6: 'Round brilliant diamonds in classic prong settings, crafted in 18k white gold — forever elegant.',
    7: 'An oval ruby nestled in a blooming diamond floral setting — a garden worn on your finger.',
    8: 'Traditional craftsmanship reinterpreted with a modern golden arc and diamond paving.',
    9: 'Soft pink sapphires in bezel settings with pave diamond bands — elegant, wearable romance.',
    10: 'Heavy-gauge chain links with pavé diamond surfaces in two-tone gold. Modern heirloom.',
    11: 'Citrine pear drops crowned with white diamond clusters in a winged yellow gold setting.',
    12: 'A round brilliant diamond surrounded by a sparkling halo — the ultimate symbol of eternal love.',
  };
  const filtered = filter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(item => item.cat === filter);

  return React.createElement('div', { className: 'page gallery-page' },
    React.createElement('div', { className: 'gallery-hd' },
      React.createElement('div', null,
        React.createElement('div', { className: 'eyebrow rv', style: { marginBottom: 14 } }, 'Portfolio'),
        React.createElement('h1', { className: 'h2 rv d1' }, 'Our ', React.createElement('em', { className: 'italic-pink' }, 'creations'))
      ),
      React.createElement('div', { className: 'filters rv d2' },
        cats.map(category =>
          React.createElement(
            'button',
            {
              key: category,
              type: 'button',
              className: `fb${filter === category ? ' act' : ''}`,
              onClick: () => {
                setFilter(category);
                if (setActiveFilter) setActiveFilter(category);
                setModal(null);
              },
            },
            categoryLabels[category] || category.charAt(0).toUpperCase() + category.slice(1)
          )
        )
      )
    ),
    React.createElement('div', { className: 'masonry' },
      filtered.map((item, index) =>
        React.createElement('div', { key: item.id, className: `gi rv d${(index % 4) + 1}`, onClick: () => setModal(item) },
          React.createElement('div', { className: 'gi-inner' },
            React.createElement('img', { className: 'gi-thumb', src: item.image, alt: item.label, loading: 'lazy', decoding: 'async', style: { height: item.h } }),
            React.createElement('div', { className: 'gi-ov' },
              React.createElement('div', { className: 'gi-info' },
                React.createElement('h4', null, item.label),
                React.createElement('p', null, categoryLabels[item.cat] || item.cat)
              )
            ),
            React.createElement('div', { className: 'gi-glow' })
          )
        )
      )
    ),
    modal && createPortal(
      React.createElement('div', { className: 'modal-ov open', onClick: event => { if (event.target === event.currentTarget) setModal(null); } },
        React.createElement('div', { className: 'modal-box' },
          React.createElement('button', { className: 'modal-x', onClick: () => setModal(null) }, '✕'),
          React.createElement('img', { className: 'm-image', src: modal.image, alt: modal.label, loading: 'lazy', decoding: 'async' }),
          React.createElement('div', { className: 'm-tag' }, categoryLabels[modal.cat] || modal.cat),
          React.createElement('h2', { className: 'm-title' }, modal.label),
          React.createElement('p', { className: 'm-desc' }, descs[modal.id] || 'A beautiful custom-crafted piece by Shaanvik Group.'),
          React.createElement('button', { className: 'btn-dark', onClick: () => goToPage('Contact', {}, () => setModal(null)) }, React.createElement('span', null, 'Customize This Design'))
        )
      ),
      document.body
    )
  );
};
})();
