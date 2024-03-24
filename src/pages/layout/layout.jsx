import React from "react";
import Header from "../../components/header/header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/footer";

const Layout = () => {
	return (
		<>
			<div className="content">
				<Header />
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default Layout;
