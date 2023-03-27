import {Request, Response} from 'express'
import { getListItem, getAllList } from '../service/listItem.service'

export async function getList(req: Request, res: Response){
    const currentPage = req.query.currentPage as string
    const pageSize = req.query.pageSize as string
    const labelName = req.query.labelName as string

    let allListItem
    if(labelName === '全部'){
        allListItem = await getAllList(currentPage, pageSize)
    }else{
        allListItem = await getListItem(currentPage, pageSize, labelName)
    }


    if(!allListItem){
        return res.sendStatus(404)
    }

    return res.send(allListItem)
}