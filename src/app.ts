import "reflect-metadata";
import express from 'express'
import config from 'config'
// import cors from 'cors'
import connect from './utils/connect'
import logger from './utils/logger'
import routes from './routes'
import swaggerUi = require('swagger-ui-express');
import fs = require('fs');
var swaggerInstall = require('./utils/swagger')


const port = config.get<number>('port')
const app = express()

// swagger
const swaggerFile: any = (process.cwd()+"/src/utils/swagger/swagger.json")
const swaggerData: any = fs.readFileSync(swaggerFile, 'utf8')
const swaggerDocument = JSON.parse(swaggerData)


const corOptions = {
  origin: 'http://localhost:9999'
}

// middleware
// app.use(cors(corOptions))

swaggerInstall(app)

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use('/docs', swaggerUi.serve,
swaggerUi.setup(swaggerDocument))

app.listen(port, async () => {
  console.log(`app is running at http://localhost:${port}`)

  await connect.sync({force: false})

  routes(app)
})

// const start = async (): Promise<void> => {
//   try {
//     await connect.sync({ force: false });
//     app.listen(port, () => {
//       console.log(`Server started on port ${port}`);
//     });
//     routes(app)
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// };

// void start();
