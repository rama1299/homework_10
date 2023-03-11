const Movie = require('../models/movie')

class MovieRepository {

    static findMovies = async(next) =>{
        
        const data = await Movie.getMovies(next);
        return data;
    }

    static findMovieById = async(id, next) =>{
        
        const data = await Movie.getMovieById(id, next);
        return data;
    }

    static createMovie = async(title, genres, year, next) =>{
        
        const data = await Movie.createMovie(title, genres, year, next);
        return data;
    }

    static updateMovie = async(id, title, genres, year, next) =>{
        
        const data = await Movie.updateMovie(id, title, genres, year, next);
        return data;
    }

    static deleteMovie = async(id, next) =>{
        
        const data = await Movie.deleteMovie(id, next);
        return data;
    }

}

module.exports = MovieRepository;