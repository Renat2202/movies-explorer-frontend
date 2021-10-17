class MoviesApi {
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.headers = options.headers;
    }

    _getServerResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Не удалось получить ответ от сервера. Ошибка ${res.status}`);
    }

    getMovies() {
        return fetch(`${this.baseUrl}`, {
            headers: this.headers
        })
        .then(this._getServerResponse);
    }

    
}

const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default moviesApi