import { createContext, useEffect, useState } from "react";
import useFetch from "./useFetch";

export const authContext = createContext()

const Context = (props) => {
    const [isRegistered, setIsRegistered] = useState(false);
    const [userData, setUserData] = useState({});
    // const { data: users, setData, error, isLoading } = useFetch('http://localhost:3000/users')

    const register = async (user) => {
        try {
            // Send a POST request to the JSON Server to add the new user
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (!response.ok) {
                throw new Error('Failed to register user');
            }

            const res = await response.json();
            if(res.exists === 'false') {
                localStorage.setItem("isRegistered", true);
                localStorage.setItem("id", res.id);
            }
            return res;

        } catch (err) {
            console.error('Error during registration:', err);
        }
    };

    const value1 = {
        register,
        isRegistered,
        setIsRegistered
    };

    return (
        <authContext.Provider value={value1}>{props.children}</authContext.Provider>
    );
}

export default Context;