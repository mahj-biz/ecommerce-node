import { Router } from "express";
import getAllProducts from "../controller/getAllProducts.js";
import getAllCartItems from "../controller/getAllCartItems.js";
import addNewProduct from "../controller/addNewProduct.js"
import addNewCartItem from "../controller/addNewCartItems.js"
import deleteCartItem from "../controller/deleteCartItem.js"

const appRoutes = Router();

appRoutes.get("/", getAllProducts);
appRoutes.get("/cart", getAllCartItems);
appRoutes.get("/add-product", addNewProduct.showNewProductPage)
appRoutes.post("/submit-product", addNewProduct.postNewProduct)
appRoutes.post("/add-cart", addNewCartItem);
appRoutes.post("/delete-cart-item/:id", deleteCartItem);
appRoutes.get("/*", (req, res) => {
  res.render("pages/page-404");
});
export default appRoutes;
