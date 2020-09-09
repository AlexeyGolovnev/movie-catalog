import React, {useState, useEffect} from 'react';
import './components/container.scss'
import Header from "./components/Header/Header";
import SearchInfo from "./components/SearchInfo/SearchInfo";
import Content from "./components/Content/Content";

function App() {
    const [query, setQuery] = useState('');
    const [totalMovies, setTotalMovies] = useState(0);
    const [movies, setMovies] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage, setMoviePerPage] = useState(10);

    const fetchMovies = async () => {
        await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${query}&page=${currentPage}`)
            .then(response => response.json())
            .then(data => {
                if (data.Response) {
                    if (data.totalResults)
                        setTotalMovies(data.totalResults)
                    else setTotalMovies(0)
                    setMovies(data.Search);
                }
            })
    }
    useEffect(() => {
        fetchMovies();
    }, [query, currentPage])


    return (
        <div className="App">
            <Header setQuery={setQuery}/>
            <SearchInfo query={query} totalMovies={totalMovies}/>
            <Content movies={movies}
                     totalMovies={totalMovies}
                     moviesPerPage={moviesPerPage}
                     currentPage={currentPage}
                     setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

export default App;
