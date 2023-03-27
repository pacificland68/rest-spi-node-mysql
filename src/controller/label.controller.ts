import {Request, Response} from 'express'
import { findAllLabel } from '../service/label.service'

export async function getAllLabelHandler(req: Request, res: Response){
    const allLabelInfo = await findAllLabel()
    // console.log('allLabelInfo', allLabelInfo);
    

    if(!allLabelInfo){
        return res.sendStatus(404)
    }

    return res.send(allLabelInfo)
}