import { Router } from "express";

import productsMongoModel from "../dao/models/productsMongo.models.js";

import productsMongoData from "../db/productsMongo.js";
import ProductMongoManager from "../dao/managers/productMongo.manager.js";

class ProductsMongoRoutes {//no es un Router pero adentro tiene uno
  path = "/productsMongo";
  router = Router();
  productMongoManager = new ProductMongoManager();

  constructor() {
    this.initProductsMongoRoutes();
  }

  initProductsMongoRoutes() {
    this.router.get(`${this.path}/insertion`, async (req, res) => {
      try {
        const students = await productsMongoModel.insertMany(productsMongoData);
        // TODO: agregar validaciones

        return res.json({
          message: "productsMongo insert successfully",
          productsMongoInserted: productsMongo,
        });
      } catch (error) {
        console.log(
          "🚀 ~ file: productsMongo.routes.js:25 ~ ProductsMongoRoutes ~ this.router.get ~ error:",
          error
        );
      }
    });

    this.router.get(`${this.path}`, async (req, res) => {
      try {
        // TODO: agregar validaciones
        const productsMongoArr = await this.productMongoManager.getAllProducts();
        return res.json({
          message: `get all products succesfully`,
          productsMongoLists: productsMongoArr,
          productsMongoAmount: productsMongoArr.length,
        });
      } catch (error) {
        console.log(
          "🚀 ~ file: productsMongo.routes.js:44 ~ ProductsMongoRoutes ~ this.router.get ~ error:",
          error
        );
      }
    });

    this.router.get(`${this.path}/:productMongoId`, async (req, res) => {
      try {
        const { productMongoId } = req.params;
        const productMongoDetail = await this.productMongoManager.getStudentById(
          studentId
        );
        // TODO: AGREGAR VALIDACION

        return res.json({
          message: `get productMongo info of ${productMongoId} succesfully`,
          productMongo: productMongoDetail,
        });
      } catch (error) {
        console.log(
          "🚀 ~ file: productMongo.routes.js:60 ~ ProductsMongoRoutes ~ this.router.get ~ error:",
          error
        );
      }
    });

    this.router.post(`${this.path}`, async (req, res) => {
      try {
        // TODO: HACER VALIDACIONES DEL BODY
        const productMongoBody = req.body;

        // TODO REVISANDO SI EL ESTUDIANTE YA FUE CREADO ANTERIOMENTE
        const newProductMongo = await this.productMongoManager.createStudent(productMongoBody);
        if (!newProductMongo) {
          return res.json({
            message: `the productMongo with dni ${productMongoBody.dni} is already register`,
          });
        }

        return res.json({
          message: `productMongo created successfully`,
          productMongo: newProductMongo,
        });
      } catch (error) {
        console.log(
          "🚀 ~ file: productsMongo.routes.js:79 ~ ProductsMongoRoutes ~ this.router.post ~ error:",
          error
        );
      }
    });
  }
}

export default  ProductsMongoRoutes;
