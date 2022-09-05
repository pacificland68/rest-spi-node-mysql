import {TaskInfo} from '../models/TaskInfo.model'

export async function findTaskInfo(id: string, currentPage: string, pageSize: string){
  var result = await TaskInfo.findAndCountAll({
      where: {id: id},
      offset: (Number(currentPage) - 1) * Number(pageSize),
      limit: Number(pageSize)
  });
  return result;
  // return TaskInfo.findByPk(id)
}