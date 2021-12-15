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
	if (sessionStorage.Token) {
		setIsLoggedIn(true);
		return <Navigate to={"/dashboard"} />;
	} else {
		setIsLoggedIn(false);
	}

	console.log("first login check", isLoggedIn);

	function loginHandler() {
		if (email === "") {
			setErrLog([...errLog, "email feild is empty"]);
		} else if (password === "") {
			setErrLog([...errLog, "Password must not be empty"]);
		} else {
			axios({
				method: "post",
				url: "https://ichores.herokuapp.com/auth/login_email",
				data: {
					password,
					email,
				},
				headers: {
					"Content-Type": "text/plain;charset=utf-8",
				},
			})
				.then((res) => {
					// console.log("this is response", res.status);
					// console.log("this is response", res.data);
					if (res.status === 200) {
						const accesToken = res.data.access_token;
						sessionStorage.setItem("Token", accesToken);
						console.log("this is access token", accesToken);
						setUser({ ...res.data.user });
						console.log("this is user data", user);
						console.log("second login check", isLoggedIn);
						return <Navigate to={"/dashboard"} />;

						// console.log("this is user data",res.data.user);
					}
				})
				.catch((err) => {
					console.log(err.response);
					console.log("this nah error code", err.response.status);
					console.log("this nah error code", err.response.data);
				});
		}
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
