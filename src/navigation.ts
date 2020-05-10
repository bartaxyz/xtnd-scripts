(() => {
  class Navigation {
    cartItems?: number;

    navigation: HTMLElement;

    constructor(navigation: HTMLDivElement) {
      this.navigation = navigation;

      this.initNavigation();
    }

    initNavigation() {
      const callback = () => {
        if (scrollY === 0) {
          this.navigation.classList.add("transparent");
        } else {
          this.navigation.classList.remove("transparent");
        }
      };
      window.addEventListener("scroll", callback);
      window.addEventListener("DOMContentLoaded", callback);
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
