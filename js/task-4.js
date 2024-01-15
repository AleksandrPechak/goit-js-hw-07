    // document.addEventListener('DOMContentLoaded', () => {
    //   const loginForm = document.querySelector('.login-form');

    //   loginForm.addEventListener('submit', (event) => {
    //     event.preventDefault(); 

    //     const emailInput = loginForm.elements.email;
    //     const passwordInput = loginForm.elements.password;

    //     const emailValue = emailInput.value.trim();
    //     const passwordValue = passwordInput.value.trim();

    //     if (!emailValue || !passwordValue) {
    //       alert('All form fields must be filled in');
    //       return;
    //     }

    //     const formData = {
    //       email: emailValue,
    //       password: passwordValue
    //     };

    //     console.log(formData);

    //     loginForm.reset();
    //   });
    // });
    
//     const form = document.querySelector('form.login-form');

// form.addEventListener('submit', function (event) {
//   event.preventDefault();

//   let isFormValid = true;
//   const formData = {};

//   const inputs = form.elements;
//   for (let i = 0; i < inputs.length; i++) {
//     const input = inputs[i];
//     if (input.value.trim() === '') {
//       isFormValid = false;
//     }
//     formData[input.name] = input.value.trim();
//   }

//   if (!isFormValid) {
//     alert('All form fields must be filled in');
//   } else {
//     console.log(formData);
//     form.reset();
//   }
// });

const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  const trimmedValues = {
    email: email.trim(),
    password: password.trim(),
  };
  console.log(trimmedValues);
}
