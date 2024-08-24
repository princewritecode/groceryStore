import React, { useRef, useState } from 'react';
import validate from '../../utils/validate';

const SignUpPage = () =>
{
    const [isSignupForm, setIsSignupForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const email = useRef(null);
    const password = useRef(null);
    const handleClick = () =>
    {
        setIsSignupForm(!isSignupForm);
    };
    const onValidation = () =>
    {
        const message = validate(email.current.value, password.current.value);
        setErrorMessage(message);
    };
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">   {
                    isSignupForm ? 'Sign Up' : 'Sign In'
                } </h2>
                <form onSubmit={
                    (e) => { e.preventDefault(); }
                }>
                    <div className="mb-4">

                        {isSignupForm && (<>
                            <label htmlFor="name" className="block font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                                placeholder="Enter your name"
                            />
                        </>)
                        }
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium mb-2">
                            Email
                        </label>
                        <input
                            ref={email}
                            type="email"
                            id="email"
                            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-medium mb-2">
                            Password
                        </label>
                        <input
                            ref={password}
                            type="password"
                            id="password"
                            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button onClick={() => { onValidation(); }}
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md w-full"
                    >
                        {isSignupForm ? 'Sign Up' : 'Sign In'}
                    </button>
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                </form>
                {isSignupForm ? <p onClick={() => { handleClick(); }} className='m-4 cursor-pointer'>Already a member ? Sign In</p> : <p className='m-4 cursor-pointer' onClick={() => { handleClick(); }} >New Here ? Sign Up</p>}
            </div >
        </div >
    );
};

export default SignUpPage;