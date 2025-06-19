class MainHeader {

    get 'Вход'() {
        return $('//*[@data-test = "main_signin"]');
    }
    get 'Профиль'() {
        return $('//*[@data-test="main_profile_login_name"]');
    }


    
}

export default MainHeader;