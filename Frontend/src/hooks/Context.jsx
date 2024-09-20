import { createContext, useEffect, useState } from "react";
import useFetch from "./useFetch";

export const authContext = createContext()

const Context = (props) => {
    const [isRegistered, setIsRegistered] = useState(false);
    const { data: users, setData, error, isLoading } = useFetch('http://localhost:3000/users')

    const localCheck = () => {
        const storedEmail = localStorage.getItem('newUserEmail').trim();
        console.log('Stored Email:', storedEmail);
        const newStoredEmail = storedEmail.replace(/"/g, '');

        if (!storedEmail) {
            console.log('No email found in localStorage');
            return;
        }

        if (!users || users.length === 0) {
            console.log('Users not available yet.');
            return;
        }

        // Log user emails to check for possible issues
        users.forEach((user, index) => {
            console.log(`User ${index} Email:`, user.email);
        });

        const userExists = users.find(user => user.email === newStoredEmail);
        console.log('User Found:', userExists);

        if (userExists) {
            setIsRegistered(true);
        }
    };


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
        setIsRegistered,
        localCheck
    };

    return (
        <authContext.Provider value={value1}>{props.children}</authContext.Provider>
    );
}

export default Context;