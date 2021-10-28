import express, { Request, Response } from "express"
import { User } from "../models/User"
import bcryptjs from "bcryptjs"

class authController {
    async register(req: Request , res: Response) {
        const { email } = req.body

        try {
    
            if (await User.findOne({ email })) return res.status(400).send({ error: "Este usuário já existe!"})
            const user = await User.create(req.body)
            user.password = undefined;
    
            return res.send(
                { 
                    user,
                }
            )
    
        } catch(err) {
            res.status(400).send({ error: "Registro com falha!"})
        }
    }

    async authenticate(req: Request , res: Response) {

        const {email, password} = req.body 
        const user = await User.findOne({ email }).select('+password')

        if(!user) return res.status(400).send({ error: "Usuário não existe!"})
        if(!await bcryptjs.compare(password, user.password)) return res.status(400).send({ error: "Senha incorreta!"})

        res.send(
            {
                user,
                Status: "Logado com sucesso!"
            }
        ) 
    }
}

export { authController }