function check() {
    var username = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
    var email = document.getElementById("email").value;
    var passport = document.getElementById("passport").value;

    var nameError = document.getElementById("nameError");
    var passwordError = document.getElementById("passwordError");
    var password2Error = document.getElementById("password2Error");
    var emailError = document.getElementById("emailError");
    var passport = document.getElementById("passportError");
    nameError.innerHTML = "";
    passwordError.innerHTML = "";
    password2Error.innerHTML = "";
    emailError.innerHTML = "";
    passport.innerHTML = "";

    if (!/^[a-zA-Z0-9._-]{6,20}$/.test(username)) {
        nameError.innerHTML = "Поле 'Логин' должно содержать от 6 до 20 символов и состоять только из латинских букв, точки, подчеркивания и дефиса";
    }

    if (password !== password2) {
        passwordError.innerHTML = "Пароли не совпадают";
        password2Error.innerHTML = "Пароли не совпадают";
    }

    var emailRegex = /^[a-zA-Z0-9.-]+@[a-zA-Z]+\.[a-zA-Z]+$/;
    if (!emailRegex.test(email)) {
        emailError.innerHTML = "Неверный формат Email";
    }

    var passportRegex = /^[A-Za-z]{2}\d{7}$/;
    if (!passportRegex.test(passport)) {
        passportError.innerHTML = "Номер паспорта должен содержать две латинские буквы, за которыми следуют семь цифр";
    }
}