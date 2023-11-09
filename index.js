
const displayform = selectElementById('displayform');
const forlogin = selectElementById('forLogin');
const loginForm = selectElementById('loginForm');
const forRegister = selectElementById('forRegister');
const registerForm = selectElementById('registerForm');
const formContainer = selectElementById('formContainer');

displayform.addEventListener('click', showForm);

forRegister.addEventListener('click',() =>{
    forlogin.classList.remove('active')
    forRegister.classList.add('active')
    if(registerForm.classList.contains('toggleForm')){
        formContainer.style.transform = 'translate(-100%)';
        formContainer.style.transition = 'transform .5s';
        registerForm.classList.remove('toggleForm');
        loginForm.classList.add('toggleForm');
    }
})

function selectElementById(e) {
    return document.getElementById(e);
}

function showForm() {
    document.querySelector('.form-wrapper .card').classList.toggle('show');
}

