import * as path from 'path';
import * as express from 'express';
import *  as bodyParser from 'body-parser';
import logger = require('morgan');
import HeroRouter from './api/HeroRouter';

class App{
public express:express.Application;
constructor(){
    this.express = express();
    this.middleware();
    this.routes();
}
    
private middleware():void{
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));  
}
// Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    let router = express.Router();
    // placeholder route handler
    router.get('/', (req, res, next) => {
      res.json({
        message: 'Hello World!'
      });
    });
      
    this.express.use('/', router);
    this.express.use('/api/v1/heroes/all', HeroRouter);
  }
}

    export default new App().express;