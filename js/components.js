(() => {
const { useState, useEffect, useRef } = React;
const { PAGE_NAMES } = window.AppData;
const { navigateToPage } = window.AppUtils;
const { useScroll } = window.AppHooks;
const HEADER_LOGO_SRC = 'src/logo_all_sizes/logo_256x256.png';

function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const ringX = useRef(0);
  const ringY = useRef(0);

  useEffect(() => {
    const handleMove = event => {
      mouseX.current = event.clientX;
      mouseY.current = event.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.clientX}px`;
        cursorRef.current.style.top = `${event.clientY}px`;
      }
    };

    const interactiveNodes = document.querySelectorAll('a,button,.gi,.pc,.af-card,.value-card,.p-card');
    const expandCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.width = '16px';
        cursorRef.current.style.height = '16px';
      }
      if (ringRef.current) {
        ringRef.current.style.width = '52px';
        ringRef.current.style.height = '52px';
        ringRef.current.style.borderColor = 'var(--gold)';
      }
    };
    const shrinkCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.width = '10px';
        cursorRef.current.style.height = '10px';
      }
      if (ringRef.current) {
        ringRef.current.style.width = '36px';
        ringRef.current.style.height = '36px';
        ringRef.current.style.borderColor = 'var(--pink)';
      }
    };

    document.addEventListener('mousemove', handleMove);
    interactiveNodes.forEach(node => {
      node.addEventListener('mouseenter', expandCursor);
      node.addEventListener('mouseleave', shrinkCursor);
    });

    let frameId;
    const animateRing = () => {
      ringX.current += (mouseX.current - ringX.current) * 0.1;
      ringY.current += (mouseY.current - ringY.current) * 0.1;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringX.current}px`;
        ringRef.current.style.top = `${ringY.current}px`;
      }

      frameId = requestAnimationFrame(animateRing);
    };

    animateRing();

    return () => {
      document.removeEventListener('mousemove', handleMove);
      interactiveNodes.forEach(node => {
        node.removeEventListener('mouseenter', expandCursor);
        node.removeEventListener('mouseleave', shrinkCursor);
      });
      cancelAnimationFrame(frameId);
    };
  }, []);

  return React.createElement(
    React.Fragment,
    null,
    React.createElement('div', { className: 'cursor', ref: cursorRef }),
    React.createElement('div', { className: 'cursor-ring', ref: ringRef })
  );
}

function Navbar({ page, setPage }) {
  const scrolled = useScroll();
  const [mobileOpen, setMobileOpen] = useState(false);
  const nav = nextPage => navigateToPage(nextPage, {}, () => setMobileOpen(false));

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'nav',
      { className: `nav${scrolled ? ' scrolled' : ''}` },
      React.createElement(
        'div',
        { className: 'nav-logo', onClick: () => nav('Home'), 'aria-label': 'Shaanvik home' },
        React.createElement('img', { className: 'brand-logo nav-brand-logo', src: HEADER_LOGO_SRC, alt: 'Shaanvik Group' })
      ),
      React.createElement(
        'ul',
        { className: 'nav-links' },
        PAGE_NAMES.filter(name => name !== 'Home').map(name =>
          React.createElement(
            'li',
            { key: name },
            React.createElement('button', { onClick: () => nav(name), className: page === name ? 'active' : '' }, name)
          )
        )
      ),
      React.createElement('button', { className: 'nav-cta', onClick: () => nav('Contact') }, 'Customize'),
      React.createElement(
        'div',
        { className: 'ham', onClick: () => setMobileOpen(true) },
        React.createElement('span', null),
        React.createElement('span', null),
        React.createElement('span', null)
      )
    ),
    React.createElement(
      'div',
      { className: `mob-nav${mobileOpen ? ' open' : ''}` },
      React.createElement('button', { className: 'mob-close', onClick: () => setMobileOpen(false) }, '✕'),
      PAGE_NAMES.map(name => React.createElement('button', { key: name, onClick: () => nav(name) }, name))
    )
  );
}

function Footer({ setPage }) {
  const nav = nextPage => navigateToPage(nextPage);

  return React.createElement(
    'footer',
    { className: 'footer' },
    React.createElement(
      'div',
      { className: 'ft-top' },
      React.createElement(
        'div',
        null,
        React.createElement('div', { className: 'ft-logo' }, React.createElement('img', { className: 'brand-logo footer-brand-logo', src: HEADER_LOGO_SRC, alt: 'Shaanvik Group' })),
        React.createElement('p', { className: 'ft-desc' }, 'Fine jewelry, made to order. Every piece is a story crafted with precision, love, and extraordinary materials.')
      ),
      React.createElement(
        'div',
        null,
        React.createElement('div', { className: 'ft-col-h' }, 'Navigate'),
        React.createElement(
          'ul',
          { className: 'ft-links' },
          PAGE_NAMES.map(name =>
            React.createElement('li', { key: name }, React.createElement('button', { onClick: () => nav(name) }, name))
          )
        )
      ),
      React.createElement(
        'div',
        null,
        React.createElement('div', { className: 'ft-col-h' }, 'Jewelry'),
        React.createElement(
          'ul',
          { className: 'ft-links' },
          ['Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Custom Orders'].map(label =>
            React.createElement('li', { key: label }, React.createElement('button', { onClick: () => nav('Gallery') }, label))
          )
        )
      ),
      React.createElement(
        'div',
        null,
        React.createElement('div', { className: 'ft-col-h' }, 'Contact'),
        React.createElement(
          'ul',
          { className: 'ft-links' },
          React.createElement('li', null, React.createElement('a', { href: 'mailto:Shaanvikgroup@gmail.com' }, 'Shaanvikgroup@gmail.com')),
          React.createElement('li', null, React.createElement('a', { href: 'tel:+66638198812' }, '+66 63 819 8812')),
          React.createElement('li', null, React.createElement('a', { href: '#' }, 'Bangkok, Thailand'))
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'ft-bottom' },
      React.createElement('div', { className: 'ft-copy' }, '© 2025 Shaanvik Group Co., Ltd. All rights reserved.'),
      React.createElement(
        'div',
        { className: 'ft-social' },
        ['◈', '◇', '✦', '⟡'].map((symbol, index) => React.createElement('button', { key: index, className: 'social-btn' }, symbol))
      )
    )
  );
}

window.AppComponents = { Cursor, Navbar, Footer };
})();
