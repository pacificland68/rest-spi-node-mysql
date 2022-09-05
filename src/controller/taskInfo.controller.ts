import {Request, Response} from 'express'
import { UpdateTaskInfoInput } from '../schema/taskInfo.schema'
import { findTaskInfo } from '../service/taskInfo.service';

export async function getTaskInfoHandler(
  req: Request<UpdateTaskInfoInput['params']>, res: Response
){
  // const id = req.params.id
  // const currentPage = req.params. currentPage
  // const pageSize = req.params.pageSize
  const id = req.query.id as string
  const currentPage = req.query.currentPage as string
  const pageSize = req.query.pageSize as string
  console.log('id', id);

  const taskInfo = await findTaskInfo(id, currentPage, pageSize)
  
  if(!taskInfo){
    return res.sendStatus(404)
  }
  return res.send(taskInfo)
}