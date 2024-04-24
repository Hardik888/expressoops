import express, { Request, Response, Application, NextFunction, json } from 'express';
import { GetInfo } from './controller/getaddress';
import { Auth } from './auth';
const app: Application = express();

app.use(express.json())
// auth check middleware
app.use(
    (req: Request, res: Response, next: NextFunction) => {
        const authInstance = new Auth(req);
        const isValidated = authInstance.validate();

        if (isValidated)
            next();
        else
            res.status(400).json({ message: "invalid user." });
    }
)

app.get('/', async (req: Request, res: Response) => {
    const getInfo = new GetInfo(req);
    const userinfo = await getInfo.getHeader();
    console.log(userinfo);


    if (!getInfo) {
        return res.status(400).json({
            message: "cant generate"
        })
    }
    return res.json(userinfo)
})

app.listen(3000, () => {
    console.log('Listening to port 3000');
})