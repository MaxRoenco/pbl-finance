import { useState } from "react";

const Login = () => {
    const [input, setInput] = useState({
        email: "",   // Changed from username to email
        password: "",
    });

    const auth = useAuth();  // Ensure useAuth() is defined or imported

    const handleSubmitEvent = (e) => {
        e.preventDefault();
        if (input.email !== "" && input.password !== "") {
            auth.loginAction(input);  // Assuming auth.loginAction is a valid method
            return;
        }
        alert("Please provide a valid input");
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <form onSubmit={handleSubmitEvent}>
            <div className="form_control">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@yahoo.com"
                    aria-describedby="email-desc"
                    aria-invalid="false"
                    onChange={handleInput}
                />
                <div id="email-desc" className="sr-only">
                    Please enter a valid email. It must contain at least 6 characters.
                </div>
            </div>
            <div className="form_control">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    aria-describedby="password-desc"
                    aria-invalid="false"
                    onChange={handleInput}
                />
                <div id="password-desc" className="sr-only">
                    Your password should be more than 6 characters.
                </div>
            </div>
            <button className="btn-submit" type="submit">Submit</button>
        </form>
    );
};

export default Login;
