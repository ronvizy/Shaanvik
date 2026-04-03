(() => {
  const { getCurrentPageName, getGalleryFilterFromUrl } = window.AppUtils;
  const { Cursor, Navbar, Footer } = window.AppComponents;
  const { HomePage, AboutPage, ProcessPage, GalleryPage, CollectionPage, ContactPage } = window.AppPages;

  function App() {
    const page = getCurrentPageName();
    const pages = {
      Home: React.createElement(HomePage),
      About: React.createElement(AboutPage),
      Process: React.createElement(ProcessPage),
      Gallery: React.createElement(GalleryPage, { activeFilter: getGalleryFilterFromUrl() }),
      Collection: React.createElement(CollectionPage),
      Contact: React.createElement(ContactPage),
    };

    return React.createElement(
      React.Fragment,
      null,
      React.createElement(Cursor),
      React.createElement(Navbar, { page }),
      React.createElement('main', { key: page }, pages[page] || pages.Home),
      React.createElement(Footer)
    );
  }

  ReactDOM.render(React.createElement(App), document.getElementById('root'));
})();
