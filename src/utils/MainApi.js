class MainApi {
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
        return fetch(`${this.baseUrl}/movies`, {
            // headers: this.headers,
            headers: {
                ...this.headers,
                'authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })
        .then(this._getServerResponse);
    }

    saveMovie(movie) {
        return fetch(`${this.baseUrl}/movies`, {
            method: 'POST',
            // headers: this.headers,
            headers: {
                ...this.headers,
                'authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
                director: movie.director,
                description: movie.description,
                trailer: movie.trailerLink,
                country: movie.country,
                duration: movie.duration,
                year: `${movie.year}`,
                image: `https://api.nomoreparties.co${movie.image.url}`,
                thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
                })
        })
        .then(this._getServerResponse)
    }

    deleteMovie(movieId) {
        return fetch(`${this.baseUrl}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                ...this.headers,
                'authorization': `Bearer ${localStorage.getItem('token')}`
            },
            // headers: this.headers,
        })
        .then(this._getServerResponse);
    }

    getUserInfo() {
        return fetch(`${this.baseUrl}/users/me`, {
            headers: {
                ...this.headers,
                'authorization': `Bearer ${localStorage.getItem('token')}`
            },
            
        })
        .then(this._getServerResponse);
    }

    updateUser(item) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            // headers: this.headers,
            headers: {
                ...this.headers,
                'authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                email: item.email,
                name: item.name
              })
        })
        .then(this._getServerResponse);
    }

    login(data) {
        return fetch(`${this.baseUrl}/signin`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        })
        .then(this._getServerResponse)
    }

    register(data) {
        return fetch(`${this.baseUrl}/signup`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                email: data.email,
                name: data.name,
                password: data.password
            })
        })
        .then(this._getServerResponse)
    }

    checkToken(token) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                ...this.headers,
                'authorization': `Bearer ${token}`
            }
        })
        .then(this._getServerResponse)
    }
}

const mainApi = new MainApi({
    // baseUrl: 'https://api.movies-explorer.tk',
    baseUrl: 'http://localhost:3001',
    headers: {
        'authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    }
})

export default mainApi