import { Router } from "express";

class CartsMongoRoutes {
    //path="/courses";
  path = "/cartsmongo";
  router = Router();

  constructor() {
    this.initCartsMongoRoutes();
  }

  initCartsMongoRoutes() {
    this.router.get(`${this.path}`, async (req, res) => {
      return res.json({ message: `cartsMongo path` });
    });

    //this.router.get(`${this.path}/:courseId`, async (req, res) => {
    this.router.get(`${this.path}/:cartsMongoId`, async (req, res) => {

      return res.json({ message: `cartsMongo GET` });
    });

    this.router.post(`${this.path}/`, async (req, res) => {
      return res.json({ message: `cartsMongo POST` });
    });

    this.router.put(`${this.path}/:cartsMongoId`, async (req, res) => {
      return res.json({ message: `cartsMongo PUT` });
    });

    this.router.delete(`${this.path}/:cartsMongoId`, async (req, res) => {
      return res.json({ message: `cartsMongo DELETE` });
    });
  }
}

export default CartsMongoRoutes;
