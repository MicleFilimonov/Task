class Profile {

    get 'Подтверждена в почте'() {
        return $('//span[contains(@class, "text--green") and contains ( ., "Подтверждена")]');
    }
    get 'New в статусе'() {
        return $('//div[contains(@class, "col-sm-4") and .//p[@class="label-input" and contains(., "New")]]');
    }




}

export default Profile;

