import {Request, Response} from 'express'
import { TaskInfo } from '../models/TaskInfo.model';
import { AllTaskInfoInput, UpdateTaskInfoInput } from '../schema/taskInfo.schema'
import { findTaskInfo, findAllTaskInfo } from '../service/taskInfo.service';

export async function getTaskInfoHandler(
  req: Request<UpdateTaskInfoInput['query']>, res: Response
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

export async function getAllTaskInfoHandler(req: Request<AllTaskInfoInput['query']>, res: Response){
  const currentPage = req.query.currentPage as string
  const pageSize = req.query.pageSize as string

  const allTaskInfo = await findAllTaskInfo(currentPage, pageSize)
  console.log('allTaskInfo', allTaskInfo)

  if(!allTaskInfo){
    return res.sendStatus(404)
  }

  return res.send(allTaskInfo)
}