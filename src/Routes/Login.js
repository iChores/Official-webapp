import { Link } from "react-router-dom";
import LoginWrapper from "../Styles/Login.style";
import JoinImg from "../Assets/JoinImg.png"

function Login() {
    return (
        <LoginWrapper>
            <img src={JoinImg} alt="" />
            <div className="login-container">
                <div className="form">
                    <h1>Login to ichores</h1>
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                <h3><Link to="/">Forgot password</Link> <Link to="/register">Register</Link></h3>
                </div>
            </div>
        </LoginWrapper>
    )
}

export default Login;