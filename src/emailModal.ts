(() => {
  class EmailModal {
    emailModal: HTMLElement;
    emailModalCloseButton: HTMLElement[];

    constructor(emailModal: HTMLDivElement) {
      this.emailModal = emailModal;

      // @ts-ignore
      this.emailModal.style =
        this.emailModal.style.cssText + `backdrop-filter: blur(40px);`;

      this.emailModalCloseButton = Array.from(
        document.querySelectorAll('[data-component="email-modal-close-button"]')
      );

      this.emailModalCloseButton.forEach((closeButton) => {
        closeButton.addEventListener("click", () => {
          this.closeModal();
        });
      });

      setTimeout(() => {
        this.openModal();
      }, 45000);

      document.addEventListener("mousemove", (e) => {
        if (e.clientY < 15) {
          this.openModal();
        }
      });
    }

    openModal() {
      if (sessionStorage.getItem("EmailModalOpened") === "true") {
        return;
      }

      sessionStorage.setItem("EmailModalOpened", "true");

      this.emailModal.style.display = "block";
      this.emailModal.style.opacity = "1";
    }

    closeModal() {
      this.emailModal.style.opacity = "0";

      setTimeout(() => {
        this.emailModal.style.display = "none";
      }, 250);
    }
  }

  addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(
      '[data-component="email-modal"]'
    );

    for (let i = 0; i < carousels.length; ++i) {
      new EmailModal(carousels[i] as HTMLDivElement);
    }
  });
})();
