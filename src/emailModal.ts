class EmailModal {
  emailModal: HTMLElement;
  emailModalCloseButton: HTMLElement[];

  emailForm: HTMLFormElement;

  mouseMoveHistory: number[] = [];

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

    this.emailModal.querySelector('[data-component="email-form"]');
    this.emailForm.addEventListener("submit", () => {
      this.closeModal();
    });

    // Open modal if user on the page for more than 45 seconds
    setTimeout(() => {
      this.openModal();
    }, 45000);

    // Only start listening to mousemove after 5 seconds
    setTimeout(() => {
      document.addEventListener("mousemove", (e) => {
        this.mouseMoveHistory.push(e.clientY);

        const { length } = this.mouseMoveHistory;

        if (
          this.mouseMoveHistory[length - 1] < 15 &&
          this.mouseMoveHistory[length - 2] > this.mouseMoveHistory[length - 1]
        ) {
          this.openModal();
        }
      });
    }, 5000);
  }

  openModal() {
    if (sessionStorage.getItem("EmailModalOpened") === "true") {
      return;
    }

    sessionStorage.setItem("EmailModalOpened", "true");

    this.emailModal.classList.add("open");
  }

  closeModal() {
    this.emailModal.classList.remove("open");
  }
}

addEventListener("DOMContentLoaded", () => {
  const emailModals = document.querySelectorAll(
    '[data-component="email-modal"]'
  );

  for (let i = 0; i < emailModals.length; ++i) {
    new EmailModal(emailModals[i] as HTMLDivElement);
  }
});
