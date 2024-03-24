import Favorite from "../../icons/favorite";
import CartIcon from "../../icons/cart-icon";
import Badge from "../badge/badge";
import { Link } from "react-router-dom";
import { useCart } from "../../cart-context";

const Header = () => {
	const { getCartLength } = useCart();
	return (
		<div className="header">
			<Link to={"/"}>
				<div className="header_logo">Qpick</div>
			</Link>
			<div className="icon">
				<div className="icon_container">
					<Badge number={2} />
					<Favorite className="icon_favorite" />
				</div>
				<div className="icon_container">
					<Link to={"cart"} className="icon_cart">
						{getCartLength() != 0 ? <Badge number={getCartLength()} /> : <></>}
						<CartIcon />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
