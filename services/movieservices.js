const MovieRepository = require('../repositories/movierepository')

class MovieServices {

    static findMovies = async (next) =>{
        const data = await MovieRepository.findMovies(next);
        return data;
    }

    static findMovieById = async (id, next) =>{
        const data = await MovieRepository.findMovieById(id, next);
        return data;
    }

    static createMovie = async (title, genres, year, next) =>{
        const data = await MovieRepository.createMovie(title, genres, year, next);
        return data;
    }

    static updateMovie = async (id, title, genres, year, next) =>{
        const data = await MovieRepository.updateMovie(id, title, genres, year, next);
        return data;
    }

    static deleteMovie = async (id, next) =>{
        const data = await MovieRepository.deleteMovie(id, next);
        return data;
    }

}

module.exports = MovieServices;