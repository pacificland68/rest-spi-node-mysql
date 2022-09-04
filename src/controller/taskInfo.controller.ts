import {Request, Response} from 'express'
import { UpdateTaskInfoInput } from '../schema/taskInfo.schema'
import { findTaskInfo } from '../service/taskInfo.service';

export async function getTaskInfoHandler(
  req: Request<UpdateTaskInfoInput['params']>, res: Response
){
  const id = req.params.id
  console.log('id', id);

  const taskInfo = await findTaskInfo(id)
  
  if(!taskInfo){
    return res.sendStatus(404)
  }
  return res.send(taskInfo)
}