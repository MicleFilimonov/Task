class Promo {


    get 'Статусы'() {
        return $('//ul[contains(@class, "dropdown-promo")]//a[@href="/status" and contains(normalize-space(.), "статусы")]');
    }
    get 'Турниры'() {
        return $('//ul[contains(@class, "dropdown-promo")]//a[@href="/tournaments" and contains(normalize-space(.), "турниры")]');
    }
    get 'Бонусы'() {
        return $('//ul[contains(@class, "dropdown-promo")]//a[@href="/bonus" and contains(normalize-space(.), "бонусы")]');
    }
    get 'Лотереи'() {
        return $('//ul[contains(@class, "dropdown-promo")]//a[@href="/lottery" and contains(normalize-space(.), "лотереи")]');
    }
    get 'Кешбэк'() {
        return $('//ul[contains(@class, "dropdown-promo")]//a[@href="/cashback" and contains(normalize-space(.), "кешбэк")]');
    }
    get 'Новости'() {
        return $('//ul[contains(@class, "dropdown-promo")]//a[@href="/news" and contains(normalize-space(.), "новости")]');
    }
    get 'Акции'() {
        return $('//ul[contains(@class, "dropdown-promo")]//a[@href="/promotions" and contains(normalize-space(.), "акции")]');
    }
}

export default  Promo;