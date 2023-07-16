import { useContext, useState } from "react";
import { AuthContext } from "../../contexto/AuthContext";
import { Link } from "react-router-dom";


const LoginScreen = () => {
    const { login, googleLogin } = useContext(AuthContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(values)
    };

    return (
        <div className="authContainer">
            <div className="authModal">
                <div className="loginContainer">
                    <h4 className="textLogin">Login</h4>
                    <img src="./img/icons/bandera_argentina2.png" className="banderaArgentina"/>
                </div>
                <hr />

                <form onSubmit={handleSubmit}>
                    <input
                        value={values.email}
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Email"
                        className="form-control my-2"
                        name="email"
                        autoComplete="off"
                    />
                    <input
                        value={values.password}
                        onChange={handleInputChange}
                        type="password"
                        placeholder="Password"
                        className="form-control my-2"
                        name="password"
                    />

                    <button className="btn btn-primary loginBtn" type="submit">
                        Iniciar Sesión
                    </button>
                    <Link to="../primeraEntrega_reactJS/register">Registrarme</Link>
                </form>
                <Link className="d-flex justify-content-center">
                    <img onClick={googleLogin} className="googleIcon" src="./img/icons/google_icon.png"/>
                </Link>
            </div>
        </div>
    );
};

export default LoginScreen;
