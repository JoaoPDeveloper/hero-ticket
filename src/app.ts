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
  private inicializeRoutes() {
    this.app.use("/events", this.eventRoutes.router);
  }
  private interceptionError() {
    this.app.use(errorMiddleware);
  }
  private middlewaresInitialize() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
  listen() {
    this.app.listen(3333, () => console.log("Server is running"));
  }
}

export { App };

// inicialização da classe do server
