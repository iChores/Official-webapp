import "./App.css";
// React router dom
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Register from "./Routes/Register";
import Navbar from "./Components/Nav";
import Login from "./Routes/Login";
import Subscribe from "./Routes/subscribe";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/subscribe" element={<Subscribe />} />
			</Routes>
		</div>
	);
}

export default App;
