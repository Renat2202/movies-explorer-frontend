import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = React.useState(false);

  function handleBurgerButtonClick() {
    setBurgerMenuOpen(true);
  }

  function handleBurgerCloseButtonClick() {
    setBurgerMenuOpen(false);
}

  return (
    <div className="page">
      < Header isBurgerMenuOpen={isBurgerMenuOpen} burgerMenuOpen={handleBurgerButtonClick} burgerMenuClose={handleBurgerCloseButtonClick} />

      <Switch>

        <Route path='/'>
          < Main />
        </Route>

        <Route path='/movies'>
          < Movies />
        </Route>

        <Route path='/saved-movies'>
        < SavedMovies />
        </Route>

        <Route path='/profile'>
          < Profile />
        </Route>

        <Route path='/signup'>
          < Register />
        </Route>

        <Route path='/signin'>
          < Login />
        </Route>

      </Switch>

      < Footer />
    </div>
  );
}

export default App;
