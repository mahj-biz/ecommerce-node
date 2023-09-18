import { query } from "../database/index.js";

const productModel = async () => {
  try {
    //   write your own sql to insert products table
    await query( 
      `CREATE TABLE IF NOT EXISTS products (
      id serial PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description text,
      price NUMERIC(5, 2) NOT NULL,
      currency VARCHAR(255) NOT NULL,
      product_image_url text DEFAULT 'assets/default-product.png',
      stock integer NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT NULL,
      deleted_at TIMESTAMP DEFAULT NULL
      )`
      );
    console.log("products table created");
  } catch (error) {
    console.log(error);
  }
};

export default productModel;
