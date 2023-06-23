import cartsMongoModel from "../models/cartsMongo.models.js";

class CartsMongoManager {
  getAllCartsMongo = async () => {
    try {
      const allCartsMongo = await cartsMongoModel.find({});

      return allCartsMongo;
    } catch (err) {
      console.log(
        "🚀 ~ file: carts.manager.js:10 ~ CartsMongoManager ~ getAllCartsMongo= ~ err:",
        err
      );
    }
  };

  getCartMongoById = async (id) => {
    try {
      return await coursesModel.findById({ _id: id });
    } catch (err) {
      console.log(
        "🚀 ~ file: cartsMongo.manager.js:21 ~ CartsMongoManager ~ getCartMongoById= ~ err:",
        err
      );
    }
  };

  createCourses = async (cartMongoBody) => {
    try {
      const checkCart = await cartsMongoModel.findOne({
        products: `${cartMongoBody.product.toLowerCase()}`,//product o products OJO
      });

      if (!checkCart) {
        return null;
      }

      const newCartMongo = await cartsMongoModel.create({
        ...cartsMongoBody,
        products: cartMongoBody.product.toLowerCase(),//product o products OJO
      });

      return newCart;
    } catch (error) {
      console.log(
        "🚀 ~ file: carts.manager.js:45 ~ CartsManager ~ createCarts=async ~ error:",
        error
      );
    }
  };
}

export default CartsMongoManager;