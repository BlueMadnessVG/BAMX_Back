"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesService = void 0;
const database_1 = require("../database");
class EmployeesService {
}
exports.EmployeesService = EmployeesService;
_a = EmployeesService;
EmployeesService.getEmployees = () => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.execute('SELECT * FROM empleados ORDER BY id_empleado DESC');
    let employees = rows.map((r) => {
        return r;
    });
    return employees;
});
EmployeesService.getEmployeeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let [rows] = yield database_1.connection.execute('SELECT * FROM empleados WHERE id_empleado = ?', [id]);
    let employees = rows.map((r) => {
        return r;
    });
    return employees;
});
EmployeesService.insertEmployee = (item) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('INSERT INTO empleados SET ?', [item]);
    return item;
});
EmployeesService.updateEmployee = (item, id) => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.connection.query('UPDATE empleados SET ? WHERE id_empleado = ?', [item, id]);
    return item;
});
