import Trash from "../../icons/trash";
import Plus from "../../icons/plus";
import Minus from "../../icons/minus";

const CartItem = ({
	img,
	title,
	price,
	quantity,
	onDelete,
	onQuantityAdd,
	onQuantitySubstract,
}) => {
	const summary = 2927;
	return (
		<div className="cartitem">
			<button className="cartitem_trash" onClick={onDelete}>
				<Trash />
			</button>
			<div className="cartitem_row">
				<img src={`/neostudy-test${img}`} alt="" />
				<div className="cartitem_info">
					<h2>{title}</h2>
					<p>{price}</p>
				</div>
			</div>
			<div className="cartitem_management">
				<div className="cartitem_quantity">
					<button onClick={onQuantitySubstract}>
						<Minus />
					</button>
					<label>{quantity}</label>
					<button onClick={onQuantityAdd}>
						<Plus />
					</button>
				</div>
				<label className="cartitem_summary">{quantity * price}</label>
			</div>
		</div>
	);
};

export default CartItem;
