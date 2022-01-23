import { Suspense } from "react";

import Homepage from "./pages/Homepage/Homepage";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";

import './App.scss';

const App = () => {
	return (
		<>
			<Header />
			<Homepage />
			<Footer />
		</>
	)
};

export default function WrappedApp() {
	return (
		<Suspense fallback={<Loader />}>
			<App />
		</Suspense>
	)
}
