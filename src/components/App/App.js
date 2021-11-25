import React from 'react';
import { Route, Switch, Redirect, useHistory, useLocation } from 'react-router-dom'
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import {CurrentUserContext} from '../../context/CurrentUserContext';

import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

import useWindowDimensions from "../../utils/windowDimension";

function App() {
  const history = useHistory();
  let location = useLocation().pathname;
  const [isBurgerMenuOpen, setBurgerMenuOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [isFilmsNotFoundShown, setIsFilmsNotFoundShown] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [moviesIsShownCount, setMoviesIsShownCount] = React.useState(7);
  const [moviesIsShown, setMoviesIsShown] = React.useState(7);
  const [currentUser, setCurrentUser] = React.useState({});
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [filtredSavedMovies, setFiltredSavedMovies] = React.useState([]);
  const [signUpErrorMessage, setSignUpErrorMessage] = React.useState('');
  const [isShortMoviesFiltered, setIsShortMoviesFiltered] = React.useState(false);

  const { width, height } = useWindowDimensions();

  function tokenCheck() {
    const token = localStorage.getItem("token");
    if (token) {
      mainApi.checkToken(token)
            .then((user) => {
                if (user) {
                    setLoggedIn(true);
                    setCurrentUser(user);
                    history.push(location);
                }
            })
            .catch((err) => {
                console.log(`${err}`);
                localStorage.removeItem("token");
                history.push("/");
            });
    }
  }


  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
        return;
    } else {
        Promise.all([mainApi.getUserInfo(), mainApi.getMovies()])
            .then(([userData, movies]) => {
                console.log(movies)
                setCurrentUser({
                    ...currentUser,
                    name: userData.name,
                    email: userData.email,
                });
                localStorage.setItem('savedMovies', JSON.stringify(movies));
                setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
                setFiltredSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
            })
            .catch((err) => {
                console.log(err);
            });
    }
  }, [isLoggedIn]);


  React.useEffect(() => {
      if (width >= 480) {
        setMoviesIsShown(7);
        setMoviesIsShownCount(7)
      } else if (width < 480) {
        setMoviesIsShown(5);
        setMoviesIsShownCount(5);
      }
                
    }, [width]);


  // React.useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     const token = localStorage.getItem('token');
  //     mainApi.checkToken(token)
  //     .then((user) => {
  //         setLoggedIn(true);
  //         // console.log(isLoggedIn);
  //         setCurrentUser(user);
  //         // history.push(location);
  //       })
  //     .catch((err) => {
  //         console.log(`${err}`);
  //     })
  //   }
  // }, [])

  // React.useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     mainApi.getUserInfo(token)
  //     .then((user) => {
  //       setCurrentUser(user);
  //       setLoggedIn(true);
  //     })
  //     .catch((err) => {
  //       console.log(`${err}`);
  //     })
  //   }
  // }, [isLoggedIn]);


  // React.useEffect(() => {
  //   if(isLoggedIn) {
  //     mainApi.getMovies()
  //     .then((movies) => {
  //       localStorage.setItem('savedMovies', JSON.stringify(movies));
  //       setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
  //       setFiltredSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
  //       // console.log(savedMovies);
  //     })
  //     .catch((err) => {
  //       console.log(`${err}`);
  //     })
  //   }
  // }, [isLoggedIn])


  React.useEffect(() => {
    moviesApi.getMovies()
    .then((movies) => {
      console.log(1)
      setIsLoading(true);
      localStorage.setItem('movies', JSON.stringify(movies));
      setMovies(movies);
      if (localStorage.getItem('filteredMovies')) {
        setFilteredMovies(JSON.parse(localStorage.getItem('filteredMovies')));
      }
    })
    .catch((err) => {
      console.log(`${err}`);
    })
  }, []);


  function handleBurgerButtonClick() {
    setBurgerMenuOpen(true);
  }

  function handleBurgerCloseButtonClick() {
    setBurgerMenuOpen(false);
  }

  function handleSearchMovies(keyword) {
    const movies = JSON.parse(localStorage.getItem('movies'));
    if (!keyword) {
      setFilteredMovies([]);
    }
    setFilteredMovies(filterMovies(movies, keyword));
    localStorage.setItem('filteredMovies', JSON.stringify(filterMovies(movies, keyword)));
  }

  function handleSearchSavedMovies(keyword) {
    const movies = JSON.parse(localStorage.getItem('savedMovies'))
    console.log(savedMovies);
    if (!keyword) {
      setSavedMovies(movies);
      console.log(filtredSavedMovies);
      return
    }
    setSavedMovies(filterMovies(movies, keyword))
    // setFiltredSavedMovies(filterMovies(movies, keyword));
    localStorage.setItem('filteredSavedMovies', JSON.stringify(filterMovies(movies, keyword)))
  }

  function filterMovies(movies, keyword) {
    if (!keyword) {
      return []
    }
    const filteredMoviesArray = !isShortMoviesFiltered 
    ? movies.filter(movie => movie.nameRU.toLowerCase().includes(keyword.toLowerCase()))
    : movies.filter(movie => movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) && movie.duration <= 40);
    if (filteredMoviesArray.length === 0) {
      setIsFilmsNotFoundShown(true);  
    } else {
      setIsFilmsNotFoundShown(false);
    }
    return filteredMoviesArray
  }

  function checkShortMovies(tumblerCheck) {
    setIsShortMoviesFiltered(tumblerCheck);
  }

  function handleShowMoreMovies() {
    setMoviesIsShown(moviesIsShown + moviesIsShownCount);  
  }

  function saveMovie(movie) {
    mainApi.saveMovie(movie)
      .then((res) => {
        setSavedMovies([res, ...savedMovies]);
      })
      .catch((err) => {
        console.log(`${err}`);
    });
  }

  function checkSaveStatus(movie) {
    console.log(movie.id);
    return savedMovies.some(
        savedMovie => savedMovie.movieId === movie.id
    );         
  }

  function deleteMovie(movie) {
    const movieId = savedMovies.find(savedMovie => savedMovie.movieId === (movie.movieId || movie.id))._id;
    console.log(movieId);

    mainApi.deleteMovie(movieId)
      .then(() =>{
        setSavedMovies((state) => state.filter((c) => c._id !== movieId));
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }

  function hadleLikeMovie(movieIsSaved, movie) {
    movieIsSaved ? deleteMovie(movie) : saveMovie(movie);
  }

  function handleDeleteMovie(movie) {
    deleteMovie(movie);
  }


  function handleSignUp(data) {
    mainApi.register(data)
      .then((res) => {
        if (res) {
          mainApi.login(data)
          .then((res) => {
            mainApi.checkToken(res.token)
            .then(() =>{
              setSignUpErrorMessage('');
              setLoggedIn(true);
              localStorage.setItem('token' , res.token);
              history.push('/movies');
            })
            .catch((err) => {
              console.log(`${err}`);
            }); 
          })
          .catch((err) => {
            console.log(`${err}`);
          });
        }
      })
      .catch((err) => {
        setSignUpErrorMessage(`${err}`);
        console.log(`${err}`);
      }); 
  }

  // function handleSignIn(data) {
  //   mainApi.login(data)
  //   .then((res) => {
  //     mainApi.checkToken(res.token)
  //     .then(() =>{
  //       setLoggedIn(true);
  //       localStorage.setItem('token' , res.token);
  //       history.push('/movies');
  //     })
  //     .catch((err) => {
  //       console.log(`${err}`);
  //     }); 
  //   })
  //   .catch((err) => {
  //     console.log(`${err}`);
  //   });
  // }

  function handleSignIn(data) {
      mainApi.login(data)
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          localStorage.setItem('token' , res.token);
          history.push('/movies');
        }
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }

  function handleSignOut() {
    localStorage.removeItem('token');
    localStorage.removeItem("movies");
    setCurrentUser({ name: "", email: "" });
    setSavedMovies([]);
    setLoggedIn(false);
    history.push('/');
  }

  function handleUpdateUser(updatedUserInfo) {
    mainApi.updateUser(updatedUserInfo)
    .then((updatedUserInfo) => {
      setCurrentUser(updatedUserInfo);
    })
    .catch((err) => {
      console.log(`${err}`);
    });
  }

  // React.useEffect(() => {
  //   tokenCheck();
  // }, []);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      mainApi.checkToken(token)
            .then((user) => {
                if (user) {
                    setLoggedIn(true);
                    setCurrentUser(user);
                    history.push(location);
                }
            })
            .catch((err) => {
                console.log(`${err}`);
                localStorage.removeItem("token");
                history.push("/");
            });
    }
  }, []);


  return (
    <CurrentUserContext.Provider value={currentUser}>  
      <div className="page">
        <Switch>
          <Route exact path={['/', '/movies', '/saved-movies', '/profile']}>
            < Header isBurgerMenuOpen={isBurgerMenuOpen} burgerMenuOpen={handleBurgerButtonClick} burgerMenuClose={handleBurgerCloseButtonClick} isLoggedIn={isLoggedIn} />
          </Route>
        </Switch>

        <Switch>

          <Route exact path='/'>
            < Main />
          </Route>

  
          <ProtectedRoute path='/movies' isLoggedIn={isLoggedIn}>
            < Movies 
              isLoading={isLoading} 
              movies={movies} 
              filteredMovies={filteredMovies} 
              searchMovies={handleSearchMovies} 
              isFilmsNotFoundShown={isFilmsNotFoundShown}
              moviesIsShown={moviesIsShown}
              moreMovies={handleShowMoreMovies}
              onLikeMovie={hadleLikeMovie}
              savedMovies={savedMovies}
              checkSaveStatus={checkSaveStatus}
              checkShortMovies={checkShortMovies}
              isShortMoviesFiltered={isShortMoviesFiltered}
            />
          </ProtectedRoute>

          <ProtectedRoute path='/saved-movies' isLoggedIn={isLoggedIn}>
            < SavedMovies 
              isLoading={isLoading} 
              checkSaveStatus={checkSaveStatus} 
              savedMovies={savedMovies} 
              deleteMovie={handleDeleteMovie}
              searchSavedMoviesSubmit={handleSearchSavedMovies}
              checkShortMovies={checkShortMovies}
              isShortMoviesFiltered={isShortMoviesFiltered}
              filtredSavedMovies={filtredSavedMovies}
              isFilmsNotFoundShown={isFilmsNotFoundShown}
              />
          </ProtectedRoute>

          <ProtectedRoute path='/profile' isLoggedIn={isLoggedIn}>
            < Profile onUpdateUser={handleUpdateUser} onSignOut={handleSignOut} currentUser={currentUser}/>
          </ProtectedRoute>

          <Route path='/signup'>
            < Register onSignUp={handleSignUp} signUpErrorMessage={signUpErrorMessage}/>
          </Route>

          <Route  path='/signin'>
            < Login onSignIn={handleSignIn} />
          </Route>

          <Route path='/not-found'>
            < NotFound />
          </Route>

          <Route path='*'>
            < Redirect to='/not-found'/>
          </Route>

        </Switch>

        <Switch>
          < Route exact path={['/', '/movies', '/saved-movies']}>
            < Footer />
          </Route>
        </Switch>
        
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
