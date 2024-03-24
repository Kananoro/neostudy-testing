import React from "react";
import CartItem from "../../components/cart-item/cart-item";
import { useCart } from "../../cart-context";
import { Link } from "react-router-dom";

const Cart = () => {
	const { cartItems, removeFromCart, changeQuantity, getCartTotalPrice } =
		useCart();
	return (
		<div className="cart">
			{getCartTotalPrice() ? (
				<>
					<p>Корзина</p>
					<div className="cart_row">
						<div className="cart_item">
							{cartItems.map((product) => {
								return (
									<CartItem
										img={product.img}
										title={product.title}
										price={product.price}
										quantity={product.quantity}
										onDelete={() => removeFromCart(product)}
										onQuantityAdd={() => changeQuantity(product, 1)}
										onQuantitySubstract={() => changeQuantity(product, -1)}
									/>
								);
							})}
						</div>
						<div className="cart_summary">
							<label>Итого</label>
							<label>₽ {getCartTotalPrice()}</label>
							<button>Перейти к оформлению</button>
						</div>
					</div>
				</>
			) : (
				<>
					<div className="cart_empty">Корзина пуста</div>
				</>
			)}
		</div>
	);
};

export default Cart;
