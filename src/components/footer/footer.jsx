import Language from "../../icons/language";
import Telegram from "../../icons/telegram";
import Whatsapp from "../../icons/whatsapp";
import Vk from "../../icons/vk";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="footer">
			<Link to={"/"}>
				<div className="footer_logo">Qpick</div>
			</Link>
			<div className="footer_links">
				<a href="#">Избранное</a>
				<Link to={"cart"}>Корзина</Link>
				<a href="tel:123456789">Контакты</a>
			</div>
			<div className="footer_links">
				<a href="#">Условия сервиса</a>
				<div className="language">
					<Language />
					<input type="radio" name="lang" id="rus" value="rus" defaultChecked />
					<label htmlFor="rus">Рус</label>
					<input type="radio" name="lang" id="eng" value="eng" />
					<label htmlFor="eng">Eng</label>
				</div>
			</div>
			<div className="footer_social">
				<a href="https://vk.com/neoflex_ru" target="_blank">
					<Vk className="socialsvg" />
				</a>
				<a href="https://t.me/neoflexcareers" target="_blank">
					<Telegram className="socialsvg" />
				</a>
				<a href="https://wa.me/12345678" target="_blank">
					<Whatsapp className="socialsvg" />
				</a>
			</div>
		</div>
	);
};

export default Footer;
