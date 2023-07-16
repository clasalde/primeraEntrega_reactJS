import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
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
            <h4 className="logoMain">Login</h4>
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
            <button className="btn btn-primary loginBtn" onClick={googleLogin}>
                Iniciar Sesión con Google
            </button>
        </div>
        </div>
    );
};

export default LoginScreen;
