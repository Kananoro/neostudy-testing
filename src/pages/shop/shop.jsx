import Card from "../../components/card/card";
import { headphones, wirelessHeadphones } from "../../data/data";

const Shop = () => {
	return (
		<div className="shop">
			<p className="shop_category">Наушники</p>
			<div className="shop_product">
				{headphones.map((product) => {
					return (
						<Card
							key={product.id}
							product={product}
							id={product.id}
							img={product.img}
							title={product.title}
							about={product.about}
							price={product.price}
							firstprice={product.firstprice}
							rating={product.rate}
						/>
					);
				})}
			</div>
			<p className="shop_category">Беспроводные наушники</p>
			<div className="shop_product">
				{wirelessHeadphones.map((product) => {
					return (
						<Card
							key={product.id}
							product={product}
							id={product.id}
							img={product.img}
							title={product.title}
							about={product.about}
							price={product.price}
							firstprice={product.firstprice}
							rating={product.rate}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Shop;
