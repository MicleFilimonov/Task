class Menu {

    get 'Пункт Промо'() {
        return $('//a[@href="/promo" and contains(normalize-space(.), "промо")]');
    }
}

export default Menu;
