import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";


const LoginScreen = () => {
    const { login } = useContext(AuthContext)

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
            <h4 className="logoMain">INDARG</h4>
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

            <button className="btn btn-primary login" type="submit">
                Iniciar Sesión
            </button>
            </form>
        </div>
        </div>
    );
};

export default LoginScreen;
