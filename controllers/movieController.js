const MovieServices = require('../services/movieservices')

class MovieController {
    static findMovies= async(req, res, next)=>{
        try{
            const data = await MovieServices.findMovies(next);
            res.status(200).json(data);
        } catch(err){
            next(err);
        }
    }

    static findMovieById= async(req, res, next)=>{
        try{
            const {id} = req.params
            const data = await MovieServices.findMovieById(id, next);
            if(data){
                res.status(200).json(data);
            }else{
                next({name:"ErrorNotFound"})
            }
        } catch(err){
            next(err);
        }
    }

    static  createMovie= async(req, res, next)=>{
        try{
            const {title, genres, year} = req.body
            const data = await MovieServices.createMovie(title, genres, year, next);
            res.status(201).json(data);
        } catch(err){
            next(err);
        }
    }

    static updateMovie= async(req, res, next)=>{
        try{
            const {id} = req.params
            const {title, genres, year} = req.body
            const data = await MovieServices.updateMovie(id, title, genres, year, next);
            res.status(200).json(data);
        } catch(err){
            next(err);
        }
    }

    static deleteMovie= async(req, res, next)=>{
        try{
            const {id} = req.params
            const data = await MovieServices.deleteMovie(id, next);
            res.status(200).json(data);
        } catch(err){
            next(err);
        }
    }
}

module.exports = MovieController;