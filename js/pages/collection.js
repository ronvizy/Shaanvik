(() => {
const { useState: useStateCollection, useEffect: useEffectCollection } = React;
const { createPortal } = ReactDOM;
const { COLLECTION: COLLECTION_ITEMS } = window.AppData;
const { navigateToPage: jumpToPage } = window.AppUtils;
const { useReveal: useRevealCollection } = window.AppHooks;

window.AppPages.CollectionPage = function CollectionPage({ setPage, setGalleryFilter }) {
  useRevealCollection();
  const [modal, setModal] = useStateCollection(null);
  useEffectCollection(() => {
    document.body.classList.toggle('modal-open', Boolean(modal));
    return () => document.body.classList.remove('modal-open');
  }, [modal]);
  const galleryCategoryMap = {
    rings: 'rings',
    ring: 'rings',
    earrings: 'earings',
    earring: 'earings',
    earings: 'earings',
    earing: 'earings',
    bracelets: 'bracelets',
    bracelet: 'bracelets',
    necklaces: 'necklaces',
    necklace: 'necklaces',
    pendants: 'pendents',
    pendant: 'pendents',
    pendents: 'pendents',
    pendent: 'pendents',
  };
  const openGalleryCategory = category => {
    const normalized = galleryCategoryMap[String(category || '').trim().toLowerCase()] || 'all';
    if (setGalleryFilter) setGalleryFilter(normalized);
    jumpToPage('Gallery', { filter: normalized }, () => setModal(null));
  };

  return React.createElement('div', { className: 'page coll-page' },
    React.createElement('div', { style: { maxWidth: 600 } },
      React.createElement('div', { className: 'eyebrow rv', style: { marginBottom: 18 } }, 'Our Collection'),
      React.createElement('h1', { className: 'h1 rv d1' }, 'Designs that ', React.createElement('em', { className: 'italic-pink' }, 'inspire')),
      React.createElement('p', { className: 'body-txt rv d2', style: { marginTop: 20 } }, "Each piece in our portfolio is a starting point. Tell us what speaks to you, and we'll craft something entirely, uniquely your own.")
    ),
    React.createElement('div', { className: 'coll-grid' },
      COLLECTION_ITEMS.map((item, index) =>
        React.createElement('div', { key: item.name, className: `pc rv d${(index % 4) + 1}`, onClick: () => openGalleryCategory(item.cat) },
          React.createElement('div', { className: 'pc-img' },
            React.createElement('img', { className: 'pc-img-bg', src: item.image, alt: item.name, loading: 'lazy', decoding: 'async' })
          ),
          React.createElement('div', { className: 'pc-body' },
            React.createElement('div', { className: 'pc-cat' }, item.cat),
            React.createElement('div', { className: 'pc-name' }, item.name),
            React.createElement('div', { className: 'pc-desc' }, item.desc),
            React.createElement('button', { className: 'pc-btn', type: 'button', onClick: event => { event.stopPropagation(); setModal(item); } }, 'Customize this design →')
          )
        )
      )
    ),
    modal && createPortal(
      React.createElement('div', { className: 'modal-ov open', onClick: event => { if (event.target === event.currentTarget) setModal(null); } },
        React.createElement('div', { className: 'modal-box' },
          React.createElement('button', { className: 'modal-x', onClick: () => setModal(null) }, '✕'),
          React.createElement('img', { className: 'm-image', src: modal.image, alt: modal.name, loading: 'lazy', decoding: 'async' }),
          React.createElement('div', { className: 'm-tag' }, modal.cat),
          React.createElement('h2', { className: 'm-title' }, modal.name),
          React.createElement('p', { className: 'm-desc' }, modal.modal_desc),
          React.createElement('button', { className: 'btn-dark', onClick: () => jumpToPage('Contact', {}, () => setModal(null)) }, React.createElement('span', null, 'Begin Customization'))
        )
      ),
      document.body
    )
  );
};
})();
