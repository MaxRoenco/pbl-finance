import { createContext, useEffect, useState } from "react";
import useFetch from "./useFetch";

export const authContext = createContext()

const Context = (props) => {
    const [isRegistered, setIsRegistered] = useState(false);
    const { data: users, setData, error, isLoading } = useFetch('http://localhost:3000/users')

    const register = async (user) => {
        try {
            // Send a POST request to the JSON Server to add the new user
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (!response.ok) {
                throw new Error('Failed to register user');
            }

            const newUser = await response.json();
            setData([...users, newUser]);
            localStorage.setItem("isRegistered", true);

        } catch (err) {
            console.error('Error during registration:', err);
        }
    };

    const value1 = {
        users,
        register,
        error,
        isLoading,
        isRegistered,
        setIsRegistered
    };

    return (
        <authContext.Provider value={value1}>{props.children}</authContext.Provider>
    );
}

export default Context;