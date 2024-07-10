const employee = require('../model/empModel')


const createEmployee = async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        date_of_birth,
        password
    } = req.body;
    try {
        // res.send('check')
        const newEmployee = await employee.create({
            firstName,
            lastName,
            email,
            date_of_birth,
            password
        });
        if (!newEmployee) {
            res.status(401).send('failed create employee');
        }
        res.status(201).send('Employee created successfully');
    } catch (err) {
        console.error('Error creating employee:', err);
    }
}

const updateEmployee = async (req, res) => {
    const empid = req.params.empid;
    console.log(`empid= ${empid}`);
    const {
        firstName,
        lastName,
        email,
        date_of_birth,
        password
    } = req.body;
    try {
        // Find the employee by id
        const findEmployee = await employee.findOne({ where: { id: empid } });

        if (!findEmployee) {
            return res.status(404).send('Employee not found');
        }

        const updatedEmployee = await findEmployee.update({
            firstName,
            lastName,
            email,
            date_of_birth,
            password
        });

        if (!updatedEmployee) {
            return res.status(500).send('Failed to update employee');
        }

        res.status(200).send('Employee updated successfully');
    } catch (err) {
        console.error('Error updaeting employee:', err);
    }
}

const getSingle = async (req, res) => {
    const empid = req.params.empid;
    console.log(`empid= ${empid}`);

    try {
        // Find the employee by id
        const findEmployee = await employee.findOne({ where: { id: empid } });

        if (!findEmployee) {
            return res.status(404).send('Employee not found');
        }

        res.status(200).json(findEmployee);
    } catch (err) {
        console.error('Error get employee:', err);
    }
}

const getAllEmployee = async (req, res) => {
    try {
        const allEmployee = await employee.findAll();
        if (!allEmployee) {
            return res.status(404).send('Employee not found');
        }
        res.status(200).json(allEmployee);

    } catch (err) {
        console.error('Error get all employee:', err);
    }
}

const deleteEmployee = async (req, res) => {
    const empid = req.params.empid;
    try {
        const findEmployee = await employee.findOne({ where: { id: empid } });
        if (!findEmployee) {
            return res.status(404).send('Employee not found');
        }
        await employee.destroy({ where: { id: empid } })
        res.status(200).send('Employee deleted succefully');

    } catch (err) {
        console.error('Error to delete employee:', err);
    }
}

module.exports = { createEmployee, updateEmployee, getSingle, getAllEmployee, deleteEmployee }