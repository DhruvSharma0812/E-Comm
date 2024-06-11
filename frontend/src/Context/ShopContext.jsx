import React, { createContext } from "react";
// import all_product from '../Components/Assets/all_product';
import { useState } from "react";
import { useEffect } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }

    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setcartItems] = useState(getDefaultCart())
    const [all_product, setall_product] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/allproducts')
        .then((response) => response.json())
        .then((data) => setall_product(data))

        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/getcart', {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json',
                },
                body:"",
            }).then((response) => response.json())
            .then((data) => setcartItems(data))
        }
    }, [])
    
    const addToCart = (itemId) => {
        setcartItems ((prev) => ({...prev, [itemId]:prev[itemId] + 1}));
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/addtocart', {
                method: "POST",
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({"itemId": itemId})
            })
            .then((response) => response.json())
            .then((data) => console.log(data));
        }
    }
    
    const removeFromCart = (itemId) => {
        setcartItems ((prev) => ({...prev, [itemId]:prev[itemId] - 1}))
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/removefromcart', {
                method: "POST",
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({"itemId": itemId})
            })
            .then((response) => response.json())
            .then((data) => console.log(data));
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let iteminfo = all_product.find((product) => product.id === Number(item));
                if (iteminfo) {
                    totalAmount += iteminfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    }
        
        const getTotalCartItems = () => {
            let totalItems = 0;
            for (const item in cartItems) {
                if (cartItems[item] > 0) {
                    totalItems += cartItems[item];
                }
            }
            return totalItems;
        }
            
        const contextValue = { getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };
        

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;




// import React, { createContext, useState, useEffect } from "react";

// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//     let cart = {};
//     for (let index = 0; index <= 300; index++) {
//         cart[index] = 0;
//     }
//     return cart;
// }

// const ShopContextProvider = (props) => {
//     const [cartItems, setCartItems] = useState(getDefaultCart());
//     const [allProduct, setAllProduct] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:4000/allproducts')
//             .then((response) => response.json())
//             .then((data) => setAllProduct(data));

//         if (localStorage.getItem('auth-token')) {
//             fetch('http://localhost:4000/getcart', {
//                 method: "POST",
//                 headers: {
//                     Accept: 'application/json',
//                     'auth-token': localStorage.getItem('auth-token'),
//                     'Content-Type': 'application/json',
//                 },
//             })
//             .then((response) => response.json())
//             .then((data) => setCartItems(data));
//         }
//     }, []);

//     const addToCart = (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//         if (localStorage.getItem('auth-token')) {
//             fetch('http://localhost:4000/addtocart', {
//                 method: "POST",
//                 headers: {
//                     Accept: 'application/json',
//                     'auth-token': localStorage.getItem('auth-token'),
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ "itemId": itemId })
//             })
//             .then((response) => response.json())
//             .then((data) => console.log(data));
//         }
//     }

//     const removeFromCart = (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//         if (localStorage.getItem('auth-token')) {
//             fetch('http://localhost:4000/removefromcart', {
//                 method: "POST",
//                 headers: {
//                     Accept: 'application/json',
//                     'auth-token': localStorage.getItem('auth-token'),
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ "itemId": itemId })
//             })
//             .then((response) => response.json())
//             .then((data) => console.log(data));
//         }
//     }

//     const getTotalCartAmount = () => {
//         let totalAmount = 0;
//         for (const item in cartItems) {
//             if (cartItems[item] > 0) {
//                 let itemInfo = allProduct.find((product) => product.id === Number(item));
//                 if (itemInfo) {
//                     totalAmount += itemInfo.new_price * cartItems[item];
//                 }
//             }
//         }
//         return totalAmount;
//     }

//     const getTotalCartItems = () => {
//         let totalItems = 0;
//         for (const item in cartItems) {
//             if (cartItems[item] > 0) {
//                 totalItems += cartItems[item];
//             }
//         }
//         return totalItems;
//     }

//     const contextValue = { getTotalCartItems, getTotalCartAmount, allProduct, cartItems, addToCart, removeFromCart };

//     return (
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     );
// }

// export default ShopContextProvider;

