import './App.css'
import Login from './pages/Login/Login'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PrivateRoute from './components/routeManage/PrivateRoute';
import Home from './components/Home/Home';
import { UserProvider } from './components/auth/UserContext';
import Callback from './components/auth/Callback';
import Movies from './pages/Movies/Movies';
import Tv from './pages/Tv/Tv';
import MovieId from './pages/Movies/MoviesId/MovieId';
import TvId from './pages/Tv/TvId/TvId';
import TvSeason from './pages/Tv/TvId/TvSeason/TvSeason';
import Actors from './pages/Actors/Actors';
import Search from './pages/Search/Search';
import Colletions from './pages/Collections/Colletions';
function App() {


  return (
    <>
        <Router>
          <UserProvider>
          <Routes>
          <Route path="" element={<Navigate to="/home" />} />
          <Route element={<PrivateRoute />}>
                <Route element={<Home/>} path="/home" />
                <Route element={<Movies/>} path="/movie" />
                <Route element={<MovieId/>} path="/movie/:id" />
                <Route element={<Tv/>} path="/tv" />
                <Route element={<TvId/>} path="/tv/:id" />
                <Route element={<TvSeason/>} path="/tv/:id/:season_number" />
                <Route element={<Actors/>} path="/actors" />
                <Route element={<Search/>} path="/search" />
                <Route element={<Colletions/>} path="/collection/:id" />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/callback" element={<Callback />} />
          </Routes>
          </UserProvider>
        </Router>
    </>
  )
}

export default App
