import { query } from "../database/index.js";

const addNewCartItem = async (req, res) => {
  try {
    const productId = req.body.productId;
    await query(
      "INSERT INTO cart_items (product_id, quantity) VALUES ($1, $2)",
      [productId, 1]
    );
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export default addNewCartItem;