const pool = require('../config/config');

class Movie {
    static getMovies = async (next)=>{
        const findQuery = `
        SELECT
        *
        FROM movies;
        `

        try{
            const data = await pool.query(findQuery)

            return data.rows
        } catch(err){
            next(err)
        }
    }

    static getMovieById = async (id, next)=>{
        const findQueryId = `
        SELECT
        *
        FROM movies
        WHERE id = $1;
        `
        try{
            const data = await pool.query(findQueryId, [id])
            
            return data.rows[0]
        } catch(err){
            next(err)
        }
    }

    static createMovie = async (title, genres, year, next)=>{
        const insertQuery = `
        INSERT INTO movies (title, genres, year)
        VALUES ($1, $2, $3)
        RETURNING *;
        `
        try{
            const data = await pool.query(insertQuery, [title, genres, year])
        } catch(err){
            next(err)
        }
    }

    static updateMovie = async (id, title, genres, year, next)=>{
        const updateQuery = `
        UPDATE movies
        SET title = $1, genres = $2, year = $3
        WHERE id = $4
        RETURNING *;
        `
        try{
            const data = await pool.query(updateQuery, [title, genres, year, id])
        } catch(err){
            next(err)
        }
    }

    static deleteMovie = async (id, next)=>{
        const deleteQuery = `
        DELETE FROM movies
        WHERE id = $1
        RETURNING *;
        `
        try{
            const data = await pool.query(deleteQuery, [id])
            return data.rows[0]
        } catch(err){
            next(err)
        }
    }

   
}

module.exports = Movie;