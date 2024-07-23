const formLogin = document.querySelector('.login-form');
const onFormSubmit = (event) => {
    event.preventDefault();
    const email = formLogin.elements.email.value.trim();
    const password = formLogin.elements.password.value.trim();
    if (!email || !password) {
        alert('All form fields must be filled in');
        return;
    }
    const formData = {
        email,
        password
    };
    console.log(formData);
    formLogin.reset();
}
formLogin.addEventListener('submit', onFormSubmit);
