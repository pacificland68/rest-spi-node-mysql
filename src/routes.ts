import "reflect-metadata";
import {Express, Request, Response} from 'express'
import {getTaskInfoHandler, getAllTaskInfoHandler} from './controller/taskInfo.controller'
import { TaskInfo } from './models/TaskInfo.model';
import {getTaskInfoSchema, getAllTaskInfoSchema} from './schema/taskInfo.schema'
import validateResource from './middleware/validateResource'

function routes(app: Express){
  // app.get("/api/taskinfo/:id", async (req: Request, res: Response): Promise<Response> => {
  //   const { id } = req.params;
  //   console.log('id', id)
  //   const taskInfo: TaskInfo[] | null = await TaskInfo.findAll()
  //   console.log('taskInfo', taskInfo)
  //   return res.status(200).json(taskInfo);
  // });
  app.get("/api/taskinfo", validateResource(getTaskInfoSchema), getTaskInfoHandler)

  app.get("/api/getAllTask", validateResource(getAllTaskInfoSchema), getAllTaskInfoHandler)
}

export default routes