(() => {
  const pagePaths = () => window.AppData.PAGE_PATHS || {};

  window.AppUtils = {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    navigateToPage(setPageOrPageName, pageNameOrOptions, afterNavigate) {
      const legacyMode = typeof setPageOrPageName === 'function';
      const pageName = legacyMode ? pageNameOrOptions : setPageOrPageName;
      const options = legacyMode ? {} : (pageNameOrOptions || {});

      if (legacyMode) {
        setPageOrPageName(pageName);
        if (afterNavigate) {
          afterNavigate();
        }
        window.AppUtils.scrollToTop();
        return;
      }

      if (afterNavigate) {
        afterNavigate();
      }

      const targetPath = pagePaths()[pageName] || 'index.html';
      const targetUrl = new URL(targetPath, window.location.href);

      if (options.filter) {
        targetUrl.searchParams.set('filter', options.filter);
      }

      if (options.hash) {
        targetUrl.hash = options.hash;
      }

      window.location.href = targetUrl.toString();
    },

    getCurrentPageName() {
      const currentFile = window.location.pathname.split('/').pop() || 'index.html';
      const paths = pagePaths();
      return Object.keys(paths).find(name => paths[name] === currentFile) || 'Home';
    },

    getGalleryFilterFromUrl() {
      return new URLSearchParams(window.location.search).get('filter') || 'all';
    },
  };
})();
