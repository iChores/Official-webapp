import { Link } from "react-router-dom";
import LoginWrapper from "../Styles/Login.style";
import JoinImg from "../Assets/JoinImg.png";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import axios from "axios";

function Login({ user, setIsLoggedIn, isLoggedIn, setUser }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errLog, setErrLog] = useState([]);

	console.log("first login check", isLoggedIn);

	async function fetchData() {
		const response = await axios({
			method: "post",
			url: "https://ichores.herokuapp.com/auth/login_email",
			data: {
				password,
				email,
			},
			headers: {
				"Content-Type": "text/plain;charset=utf-8",
			},
		});
		const Data = await response.data;
		const User = await Data.user;
		const accessToken = await Data.access_token;
		if (User) {
			setUser({ ...User });
			sessionStorage.setItem("Token", accessToken);
			setIsLoggedIn(true);
		}
		if (isLoggedIn) {
			console.log("login sucessfull");
			return <Navigate to={"/dashboard"} />;
		}
	}
	function loginHandler() {
		if (email === "") {
			setErrLog([...errLog, "email feild is empty"]);
		} else if (password === "") {
			setErrLog([...errLog, "Password must not be empty"]);
		} else {
			fetchData();
		}
	}

	if (sessionStorage.Token) {
		setIsLoggedIn(true);
		return <Navigate to={"/dashboard"} />;
	} else {
		setIsLoggedIn(false);
	}

	return (
		<LoginWrapper>
			<img src={JoinImg} alt="" />
			<div className="login-container">
				<div className="form">
					<h1>Login to ichores</h1>
					<input
						type="text"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						placeholder="Email"
					/>
					<input
						type="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						placeholder="Password"
					/>
					<button onClick={loginHandler}>Login</button>
					<h3>
						<Link to="/">Forgot password</Link>{" "}
						<Link to="/register">Register</Link>
					</h3>
				</div>
			</div>
		</LoginWrapper>
	);
}

export default Login;
