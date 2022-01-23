import { Suspense } from "react";
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";

import './App.scss';

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Homepage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
};

export default function WrappedApp() {
	return (
		<Suspense fallback={<Loader />}>
			<App />
		</Suspense>
	)
}
