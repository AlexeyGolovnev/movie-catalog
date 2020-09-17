import React, {useState, useEffect} from 'react';
import './components/container.scss'
import './App.scss'
import Header from "./components/Header/Header";
import SearchInfo from "./components/SearchInfo/SearchInfo";
import Content from "./components/Content/Content";
import Spinner from "./components/Spinner/Spinner";

function App() {

    const [query, setQuery] = useState('');
    const [totalMovies, setTotalMovies] = useState(0);
    const [movies, setMovies] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage, setMoviePerPage] = useState(10);

    const [isFetching, setIsFetching] = useState(false);

    const [queue, setQueue] = useState([]);

    const fetchMovies = async () => {
        setIsFetching(true);
        const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${query}&page=${currentPage}`);
        const data = await response.json();
        if (data.Response) {
            if (data.totalResults) setTotalMovies(data.totalResults)
            else setTotalMovies(0)
            setMovies(data.Search);
            setIsFetching(false);
        }
    }
    useEffect(() => {
        setCurrentPage(1);
    }, [query]);

    useEffect(() => {
        if (isFetching) setQueue([fetchMovies, ...queue]);
        if (queue.length === 0 && !isFetching) fetchMovies();
    }, [query, currentPage])


    useEffect(() => {
        if (queue.length > 0 && !isFetching) {
            queue.pop()();
        }
    })

    return queue.length > 0
        ? (
            <div className="app-wrapper">
                <Header setQuery={setQuery}/>
                <SearchInfo query={query} totalMovies={0}/>
                <Spinner/>
            </div>
        )
        : (
            <div className="app-wrapper">
                <Header setQuery={setQuery}/>
                <SearchInfo query={query} totalMovies={totalMovies}/>
                { isFetching
                    ? <Spinner/>
                    : <Content movies={movies}
                               totalMovies={totalMovies}
                               moviesPerPage={moviesPerPage}

                               currentPage={currentPage}

                               setCurrentPage={setCurrentPage}
                    />
                }
            </div>
        )
}

export default App;

