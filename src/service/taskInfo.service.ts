import {TaskInfo} from '../models/TaskInfo.model'

export async function findTaskInfo(id: string){
  return TaskInfo.findByPk(id)
}