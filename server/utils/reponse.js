// import { Response } from "express"

// export const reponseFunction = (message, statusCode = 200, data) => {
//     return Response.status(statusCode).json({
//         message: message,
//         status: 500,
//         data: data,
//     })
// }

export const reponseFunction = (req, res, next) => {
    res.reponseFunction = (message, statusCode = 200, data) => {
        res.status(statusCode).json({
            message: message,
            status: statusCode,
            data: data,
        })
    }
    next();
}

export const errorReponse = (req, res, next) => {
    res.errorReponse = (message, statusCode = 500, error = 'Internal Server Error') => {
        res.status(statusCode).json({
            message: message,
            status: statusCode,
            error: error
        })
    }
    next();
}