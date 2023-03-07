import NavBar from "../components/NavBar";
import Head from 'next/head'
import Footer from "../components/Footer";

const PortafolioLayout = ({ children }) => {
	return (
		<>
			<div>
				<NavBar />
			</div>

			<main className=" py-4" style={{ minHeight:'100vh' }}>
				{ children }
			</main>

			<div>
				<Footer />
			</div>

		</>
	)
}

export default PortafolioLayout;