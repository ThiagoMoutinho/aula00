import { Request, Response, NextFunction, Router } from "express";
import ForbiddenError from "../models/error/forbidden.error.model";


const authorizationRoute = Router();

authorizationRoute.post('/token', (req: Request, res: Response, next: NextFunction) => {

    try{
        const authorizationHeader =  req.headers['authorization'];
    
        if(!authorizationHeader) {
            throw new ForbiddenError('Credenciais não informadas');
        }

        //Basic 

        const [authenticationType, token] = authorizationHeader.split('');

        if (authenticationType !== 'Basic' || !token) {
            throw new ForbiddenError('Tipo de authenticação inválido');
        }

    } catch (error) {
        next(error);
    }

});


export default authorizationRoute;