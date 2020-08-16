(() => {
  class CartButton {
    cartItems?: number;

    cartButton: HTMLElement;

    constructor(cartButton: HTMLDivElement) {
      this.cartButton = cartButton;

      this.initCartButtonWatcher();
    }

    initCartButtonWatcher() {
      let number = 0;
      setInterval(() => {
        if (!this.cartButton.textContent) return;

        const currentNumber = parseInt(this.cartButton.textContent, 10);

        if (number === currentNumber) return;

        number = currentNumber;

        if (number === 0) {
          this.cartButton.classList.add("empty");
        } else {
          this.cartButton.classList.remove("empty");
        }
      }, 100);
    }
  }

  addEventListener("DOMContentLoaded", () => {
    const cartButtons = document.querySelectorAll(
      '[data-component="cart-button"]'
    );

    for (let i = 0; i < cartButtons.length; ++i) {
      new CartButton(cartButtons[i] as HTMLDivElement);
    }
  });
})();
