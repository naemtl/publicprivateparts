import { Suspense } from "react";

import Homepage from "./pages/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import './App.scss';

const App = () => {
	return (
		<>
			<Navbar />
			<Homepage />
			<Footer />
		</>
	)
};

export default function WrappedApp() {
	return (
		<Suspense fallback="...is loading">
			<App />
		</Suspense>
	)
}
