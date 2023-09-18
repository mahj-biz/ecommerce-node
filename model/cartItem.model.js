import { query } from "../database/index.js";

const cartItemModel = async () => {
  try {
    //   write your own sql to insert cart_items table
    await query(
      `CREATE TABLE IF NOT EXISTS cart_items (
      id serial PRIMARY KEY,
      product_id integer NOT NULL,
      quantity integer NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT NULL,
      deleted_at TIMESTAMP DEFAULT NULL
      )`
      );
    console.log("cart_items table created");
  } catch (error) {
    console.log(error);
  }
};

export default cartItemModel;
