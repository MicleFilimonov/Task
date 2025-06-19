class Cashback {

    get 'Название'() {
        return $('//h2[contains(normalize-space(.), "Как получить Кешбэк?")]');
    }

    get 'Заголовок блока'() {
        return $('//div[@class = "standart-mobile-styles horizon-indents-90"]//*[contains(normalize-space(.), "Чтобы вывести средства со счета")]');
    }

    get 'Подзаголовок блока'() {
        return $('//div[@class = "standart-mobile-styles horizon-indents-90"]//*[contains(normalize-space(.), "Сумма потраченных средств")]');
    }

}

export default Cashback;