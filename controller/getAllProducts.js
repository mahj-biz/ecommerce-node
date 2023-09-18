import { query } from "../database/index.js";



const getAllProducts = async (req, res) => {
  // insert sql selct query then render product card
  const titletext = "Products";
  const products = await query("SELECT * FROM products ORDER BY id ASC");
  const qty_products = await query("SELECT count(quantity) FROM cart_items");
  
  const data = products.rows;
  let qtydata = 0;
  
  if(qty_products.rows.length >0){
    qtydata = qty_products.rows[0].count;
  }

  
  //console.log(qtydata)
  res.render("pages/index", { title: titletext, data: data, cart_qty : qtydata });
};

export default getAllProducts;
