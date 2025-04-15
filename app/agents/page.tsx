"use client";

import { motion } from "framer-motion";
import { Users, Plus } from "@phosphor-icons/react";
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

interface Agent {
  id: string;
  name: string;
  photo: string;
  phoneNumber: string;
  address: string;
  aadharNumber: string;
  accountNumber: string;
  ifscCode: string;
  bankName: string;
}

const Agents = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newAgent, setNewAgent] = useState<Omit<Agent, "id">>({
    name: "",
    photo: "",
    phoneNumber: "",
    address: "",
    aadharNumber: "",
    accountNumber: "",
    ifscCode: "",
    bankName: "",
  });

  // Load agents from localStorage on component mount
  useEffect(() => {
    const savedAgents = localStorage.getItem("agents");
    if (savedAgents) {
      setAgents(JSON.parse(savedAgents));
    }
  }, []);

  // Save agents to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("agents", JSON.stringify(agents));
  }, [agents]);

  const handleAddAgent = () => {
    const agentWithId = {
      ...newAgent,
      id: Math.random().toString(36).substr(2, 9),
    };
    setAgents([...agents, agentWithId]);
    setNewAgent({
      name: "",
      photo: "",
      phoneNumber: "",
      address: "",
      aadharNumber: "",
      accountNumber: "",
      ifscCode: "",
      bankName: "",
    });
    setIsDialogOpen(false);
  };

  const handleDeleteAgent = (id: string) => {
    setAgents(agents.filter((agent) => agent.id !== id));
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
            <Users size={24} className="text-blue-800" />
          </motion.div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Agents
          </h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Meet our dedicated team of agents who are committed to providing
            exceptional service.
          </p>
        </div>

        <div className="mb-6 sm:mb-8 flex justify-end">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700 text-sm sm:text-base">
                <Plus className="mr-2 h-4 w-4" />
                Add Agent
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] w-[95vw]">
              <DialogHeader>
                <DialogTitle className="text-lg sm:text-xl">
                  Add New Agent
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-2 sm:gap-4">
                  <Label htmlFor="name" className="text-left sm:text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={newAgent.name}
                    onChange={(e) =>
                      setNewAgent({ ...newAgent, name: e.target.value })
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
                    value={newAgent.photo}
                    onChange={(e) =>
                      setNewAgent({ ...newAgent, photo: e.target.value })
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
                    value={newAgent.phoneNumber}
                    onChange={(e) =>
                      setNewAgent({ ...newAgent, phoneNumber: e.target.value })
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
                    value={newAgent.address}
                    onChange={(e) =>
                      setNewAgent({ ...newAgent, address: e.target.value })
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
                    value={newAgent.aadharNumber}
                    onChange={(e) =>
                      setNewAgent({ ...newAgent, aadharNumber: e.target.value })
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
                    value={newAgent.accountNumber}
                    onChange={(e) =>
                      setNewAgent({
                        ...newAgent,
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
                    value={newAgent.ifscCode}
                    onChange={(e) =>
                      setNewAgent({ ...newAgent, ifscCode: e.target.value })
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
                    value={newAgent.bankName}
                    onChange={(e) =>
                      setNewAgent({ ...newAgent, bankName: e.target.value })
                    }
                    className="col-span-1 sm:col-span-3"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Button
                  onClick={handleAddAgent}
                  className="text-sm sm:text-base"
                >
                  Add Agent
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
                {agents.map((agent) => (
                  <TableRow key={agent.id}>
                    <TableCell className="font-medium whitespace-nowrap">
                      {agent.name}
                    </TableCell>
                    <TableCell>
                      {agent.photo ? (
                        <img
                          src={agent.photo}
                          alt={agent.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <Users size={16} className="text-gray-500" />
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {agent.phoneNumber}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {agent.address}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {agent.aadharNumber}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {agent.accountNumber}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {agent.ifscCode}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {agent.bankName}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteAgent(agent.id)}
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

export default Agents;
