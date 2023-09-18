
import {query} from "../database/index.js"

const showNewProductPage = async (req, res) => {
    try {
        res.render("pages/addProduct");
      } catch (error) {
        console.log(error);
      }
}


const postNewProduct = async (req, res) => { 
  try {
      

      const product_name = req.body.product_name;
      const product_description = req.body.product_description;
      const price = req.body.price;
      const currency = req.body.currency;
      const product_img_url = req.body.product_img_url;
      const stock = req.body.stock;


      await query("INSERT INTO products (name , description , price , currency, product_image_url , stock ) VALUES ($1, $2, $3, $4, $5, $6);", [
          product_name,
          product_description,
          price,
          currency,
          product_img_url,
          stock
      ])
      res.redirect("/")  

      
  } catch (error) {
    console.log(error);
  }
  
}

const addNewProduct = {showNewProductPage,postNewProduct};

export default addNewProduct;