import Carousel from "./mid_carousel";
import Iteamcard from "./mid_iteamcard";
import { useState } from "react";

function Iteams(){
    let data = [
        {
          id: "1",
          product_name: "Tasty Granite Towels",
          currancy: "$",
          product_price: 143.00,
          product_description: "Pants",
          rating: 4,
          img: "http://placehold.it/700x400",
        },
        {
          id: "2",
          product_name: "Licensed Steel Chicken",
          currancy: "$",
          product_price: 716.00,
          product_description: "Bacon",
          rating: 5,
          img: "http://placehold.it/700x400",
        },
        {
          id: "3",
          product_name: "Generic Steel Hat",
          currancy: "$",
          product_price: 449.00,
          product_description: "Computer",
          rating: 3,
          img: "http://placehold.it/700x400",
        },
        {
          id: "4",
          product_name: "Handmade Fresh Mouse",
          currancy: "$",
          product_price: 426.00,
          product_description: "Soap",
          rating: 2,
          img: "http://placehold.it/700x400",
        },
        {
          id: "5",
          product_name: "Licensed Granite Chips",
          currancy: "$",
          product_price: 512.00,
          product_description: "Chair",
          rating: 4,
          img: "http://placehold.it/700x400",
        },
        {
          id: "6",
          product_name: "Intelligent Wooden Keyboard",
          currancy: "$",
          product_price: 731.00,
          product_description: "Table",
          rating: 4,
          img: "http://placehold.it/700x400",
        },
        {
          id: "7",
          product_name: "Intelligent Hammer",
          currancy: "$",
          product_price: 331.00,
          product_description: "Hammer",
          rating: 5,
          img: "http://placehold.it/700x400",
        },
      ];

      const [cart,setCart] = useState([]);
      const [total,setTotal] = useState(0);
      let addToCart = (iteam)=>{
        setCart([...cart,iteam]);
        setTotal(total + iteam.product_price);
      }

      let removeCart = (iteam) =>{
        setCart(cart.filter(obj => obj.id!== iteam.id));
        setTotal(total-iteam.product_price)
      }
      
    return <>
          <div className="col-lg-3">
            <h1 className="my-4">Shop Name</h1>
            <div className="list-group row">
            {
              cart.map((iteam)=>{
                return <>
                <div className="row ">
                  <div className="col-lg-8">
                    <p className="">{iteam.product_name} - {iteam.currancy}{iteam.product_price}</p>
                  </div>
                  <div className="col-lg-4">
                  <span className=""><button className="btn btn-danger" onClick={()=>{
                    removeCart(iteam)
                  }}>&#9747;</button></span>
                  </div>
                </div>              
                
                </>
          })
            }
            <p>Total: ${total}</p>
           
            </div>
          </div>
         <div className="col-lg-9">
            <Carousel></Carousel>
            <div className="row">
                {
                    data.map((obj)=>{
                        return <Iteamcard card={obj} handleCartButton={addToCart}></Iteamcard>
                    })
                }
             </div>            
        </div>
    </>;
}
export default Iteams;