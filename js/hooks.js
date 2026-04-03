(() => {
  const { useState, useEffect } = React;

  function useReveal(deps = []) {
    useEffect(() => {
      const elements = document.querySelectorAll('.rv');
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('on');
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

      elements.forEach(element => observer.observe(element));
      return () => observer.disconnect();
    }, deps);
  }

  function useScroll() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 60);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrolled;
  }

  window.AppHooks = { useReveal, useScroll };
})();
