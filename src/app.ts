import express from 'express';
import cors  from 'cors';
import mongoose from 'mongoose';
import usuarioRoute from './routes/usuario.router';

export class App {
  private express: express.Application
  private porta = 9000

  constructor() {
    this.express = express()
    this.database()
    this.middlewares()
    this.routes()
    this.listen()
  }

  public getApp(): express.Application {
    return this.express
  }

  private middlewares(): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private listen(): void {
    this.express.listen(this.porta, () => {
      console.log('Servidor iniciado na porta ' + this.porta)
    })
  }

  private database(): void {
    mongoose.connect('mongodb+srv://m0ntelo:bLFm6eNIr3Yjnrdd@cluster0.awkrgrr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  }

  private routes(): void {
    this.express.use("/usuarios", usuarioRoute)
  }
}