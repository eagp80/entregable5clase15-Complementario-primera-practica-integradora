import { connect } from "mongoose";

import { DB_HOST, DB_PORT, DB_NAME, DB_CNN } from "../config/config.js";

const configConnection = {
  //rl:"mongodb+srv://eagp80:Efren1313@clusterefren0.heiibqk.mongodb.net/?retryWrites=true&w=majority",
  //url: `mongodb://127.0.0.1:27017/estudiantes`,
  url: DB_CNN ?? `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};


const mongoDBConnection = async () => {
  try {
    await connect(configConnection.url, configConnection.options);
    console.log(`================================= CONNECCION MONGO`);
    console.log(
      `======= URL: ${configConnection.url.substring(0, 20)} =======`
    );
    console.log(`=================================`);
  } catch (err) {
    console.log("🚀 ~ file: mongo.config.js:9 ~ mongoDBConnection ~ err:", err);
  }
};

export {
  mongoDBConnection,
};