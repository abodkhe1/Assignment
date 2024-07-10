import React, { useEffect, useState } from 'react';
import { createEmp, geSingleRecord, updateEmployee } from '../reducer/employeereducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

function CreateEmp() {
    const [firstName, setFname] = useState('');
    const [lastName, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [date_of_birth, setDateOfBirth] = useState('');
    const [password, setPass] = useState('');
    const [conpass, setConPass] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let { empid } = useParams();
    const { employees, loading, error: fetchError } = useSelector(state => state.employee);

    useEffect(() => {
        if (empid) {
            dispatch(geSingleRecord(empid)).then(action => {
                if (action.payload) {
                    const emp = action.payload;
                    setFname(emp.firstName);
                    setLname(emp.lastName);
                    setEmail(emp.email);

                    const date = new Date(emp.date_of_birth);
                    const year = date.getFullYear();
                    const month = String(date.getMonth() + 1).padStart(2, '0');
                    const day = String(date.getDate()).padStart(2, '0');
                    setDateOfBirth(`${year}-${month}-${day}`);
                }
            });
        }
    }, [dispatch, empid]);

    const createEpm = (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !date_of_birth || (!empid && (!password || !conpass))) {
            setError('Please fill in all fields.');
            return;
        }

        if (!empid && password !== conpass) {
            setError('Passwords do not match.');
            return;
        }

        setError('');
        dispatch(createEmp({ firstName, lastName, email, date_of_birth, password }))
        navigate('/EmpList');
      
    };

    const updateexem = (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !date_of_birth) {
            setError('Please fill in all fields.');
            return;
        }
        
        setError('');
        dispatch(updateEmployee({ empid, firstName, lastName, email, date_of_birth }))
        navigate('/EmpList');
    };

    return (
        <>
            <form className='border py-5 px-5' onSubmit={empid ? updateexem : createEpm}>
                <div className="border-b border-gray-900/10 pb-12">
                    <h1 className="text-base font-semibold leading-7 text-gray-900"><u>{empid ? 'Update Employee' : 'Create Employee'}</u></h1>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                First name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFname(e.target.value)}
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Last name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="last-name"
                                    name="last-name"
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLname(e.target.value)}
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="dob" className="block text-sm font-medium leading-6 text-gray-900">
                                Date Of Birth
                            </label>
                            <div className="mt-2">
                                <input
                                    id="dob"
                                    name="dob"
                                    type="date"
                                    value={date_of_birth}
                                    onChange={(e) => setDateOfBirth(e.target.value)}
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {!empid && (
                            <>
                                <div className="sm:col-span-3">
                                    <label htmlFor="Password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="Password"
                                            name="Password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPass(e.target.value)}
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="conPassword" className="block text-sm font-medium leading-6 text-gray-900">
                                        Confirm Password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="conPassword"
                                            name="conPassword"
                                            type="password"
                                            value={conpass}
                                            onChange={(e) => setConPass(e.target.value)}
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                        <div className="sm:col-span-6">
                            <span style={{ color: 'red' }}>{error}</span><br />
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                {empid ? 'Update Employee' : 'Create Employee'}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default CreateEmp;
