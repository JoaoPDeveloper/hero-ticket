
import request from "supertest";
import { App } from "../app";

const app = new App();
const express = app.app;
describe('Event test', () => {
  it('/POST Event', async () => {
    const event = {
      title: "Jorge e Mateus",
      price: [{ setor: "Pista", amount: "20" }],
      description: "Evento descrição",
      city: "Belo Horizonte",
      location: {
        latitude: "-19.8658619",
        longitude: "-43.9737064",
      },
      coupons: [],
      date: new Date(),
      participants: [],
    };
    const response = await request(express)
      .post("/events")
      .field("title", event.title)
      .field("description", event.description)
      .field("city", event.city)
      .field("coupons", event.coupons)
      .field("location[latitude]", event.location.latitude)
      .field("location[longitude]", event.location.longitude)
      .field("price[setor]", event.price[0].setor)
      .field("price[amount]", event.price[0].amount)
      .attach("banner", "/Users/Administrador/Downloads/banner.png")
      .attach("flyers", "/Users/Administrador/Downloads/flyers1.png")
      .attach("flyers", "/Users/Administrador/Downloads/flyers2.png");
      if(response.error){
        console.log(response.error)
      }
    expect(response.status).toBe(201);
    expect(response.body).toEqual({ message: "Evento Criado com sucesso." });
  });
});
