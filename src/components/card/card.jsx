import { useState } from "react";
import Star from "../../icons/star";
import Modal from "../../modal";
import { useCart } from "../../cart-context";

const Card = ({
	id,
	product,
	img,
	title,
	about,
	price,
	firstprice,
	rating,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { addToCart } = useCart();
	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	return (
		<div className="card">
			<div className="card_image" onClick={() => openModal(product)}>
				<img src={img} alt="product image" />
			</div>
			<div className="card_row">
				<div className="card_title">{title}</div>
				<div className="card_price">
					<label className="card_lastprice">{price}</label>
					{firstprice !== undefined ? (
						<label className="card_firstprice">{firstprice}</label>
					) : (
						<></>
					)}
				</div>
			</div>
			<div className="card_row">
				<div className="card_rating">
					<Star />
					<label>{rating}</label>
				</div>
				<button
					className="card_buy"
					onClick={() => addToCart({ product, quantity: 1 })}>
					Купить
					<hr />
				</button>
			</div>
			<Modal
				isOpen={isModalOpen}
				onClose={closeModal}
				data={{
					title: title,
					img: img,
					about: about,
					price: price,
					firstprice: firstprice,
				}}
			/>
		</div>
	);
};

export default Card;
