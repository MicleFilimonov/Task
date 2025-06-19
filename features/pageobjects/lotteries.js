class Lotteries {

    get 'Узнать больше'() {
        return $('//div[@class = "understand-more"]//a[contains(normalize-space(.), "Узнать больше")]');
    }
}

export default Lotteries;