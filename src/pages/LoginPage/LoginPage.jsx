import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { useState } from "react";

function LoginPage({ onLogin}) {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username); // update the user state in App
    };

    return (
        <main>
            <h1>Login Page</h1>
            <SignUpForm />
            {/* <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <button type="submit">Log in</button>
            </form> */}
        </main>
    );
}

export default LoginPage