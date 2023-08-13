import express, { Application } from "express";
import { connect } from "./infra/database";
class App {
  public app: Application;
  constructor() {
    this.app = express();
    this.middlewaresInitialize();
    this.inicializeRoutes();
    this.interceptionError();
    connect();
  }
  inicializeRoutes() {
    // this.app.use('/', )
  }
  interceptionError() {
    // this.app.use()
  }
  middlewaresInitialize() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
  listen() {
    this.app.listen(3300, () => console.log("Server is running"));
  }
}

export { App };

// inicialização da classe do server
