import "./styles/styles.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout/layout";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import { CartProvider } from "./cart-context";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Shop />,
			},
			{
				path: "cart",
				element: <Cart />,
			},
		],
	},
]);

function App() {
	return (
		<CartProvider>
			<RouterProvider router={router} />
		</CartProvider>
	);
}

export default App;
