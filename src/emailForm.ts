(() => {
  class EmailForm {
    emailForm: HTMLElement;
    emailInput: HTMLInputElement;
    errorMessage: HTMLElement;

    constructor(emailForm: HTMLDivElement) {
      this.emailForm = emailForm;
      this.emailInput = emailForm.querySelector(
        '[data-component="email-input"]'
      );
      this.errorMessage = emailForm.querySelector(
        '[data-component="email-error-message"]'
      );

      let checkingValidity = false;

      this.emailInput.addEventListener("invalid", (event) => {
        event.preventDefault();
        if (checkingValidity) {
          checkingValidity = false;
          return;
        }
        console.log("invalid");
        checkingValidity = true;

        if (!this.emailInput.checkValidity()) {
          this.errorMessage.innerText = this.emailInput.validationMessage;
        }
      });

      emailForm.addEventListener("submit", () => {
        this.errorMessage.innerText = "";
      });
    }
  }

  addEventListener("DOMContentLoaded", () => {
    const emailForms = document.querySelectorAll(
      '[data-component="email-form"]'
    );

    for (let i = 0; i < emailForms.length; ++i) {
      new EmailForm(emailForms[i] as HTMLDivElement);
    }
  });
})();
