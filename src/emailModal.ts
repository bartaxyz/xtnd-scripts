class EmailModal {
  emailModal: HTMLElement;
  emailModalCloseButton: HTMLElement[];

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
          this.mouseMoveHistory[length] < 15 &&
          this.mouseMoveHistory[length - 1] > this.mouseMoveHistory[length]
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
  const carousels = document.querySelectorAll('[data-component="email-modal"]');

  for (let i = 0; i < carousels.length; ++i) {
    new EmailModal(carousels[i] as HTMLDivElement);
  }
});
