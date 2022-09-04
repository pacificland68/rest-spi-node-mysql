import { Request, Response, Express } from "express"
import path from 'path'
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'

// var path = require('path')
// var express = require('express')
// var swaggerUi = require('swagger-ui-express')
// var swaggerJSDoc = require('swagger-jsdoc')

const options = {
  definition:{
    openapi: '3.0.0',
    info:{
      title: 'lims',
      version: '1.0.0'
    }
  },

  apis: [path.join(__dirname, '../../routes/**/*.js')]

}

var swaggerJson = function(req: Request, res: Response){
  res.setHeader('Content-Type', 'application/json')
  res.send(swaggerSpec)
}
const swaggerSpec = swaggerJSDoc(options)

var swaggerInstall = function(app: Express){
  if(!app){
    app = express()
  }
  app.get('/swagger.json', swaggerJson)
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}

module.exports = swaggerInstall