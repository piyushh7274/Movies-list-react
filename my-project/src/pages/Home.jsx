import MovieCard from "../components/MovieCard"
import { useState } from "react"


function Home(){
    const Movies=[
        {id:1, title:"John Wick", release_date:"2025"},
        {id:2, title:"Mission Impossible", release_date:"2025"},
        {id:3, title:"Gifted", release_date:"2017"},
        {id:4, title:"Sing Street", release_date:"2016"},
    ]

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch=(e)=>{
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }

    return(
       <div className="Home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
             type="text"
             placeholder="search for movies.." className="search-input"
             value={searchQuery}
             onChange={(e)=> setSearchQuery(e.target.value)}/>
             <button 
                type="submit"  className="search-btn">
                Search
             </button>
        </form>
        <div className="movies-grid">
            {Movies.map(movie => (
                <MovieCard movie={movie} key={movie.id}/>
            )
            )}
        </div>
       </div>
    )
}
export default Home