"use client";

import { motion } from "framer-motion";
import { Users, Plus } from "@phosphor-icons/react";
import { useState } from "react";
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block p-3 rounded-full bg-blue-100 mb-4"
          >
            <Users size={32} className="text-blue-800" />
          </motion.div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Agents</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated team of agents who are committed to providing
            exceptional service.
          </p>
        </div>

        <div className="mb-8 flex justify-end">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="mr-2 h-4 w-4" />
                Add Agent
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Add New Agent</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={newAgent.name}
                    onChange={(e) =>
                      setNewAgent({ ...newAgent, name: e.target.value })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="photo" className="text-right">
                    Photo URL
                  </Label>
                  <Input
                    id="photo"
                    value={newAgent.photo}
                    onChange={(e) =>
                      setNewAgent({ ...newAgent, photo: e.target.value })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phoneNumber" className="text-right">
                    Phone Number
                  </Label>
                  <Input
                    id="phoneNumber"
                    value={newAgent.phoneNumber}
                    onChange={(e) =>
                      setNewAgent({ ...newAgent, phoneNumber: e.target.value })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="address" className="text-right">
                    Address
                  </Label>
                  <Input
                    id="address"
                    value={newAgent.address}
                    onChange={(e) =>
                      setNewAgent({ ...newAgent, address: e.target.value })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="aadharNumber" className="text-right">
                    Aadhar Number
                  </Label>
                  <Input
                    id="aadharNumber"
                    value={newAgent.aadharNumber}
                    onChange={(e) =>
                      setNewAgent({ ...newAgent, aadharNumber: e.target.value })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="accountNumber" className="text-right">
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
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="ifscCode" className="text-right">
                    IFSC Code
                  </Label>
                  <Input
                    id="ifscCode"
                    value={newAgent.ifscCode}
                    onChange={(e) =>
                      setNewAgent({ ...newAgent, ifscCode: e.target.value })
                    }
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="bankName" className="text-right">
                    Bank Name
                  </Label>
                  <Input
                    id="bankName"
                    value={newAgent.bankName}
                    onChange={(e) =>
                      setNewAgent({ ...newAgent, bankName: e.target.value })
                    }
                    className="col-span-3"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Button onClick={handleAddAgent}>Add Agent</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Photo</TableHead>
                <TableHead>Phone Number</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Aadhar Number</TableHead>
                <TableHead>Account Number</TableHead>
                <TableHead>IFSC Code</TableHead>
                <TableHead>Bank Name</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {agents.map((agent) => (
                <TableRow key={agent.id}>
                  <TableCell>{agent.name}</TableCell>
                  <TableCell>
                    {agent.photo && (
                      <img
                        src={agent.photo}
                        alt={agent.name}
                        className="h-10 w-10 rounded-full"
                      />
                    )}
                  </TableCell>
                  <TableCell>{agent.phoneNumber}</TableCell>
                  <TableCell>{agent.address}</TableCell>
                  <TableCell>{agent.aadharNumber}</TableCell>
                  <TableCell>{agent.accountNumber}</TableCell>
                  <TableCell>{agent.ifscCode}</TableCell>
                  <TableCell>{agent.bankName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </motion.div>
  );
};

export default Agents;
