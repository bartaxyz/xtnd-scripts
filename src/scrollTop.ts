(() => {
  class ScrollTop {
    scrollTopButton: HTMLElement;

    constructor(scrollTopButton: HTMLDivElement) {
      this.scrollTopButton = scrollTopButton;

      this.scrollTopButton.addEventListener("click", () => {
        scrollTo(0, 0);
      });
    }
  }

  addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(
      '[data-component="scroll-top"]'
    );

    for (let i = 0; i < carousels.length; ++i) {
      new ScrollTop(carousels[i] as HTMLDivElement);
    }
  });
})();
