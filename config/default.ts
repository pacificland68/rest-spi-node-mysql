export default{
    port: 9999,
    database: "lims-min-0805",
    username: "root",
    password: '123456',
    diaalect: 'mysql',

    pool:{
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
}