(() => {
  class Navigation {
    cartItems?: number;

    navigation: HTMLElement;

    constructor(navigation: HTMLDivElement) {
      this.navigation = navigation;

      this.initOnScroll();
    }

    initOnScroll() {
      window.addEventListener('scroll', () => {
        if (scrollY === 0) {
          this.navigation.classList.add('transparent');
        } else {
          this.navigation.classList.remove('transparent');
        }
      })
    }
  }

  addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(
      '[data-component="navigation"]'
    );

    for (let i = 0; i < carousels.length; ++i) {
      new Navigation(carousels[i] as HTMLDivElement);
    }
  });
})();
