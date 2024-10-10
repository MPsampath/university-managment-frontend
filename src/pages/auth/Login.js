import React,{useState} from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const res = await axios.post('http://localhost:8000/api/login', {
                email,
                password
            });
            localStorage.setItem('token', res.data.token);
            window.location.href = '/dashboard';
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                {error && <p>{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
