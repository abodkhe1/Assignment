const express = require('express');
router = express.Router();
const { createEmployee, updateEmployee, getSingle, getAllEmployee, deleteEmployee } = require('../controller/employeeCtrl')

router.post('/create', createEmployee);
router.put('/update/:empid', updateEmployee);
router.get('/getSingle/:empid', getSingle);
router.get('/getAllEmployee', getAllEmployee);
router.delete('/deleteEmployee/:empid', deleteEmployee);

module.exports = router;