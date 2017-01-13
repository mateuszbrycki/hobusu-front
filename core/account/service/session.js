
hobusu.service('SessionService', function($cookies) {
    this.getToken = function() {
        return $cookies.get(AUTHORIZATION_TOKEN);
    };

    this.saveToken = function(token) {
        $cookies.put(AUTHORIZATION_TOKEN, token);
    };

    this.clearToken = function() {
        $cookies.remove(AUTHORIZATION_TOKEN);
    };

    this.isLogged = function() {
        var logged = ($cookies.get(AUTHORIZATION_TOKEN) != null) ? true : false;

        return logged;
    };
});
