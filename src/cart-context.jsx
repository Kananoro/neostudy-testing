import React, { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const storageItems = sessionStorage.getItem("cartItems")
		? JSON.parse(sessionStorage.getItem("cartItems"))
		: [];

	const [cartItems, setCartItems] = useState(storageItems);

	const addToCart = (item) => {
		const itemInCart = cartItems.find(
			(cartItem) => cartItem.id === item.product.id,
		);
		if (itemInCart) {
			setCartItems(
				cartItems.map((cartItem) =>
					cartItem.id === item.product.id
						? {
								...cartItem,
								quantity: cartItem.quantity + 1,
						  }
						: cartItem,
				),
			);
		} else {
			setCartItems([...cartItems, { ...item.product, quantity: 1 }]);
		}
	};

	const changeQuantity = (item, amount) => {
		const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
		if (isItemInCart) {
			const updatedQuantity = isItemInCart.quantity + amount;
			if (updatedQuantity >= 1) {
				setCartItems(
					cartItems.map((cartItem) =>
						cartItem.id === item.id
							? { ...cartItem, quantity: updatedQuantity }
							: cartItem,
					),
				);
			}
		}
	};

	const removeFromCart = (item) => {
		setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
	};

	const getCartTotalPrice = () => {
		return cartItems.reduce((total, item) => {
			const price = item.price;
			return total + price * item.quantity;
		}, 0);
	};

	const getCartLength = () => {
		return cartItems.reduce((total, item) => {
			console.log(total + item.quantity);
			return total + item.quantity > 99 ? 99 : total + item.quantity;
		}, 0);
	};

	useEffect(() => {
		const data = sessionStorage.getItem("cartItems");
		if (data) {
			setCartItems(JSON.parse(data));
		}
	}, []);

	useEffect(() => {
		sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
	}, [cartItems]);

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				removeFromCart,
				getCartTotalPrice,
				getCartLength,
				changeQuantity,
			}}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);

	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}

	return context;
};
