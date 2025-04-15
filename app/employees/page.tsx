"use client";

import { motion } from "framer-motion";
import { UsersFour, Plus } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Employee {
  id: string;
  name: string;
  photo: string;
  phoneNumber: string;
  dateOfJoining: string;
  address: string;
  aadharNumber: string;
  accountNumber: string;
  ifscCode: string;
  bankName: string;
}

const Employees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState<Omit<Employee, "id">>({
    name: "",
    photo: "",
    phoneNumber: "",
    dateOfJoining: "",
    address: "",
    aadharNumber: "",
    accountNumber: "",
    ifscCode: "",
    bankName: "",
  });

  // Load employees from localStorage on component mount
  useEffect(() => {
    const savedEmployees = localStorage.getItem("employees");
    if (savedEmployees) {
      setEmployees(JSON.parse(savedEmployees));
    }
  }, []);

  // Save employees to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const handleAddEmployee = () => {
    const employeeWithId = {
      ...newEmployee,
      id: Math.random().toString(36).substr(2, 9),
    };
    setEmployees([...employees, employeeWithId]);
    setNewEmployee({
      name: "",
      photo: "",
      phoneNumber: "",
      dateOfJoining: "",
      address: "",
      aadharNumber: "",
      accountNumber: "",
      ifscCode: "",
      bankName: "",
    });
    setIsDialogOpen(false);
  };

  const handleDeleteEmployee = (id: string) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block p-2 sm:p-3 rounded-full bg-blue-100 mb-4"
          >
            <UsersFour size={24} className="text-blue-800" />
          </motion.div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Team
          </h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Meet the talented individuals who make our company thrive.
          </p>
        </div>

        <div className="mb-6 sm:mb-8 flex justify-end">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700 text-sm sm:text-base">
                <Plus className="mr-2 h-4 w-4" />
                Add Employee
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] w-[95vw]">
              <DialogHeader>
                <DialogTitle className="text-lg sm:text-xl">
                  Add New Employee
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <Label htmlFor="name" className="text-left sm:text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={newEmployee.name}
                    onChange={(e) =>
                      setNewEmployee({ ...newEmployee, name: e.target.value })
                    }
                    className="col-span-1 sm:col-span-3"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <Label htmlFor="photo" className="text-left sm:text-right">
                    Photo URL
                  </Label>
                  <Input
                    id="photo"
                    value={newEmployee.photo}
                    onChange={(e) =>
                      setNewEmployee({ ...newEmployee, photo: e.target.value })
                    }
                    className="col-span-1 sm:col-span-3"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <Label
                    htmlFor="phoneNumber"
                    className="text-left sm:text-right"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="phoneNumber"
                    value={newEmployee.phoneNumber}
                    onChange={(e) =>
                      setNewEmployee({
                        ...newEmployee,
                        phoneNumber: e.target.value,
                      })
                    }
                    className="col-span-1 sm:col-span-3"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <Label
                    htmlFor="dateOfJoining"
                    className="text-left sm:text-right"
                  >
                    Date of Joining
                  </Label>
                  <Input
                    id="dateOfJoining"
                    type="date"
                    value={newEmployee.dateOfJoining}
                    onChange={(e) =>
                      setNewEmployee({
                        ...newEmployee,
                        dateOfJoining: e.target.value,
                      })
                    }
                    className="col-span-1 sm:col-span-3"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <Label htmlFor="address" className="text-left sm:text-right">
                    Address
                  </Label>
                  <Input
                    id="address"
                    value={newEmployee.address}
                    onChange={(e) =>
                      setNewEmployee({
                        ...newEmployee,
                        address: e.target.value,
                      })
                    }
                    className="col-span-1 sm:col-span-3"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <Label
                    htmlFor="aadharNumber"
                    className="text-left sm:text-right"
                  >
                    Aadhar Number
                  </Label>
                  <Input
                    id="aadharNumber"
                    value={newEmployee.aadharNumber}
                    onChange={(e) =>
                      setNewEmployee({
                        ...newEmployee,
                        aadharNumber: e.target.value,
                      })
                    }
                    className="col-span-1 sm:col-span-3"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <Label
                    htmlFor="accountNumber"
                    className="text-left sm:text-right"
                  >
                    Account Number
                  </Label>
                  <Input
                    id="accountNumber"
                    value={newEmployee.accountNumber}
                    onChange={(e) =>
                      setNewEmployee({
                        ...newEmployee,
                        accountNumber: e.target.value,
                      })
                    }
                    className="col-span-1 sm:col-span-3"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <Label htmlFor="ifscCode" className="text-left sm:text-right">
                    IFSC Code
                  </Label>
                  <Input
                    id="ifscCode"
                    value={newEmployee.ifscCode}
                    onChange={(e) =>
                      setNewEmployee({
                        ...newEmployee,
                        ifscCode: e.target.value,
                      })
                    }
                    className="col-span-1 sm:col-span-3"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <Label htmlFor="bankName" className="text-left sm:text-right">
                    Bank Name
                  </Label>
                  <Input
                    id="bankName"
                    value={newEmployee.bankName}
                    onChange={(e) =>
                      setNewEmployee({
                        ...newEmployee,
                        bankName: e.target.value,
                      })
                    }
                    className="col-span-1 sm:col-span-3"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Button
                  onClick={handleAddEmployee}
                  className="text-sm sm:text-base"
                >
                  Add Employee
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="whitespace-nowrap">Name</TableHead>
                  <TableHead className="whitespace-nowrap">Photo</TableHead>
                  <TableHead className="whitespace-nowrap">Phone</TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Joining Date
                  </TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Address
                  </TableHead>
                  <TableHead className="hidden sm:table-cell">Aadhar</TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Account
                  </TableHead>
                  <TableHead className="hidden sm:table-cell">IFSC</TableHead>
                  <TableHead className="hidden sm:table-cell">Bank</TableHead>
                  <TableHead className="whitespace-nowrap">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell className="font-medium whitespace-nowrap">
                      {employee.name}
                    </TableCell>
                    <TableCell>
                      {employee.photo ? (
                        <img
                          src={employee.photo}
                          alt={employee.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <UsersFour size={16} className="text-gray-500" />
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {employee.phoneNumber}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {employee.dateOfJoining}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {employee.address}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {employee.aadharNumber}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {employee.accountNumber}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {employee.ifscCode}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {employee.bankName}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteEmployee(employee.id)}
                        className="text-xs sm:text-sm"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Employees;
