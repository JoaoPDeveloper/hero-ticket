import express, { Application } from "express";
import { connect } from "./infra/database";
import { errorMiddleware } from "./middlewares/error.middleware";
import { EventRoutes } from "./routes/event.routes";
class App {
  public app: Application;
  private eventRoutes = new EventRoutes();
  constructor() {
    this.app = express();
    this.middlewaresInitialize();
    this.inicializeRoutes();
    this.interceptionError();
    connect();
  }
  inicializeRoutes() {
    this.app.use("/events", this.eventRoutes.router);
  }
  interceptionError() {
    this.app.use(errorMiddleware);
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
