import React, { useContext } from 'react'
import './CartIems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartIems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext)
    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>

            <hr />

            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className="classitem-format cartitems-format-main">
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price} </p>
                            <button className='cartitems-quantity'> {cartItems[e.id]} </button>
                            <p>$ {e.new_price * cartItems[e.id]} </p>
                            <img className='cartitem-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }

                return null;
            })}

            <div className="cartitem-down">
                <div className="cartitem-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cart-items-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-items-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>

                        <hr />
                        <div className="cart-items-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />

                        <div className="cart-items-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>

                    <button>Proceed TO CheckOut</button>
                </div>
                
                <div className="cartitems-promocode">
                    <p>If You Have A Prmo Code Enter It Here</p>
                    <div className="cartitem-promo-box">
                        <input type="text" placeholder='PROMOCODE' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartIems
