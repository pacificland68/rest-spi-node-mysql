const { Sequelize } = require('sequelize');
import config from 'config'

async function connect(){
    const sequelize = new Sequelize(config.get<string>("database"), config.get<string>("username"), config.get<string>("password"), {
        host: 'localhost',
        dialect: 'mysql'
      });

      try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

export default connect
