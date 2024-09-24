import { createContext, useEffect, useState } from "react";
import useFetch from "./useFetch";

export const authContext = createContext()

const Context = (props) => {
    const [isRegistered, setIsRegistered] = useState(false);
    const [userData, setUserData] = useState({});
    // const { data: users, setData, error, isLoading } = useFetch('http://localhost:3000/users')

    useEffect(() => {
        loadData();
    }, []);

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

    let loadData = async () => {
        const userId = localStorage.getItem("id");
        await fetch('http://localhost:3000/users/' + userId)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setUserData(prev =>
                ({
                    ...prev,
                    username: data.username,
                    firstName: data.firstName,
                    lastName: data.lastName,
                })
                )
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
    }

    const value1 = {
        register,
        isRegistered,
        setIsRegistered,
        userData
    };

    return (
        <authContext.Provider value={value1}>{props.children}</authContext.Provider>
    );
}

export default Context;