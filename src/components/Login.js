import React, { useRef, useState } from 'react';
import validate from '../../utils/validate';
import { auth } from '../../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const SignUpPage = () =>
{
    const [isSignupForm, setIsSignupForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null); // Added reference for name input


    const handleClick = () =>
    {
        setIsSignupForm(!isSignupForm);
        setErrorMessage(''); // Clear error message on toggle
    };
    const onValidation = async (e) =>
    {
        e.preventDefault(); // Prevent default form submission
        const message = validate(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;
        try
        {
            if (isSignupForm)
            {
                // Sign Up
                const userCredential = await createUserWithEmailAndPassword(auth, email.current.value, password.current.value);
                const user = userCredential.user;
                console.log('User signed up:', user);
                // You can redirect or show a success message here
            } else
            {
                // Sign In
                const userCredential = await signInWithEmailAndPassword(auth, email.current.value, password.current.value);
                const user = userCredential.user;
                console.log('User signed in:', user);
                // You can redirect or show a success message here
            }
        } catch (error)
        {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(`${errorCode}: ${errorMessage}`);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">{isSignupForm ? 'Sign Up' : 'Sign In'}</h2>
                <form onSubmit={onValidation}>
                    {isSignupForm && (
                        <div className="mb-4">
                            <label htmlFor="name" className="block font-medium mb-2">Name</label>
                            <input
                                ref={name}
                                type="text"
                                id="name"
                                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                                placeholder="Enter your name"
                            />
                        </div>
                    )}
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium mb-2">Email</label>
                        <input
                            ref={email}
                            type="email"
                            id="email"
                            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-medium mb-2">Password</label>
                        <input
                            ref={password}
                            type="password"
                            id="password"
                            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md w-full"
                    >
                        {isSignupForm ? 'Sign Up' : 'Sign In'}
                    </button>
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                </form>
                <p onClick={handleClick} className='m-4 cursor-pointer'>
                    {isSignupForm ? 'Already a member? Sign In' : 'New Here? Sign Up'}
                </p>
            </div>
        </div>
    );
};

export default SignUpPage;