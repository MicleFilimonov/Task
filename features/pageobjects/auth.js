class Auth {


    get 'Поле e-mail'() {
        return $('//input[@data-test = "email_field"]');
    }
    get 'Поле password'() {
        return $('//input[@data-test = "passwd_field"]');
    }
    get 'Кнопка Войти'() {
        return $('//button[@data-test="auth-form-btn"]');
    }

}

export default Auth;