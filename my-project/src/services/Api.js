const API_KEY =  "361b17af987168edd1475fc72637c3ab";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    try {
        console.log("Making API call to:", `${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("API Response:", data);
        
        return data.results || [];
    } catch (error) {
        console.error("Error in getPopularMovies:", error);
        throw error; // Re-throw so the component can handle it
    }
}

export const searchMovies = async (query) => {
    try {
        console.log("Searching for:", query);
        
        const response = await fetch(
            `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
        );
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Search Response:", data);
        
        return data.results || [];
    } catch (error) {
        console.error("Error in searchMovies:", error);
        throw error;
    }
}err