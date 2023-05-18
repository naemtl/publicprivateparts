import { Suspense } from "react";
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Bodywork from "./pages/Bodywork/Bodywork";
import Films from "./pages/Films/Films";
import Interviews from "./pages/Interviews/Interviews";
import Podcast from "./pages/Podcast/Podcast";
import PublicPrivateParts from "./pages/PublicPrivateParts/PublicPrivateParts";
import OrigineDuMonde from "./pages/OrigineDuMonde/OrigineDuMonde";

import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";

import './App.scss';

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/bodywork" element={<Bodywork />} />
				<Route path="/films" element={<Films />} />
				<Route path="/interviews" element={<Interviews />} />
				<Route path="/podcast" element={<Podcast />} />
				<Route path="/publicprivateparts" element={<PublicPrivateParts />} />
				<Route path="/odm" element={<OrigineDuMonde />} />
			</Routes>
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
