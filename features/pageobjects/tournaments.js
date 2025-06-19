class Tournaments {

    get 'ROX STARS'() {
        return $('//div[@data-tournament="roxstars"]');
    }
    get 'LUCKY LEAGUE'() {
        return $('//div[@data-tournament="luckyleague"]');
    }
}

export default Tournaments;