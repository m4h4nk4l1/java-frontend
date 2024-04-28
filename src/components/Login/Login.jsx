import './Login.css';
import Logo from '../../assets/images.png'

const Login = () => {
    return (
        <div className="container">
        <div className="login-form">
            <img src={Logo} alt="Logo" />
            <input type="email" placeholder="Enter your Email" />
            <input type="password" placeholder="Enter your Password" />
            <button className="button">Login</button>
        </div>
        </div>
    );
};


export default Login
