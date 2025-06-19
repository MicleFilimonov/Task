class Actions {

    get 'Акция 1'() {
        return $('//div[@class = "actions__items"][1]//div[@class = "news-list__item"][1]');
    }

    get 'Акция 2'() {
        return $('//div[@class = "actions__items"][1]//div[@class = "news-list__item"][2]');
    }

    get 'Завершенная акция 1'() {
        return $('//div[@class = "actions__items"][2]//div[@class = "news-list__item"][1]');
    }

    get 'Завершенная акция 2'() {
        return $('//div[@class = "actions__items"][2]//div[@class = "news-list__item"][2]');
    }


}

export default Actions;

/*
Можно было использовать following для элемента "Завершенные", 
но по сути мои локаторы являются уникальными и в случае, 
если в структуру будут внесены изменения, то и в случае использования following
локаторы не будут определятся корректно
Пример : '//p[text()="Завершенные"]/following::div[@class = "actions__items"]//div[@class = "news-list__item"][1]'
*/