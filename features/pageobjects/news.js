class News {

    get 'Новость 1'() {
        return $('//div[@class = "main-context"]//div[@class = "news-list__item"][1]');
    }

    get 'Новость 2'() {
        return $('//div[@class = "main-context"]//div[@class = "news-list__item"][2]');
    }


}

export default News;