import {PrismaClient} from "@prisma/client"
import generateJWt from '../util/token.util.js'
const prisma = new PrismaClient()

export const getPage = async (req,res) => {
    res.render('auth', {title: 'Auth Page', layout:'layout'})
}

export const Auth = async (req,res, next) => {
    try {
        const {name, password} = req.body;

        const admin = await prisma.admin.findUnique({
            where:{
                name: name
            }
        })
        
        if (admin){
            if (admin.password == password){
                const token = generateJWt(admin)
                res.cookie('token', token)
                res.redirect('/dashboard/')
                return;
            }
        }

        console.log(admin)
        res.send('Admin not found')

    } catch (error) {
        next(error)
    }
}