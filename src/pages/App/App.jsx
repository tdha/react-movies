import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorsListPage from '../ActorsListPage/ActorsListPage';

function App() {
  const [user, setUser] = useState(null);

  return (
    <main>
        { user ? // if user
        <>
        <NavBar />
        <Routes>
            <Route path="/" element={ <MoviesListPage />} /> 
            <Route path="/movies/:movieName" element={ <MovieDetailPage />} /> 
            <Route path="/actors" element={ <ActorsListPage />} /> 
        </Routes>
        </>
        :
        <LoginPage /> // is not logged in, go here (falsy)
    }
    </main>
  );
}

export default App
