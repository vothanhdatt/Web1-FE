import React from 'react';

const Register = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        console.log(email, password);
    };
    return (
        <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    REGISTER ACCOUNT
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='email'></label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                        />
                    </div>
                    <div>
                        <label htmlFor='password'></label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                        />
                    </div>
                    <div>
                        <label htmlFor='fullname'></label>
                        <input
                            type='text'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='fullname'
                            placeholder='Full Name'
                        />
                    </div>
                    <div>
                        <label htmlFor='Gender'></label>
                        <select className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}>
                            <option>Male</option>
                            <option>Female </option>
                        </select>
                    </div>
                    <div className="text-center">
                        <label htmlFor='policy'>Aggree policy</label>
                        <input
                            type='checkbox'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='policy'
                        />
                    </div>
                    <a href="">
                        <div className={`text-center bg-green py-2 px-10 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}>
                            <button>Register</button>
                        </div>
                    </a>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            <a href="./Login">
                                Login
                            </a>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;