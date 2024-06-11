import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext (ShopContext)

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>

                <div className='poductdisplay-img'>
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>

            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>

                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ${product.old_price}
                    </div>

                    <div className="productdisplay-right-price-new">
                        ${product.new_price}
                    </div>
                </div>

                <div className="productdisplay-right-desc">
                    {product.description} Explore our latest collection of stylish and comfortable clothing. Whether you're looking for trendy outerwear or cozy sweatshirts, we have something for everyone. Our products are designed with high-quality materials to ensure durability and comfort. Perfect for any occasion, these pieces will keep you looking fashionable while feeling great.

                </div>

                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>

                    <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
                    <p className='productdisplay-right-category'><span>Category : <span>Women, T-Shirt, Crop-Top</span></span></p>
                    <p className='productdisplay-right-category'><span>Tags : <span>Modern, Latest</span></span></p>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay
