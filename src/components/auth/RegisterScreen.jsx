import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";



const RegisterScreen = () => {
    const { register } = useContext(AuthContext)

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
        register(values)
    };

    return (
        <div className="authContainer">
        <div className="authModal">
            <div className="loginContainer">
                <h4 className="textLogin">Nuevo Usuario</h4>
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
                    Registrarse
                </button>
                <Link to="../primeraEntrega_reactJS/login">Ya estoy registrado</Link>
            </form>
        </div>
        </div>
    );
};

export default RegisterScreen;
