import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Badge } from './ui/badge';

const jobData = [
  { date: '14-02-2025', role: 'Backend Developer', company: 'Microsoft', status: 'Selected' },
  { date: '18-02-2025', role: 'Frontend Developer', company: 'Google', status: 'Rejected' },
  { date: '22-02-2025', role: 'UI/UX Designer', company: 'Netflix', status: 'Pending' },
  { date: '25-02-2025', role: 'DevOps Engineer', company: 'Amazon', status: 'Selected' },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Selected':
      return 'bg-green-100 text-green-700 border border-green-200';
    case 'Rejected':
      return 'bg-red-100 text-red-700 border border-red-200';
    case 'Pending':
      return 'bg-yellow-100 text-yellow-700 border border-yellow-200';
    default:
      return 'bg-gray-100 text-gray-700 border border-gray-200';
  }
};

const AppliedJobTable = () => {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
      <Table>
        <TableCaption className="text-gray-500 pb-4">Your Applied Jobs</TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="text-gray-700 font-medium">Date</TableHead>
            <TableHead className="text-gray-700 font-medium">Job Role</TableHead>
            <TableHead className="text-gray-700 font-medium">Company</TableHead>
            <TableHead className="text-right text-gray-700 font-medium">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobData.map((job, index) => (
            <TableRow key={index} className="hover:bg-gray-50 transition-colors duration-200">
              <TableCell className="text-sm text-gray-700">{job.date}</TableCell>
              <TableCell className="text-sm text-gray-800 font-medium">{job.role}</TableCell>
              <TableCell className="text-sm text-gray-600">{job.company}</TableCell>
              <TableCell className="text-right">
                <Badge className={getStatusColor(job.status)}>{job.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
