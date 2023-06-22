import productsMongoModel from "../models/productsMongo.models.js";

class ProductMongoManager {
  getAllProductsMongo = async () => {
    try {
      const productsMongoArr = await productsMongoModel.find({});
      return productsMongoArr;
    } catch (error) {
      console.log(
        "🚀 ~ file: productsMongo.routes.js:42 ~ ProductsMongoRoutes ~ this.router.get ~ error:",
        error
      );
    }
  };

  getProductMongoById = async (id) => {
    try {
      const productMongoDetail = await productsMongoModel.findById({ _id: id });

      return productMongoDetail;
    } catch (error) {
      console.log(
        "🚀 ~ file: productMongo.manager.js:22 ~ ProductMongoManager ~ getProductMongoById= ~ error:",
        error
      );
    }
  };

  createProductMongo = async (bodyProductMongo) => {
    try {
      // TODO REVISANDO SI EL ESTUDIANTE YA FUE CREADO ANTERIOMENTE
      const productMongoDetail = await productsMongoModel.findOne({
        dni: bodyProductMongo.dni,
      });
      if (productMongoDetail && Object.keys(productMongoDetail).length !== 0) {//si existe y tiene alguna propiedad no crear
        return null;
      }// si no existe estudiante o (si existe pero tiene una propiedad) 

      const newProductMongo = await productsMongoModel.create(bodyProductMongo);
      // TODO: Manejar el error o si pasa algo mientras creo el documento de estudiante

      return newProductMongo;
    } catch (error) {
      console.log(
        "🚀 ~ file: productMongo.manager.js:42 ~ ProductMongoManager ~ createProductMongo= ~ error:",
        error
      );
    }
  };
}

export default ProductMongoManager;
