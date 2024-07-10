import React, { useEffect } from 'react';
import { fetchEmployees, deleteEmp } from '../reducer/employeereducer';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function EmpList() {
    const dispatch = useDispatch();
    const { employees, loading, error } = useSelector(state => state.employee);
    console.log(employees);

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    const handleDelete = (employeeId) => {
        dispatch(deleteEmp(employeeId)).then(() => {
            dispatch(fetchEmployees());
        });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="overflow-x-auto">
            <table className="table-auto min-w-full bg-white border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">Sr No</th>
                        <th className="border border-gray-300 px-4 py-2">Employee Name</th>
                        <th className="border border-gray-300 px-4 py-2">Email</th>
                        <th className="border border-gray-300 px-4 py-2">Date of Birth</th>
                        <th className="border border-gray-300 px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((item, index) => (
                        <tr key={item.id}>
                            <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                            <td className="border border-gray-300 px-4 py-2">{item.firstName}</td>
                            <td className="border border-gray-300 px-4 py-2">{item.email}</td>
                            <td className="border border-gray-300 px-4 py-2">{item.date_of_birth}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <Link to={`/edit/${item.id}`}>Edit</Link> |
                                <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:underline">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmpList;
