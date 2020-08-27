class ModalButton {
  id: string;
  modalButton: HTMLButtonElement | HTMLDivElement;

  modal: HTMLElement;
  modalCloseButton: HTMLElement;

  constructor(modalButton: HTMLButtonElement | HTMLDivElement) {
    this.modalButton = modalButton;

    this.id = this.modalButton.getAttribute("data-modal-button");

    if (!this.id) {
      throw new Error(`The modal button doesn't have any value set`);
    }

    this.modal = document.querySelector(`[data-modal="${this.id}"]`);
    this.modalCloseButton = this.modal.querySelector(
      '[data-component="modal-close-button"]'
    );

    if (!this.modal || !this.modalCloseButton) {
      throw new Error(`Modal "${this.id}" wasn't found`);
    }

    // @ts-ignore
    this.modal.style =
      this.modal.style.cssText +
      `-webkit-backdrop-filter: blur(40px);backdrop-filter: blur(40px);`;

    this.modalButton.addEventListener("click", () => {
      this.modal.classList.add("open");
    });

    this.modalCloseButton.addEventListener("click", () => {
      this.modal.classList.remove("open");
    });
  }
}

addEventListener("DOMContentLoaded", () => {
  const modals = document.querySelectorAll("[data-modal-button]");

  for (let i = 0; i < modals.length; ++i) {
    new ModalButton(modals[i] as HTMLDivElement);
  }
});
