import { Sequelize } from "sequelize-typescript";
import {TaskInfo} from '../models/TaskInfo.model'
import config from 'config'

// async function connect(){
//     const sequelize = new Sequelize(config.get<string>("database"), config.get<string>("username"), config.get<string>("password"), {
//         host: 'localhost',
//         dialect: 'mysql',
//         operatorsAliases: false,
//         models: [TaskInfo]
//       });

//       try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// }

const connect = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "123456",
  database: "lims-min-0805",
  logging: true,
  models: [TaskInfo],
})

export default connect
