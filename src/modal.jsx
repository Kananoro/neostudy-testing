import React from "react";
import ReactDOM from "react-dom";

class Modal extends React.Component {
	render() {
		const { isOpen, onClose, caller, data } = this.props;

		const { title, img, about, price, firstprice } = data;

		if (!isOpen) {
			return null;
		}

		return ReactDOM.createPortal(
			<div className="modal" onClick={onClose}>
				<div className="modal_content" onClick={(e) => e.stopPropagation()}>
					<h2>О продукте {title}</h2>
					<img src={`/neostudy-test${img}`} alt="product image" />
					<p className="modal_about">{about}</p>
					{firstprice !== undefined ? (
						<>
							<p>
								Цена сейчас: <label>{price}</label>
							</p>
							<p>
								Прошлая цена: <label>{firstprice}</label>
							</p>
						</>
					) : (
						<p>
							Цена: <label>{price}</label>
						</p>
					)}

					<button className="card_buy" onClick={onClose}>
						Закрыть
					</button>
				</div>
			</div>,
			document.getElementById("modal"),
		);
	}
}

export default Modal;
