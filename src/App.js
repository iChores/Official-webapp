import "./App.css";
// React router dom
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Register from "./Routes/Register";
import Navbar from "./Components/Nav";
import Login from "./Routes/Login";
import { useState } from "react";
import Dashboard from "./Routes/DashBoard";

function App() {
	const [user, setUser] = useState(["hii"])
	const [isLoggedIn, setIsLoggedIn] = useState(false);
		return (
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/register" element={<Register />} />
					<Route
						path="/login"
						element={
							<Login
								user={user}
								setUser={setUser}
								isLoggedIn={isLoggedIn}
								setIsLoggedIn={setIsLoggedIn}
							/>
						}
					/>
					<Route path="/dashboard" element={<Dashboard/>} />
				</Routes>
			</div>
		);
}

export default App;
