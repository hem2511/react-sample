import React from 'react'

const FormC = () => {
    return (
        <div className='p-3'>
            <div>

                <form>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">First name</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" required />
                        </div>
                        <div>
                            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 ">Last name</label>
                            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Doe" required />
                        </div>
                        <div>
                            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 ">Company</label>
                            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Flowbite" required />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Phone number</label>
                            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        </div>
                        <div>
                            <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 ">Website URL</label>
                            <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="flowbite.com" required />
                        </div>
                        <div>
                            <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 ">Unique visitors (per month)</label>
                            <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
                        </div>
                    </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-3">
                        <div>
                            <label htmlFor="first_name_1" className="block mb-2 text-sm font-medium text-gray-900 ">First name</label>
                            <input type="text" id="first_name_1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" required />
                        </div>
                        <div>
                            <label htmlFor="last_name_1" className="block mb-2 text-sm font-medium text-gray-900 ">Last name</label>
                            <input type="text" id="last_name_1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Doe" required />
                        </div>
                        <div>
                            <label htmlFor="company_1" className="block mb-2 text-sm font-medium text-gray-900 ">Company</label>
                            <input type="text" id="company_1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Flowbite" required />
                        </div>
                        <div>
                            <label htmlFor="phone_1" className="block mb-2 text-sm font-medium text-gray-900 ">Phone number</label>
                            <input type="tel" id="phone_1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        </div>
                        <div>
                            <label htmlFor="website_1" className="block mb-2 text-sm font-medium text-gray-900 ">Website URL</label>
                            <input type="url" id="website_1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="flowbite.com" required />
                        </div>
                        <div>
                            <label htmlFor="visitors_1" className="block mb-2 text-sm font-medium text-gray-900 ">Unique visitors (per month)</label>
                            <input type="number" id="visitors_1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email address</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>
                        <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                </svg>
                            </span>
                            <input type="text" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  " placeholder="elonmusk" />
                        </div>

                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-3 focus:ring-blue-300" required />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default FormC