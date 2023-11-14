import React, {useContext} from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContextProvider';
import remove_icon from '../Assets/cart_cross_icon.png';
function CartItems() {
const {TotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);
    return (
        <div className='cart-items'>
             <div className="cartitems-format-main">
             <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
            </div> 
            <hr/>


           {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
       return <div>  
            <div className="cartitems-format">
                <img src={e.image}  className="carticon-product-icon"/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <p>${e.new_price*cartItems[e.id]}</p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
            </div>


            <hr/>
        </div> 
            }

            return null;
          })} 
          <div className="cartitems-down">
            <div className="cartitems-total">
                       
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h1>Cart Totals</h1>
                          
                  
                <div className="cartitems_total_item">
                    <p>Subtotal</p>
                    <p>${TotalCartAmount()}</p>
                </div>
                <hr/> 
                       <div className="cartitems_total_item">
                           <p>Shipping Fee</p>
                           <p>Free</p>
                       </div>
                       <hr/>
                       <div className="cartitems_total_item">
                           <h3>Total</h3>
                           <h3>${TotalCartAmount()}</h3>
                       </div>
            </div>
          </div>
          
    <button className='last-btn' style={{align:'center'}}>PROCEED TO CHECKOUT</button>
                     <br/><br/><br/><br/>

       <div className="cartitems-promocode">
        <p>If you have a promo code, Enter it here</p><br></br>
        <div className="cartitems-promobox">
            <input type="text" placeholder='promo code' />
            <button>Sumbit</button>
        </div><br></br><br></br>
       </div>
        </div>
    );
};

export default CartItems;