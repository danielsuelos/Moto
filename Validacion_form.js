document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const successAlert = document.getElementById('success-alert');
  const errorAlert = document.getElementById('error-alert');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      successAlert.classList.add('d-none');
      errorAlert.classList.remove('d-none');
    } else {
      form.classList.remove('was-validated');
      errorAlert.classList.add('d-none');
      successAlert.classList.remove('d-none');
      form.reset();
    }
  });
});


