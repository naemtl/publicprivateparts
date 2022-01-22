import { Suspense } from "react";

import Homepage from "./pages/Homepage/Homepage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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
		<Suspense fallback="...is loading">
			<App />
		</Suspense>
	)
}
