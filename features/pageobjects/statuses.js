class Statuses {

    get 'Статус Elite'() {
        return $('//p[@class="status-title" and text()="elite"]');
    }
}

export default Statuses;