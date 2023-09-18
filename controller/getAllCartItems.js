import { query } from "../database/index.js";


const getAllCartItems = async (req, res) => {
  // insert sql selct query then render product card 

  const titletext = "Carts";
  const products = await query(
    `select
    a.id as cart_id,
    a.quantity,
    b.id,
    b.name,
    b.description,
    b.price,
    b.currency,
    b.product_image_url,
    b.stock
    
    from cart_items a 
    left join products b on a.product_id = b.id`
    );
  const data = products.rows;
  //console.log(data)
  res.render("pages/cart", {title: titletext, data: data});
};

export default getAllCartItems;
