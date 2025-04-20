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
import { useSelector } from 'react-redux';

const getStatusColor = (status) => {
  switch (status) {
    case 'accepted':
      return 'bg-green-100 text-green-700 border border-green-200';
    case 'rejected':
      return 'bg-red-100 text-red-700 border border-red-200';
    case 'pending':
      return 'bg-yellow-100 text-yellow-700 border border-yellow-200';
    default:
      return 'bg-gray-100 text-gray-700 border border-gray-200';
  }
};

const AppliedJobTable = () => {
  const { allAppliedJobs = [] } = useSelector((store) => store.job);

  
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
          {allAppliedJobs.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-6 text-gray-500">
                You haven't applied to any jobs yet.
              </TableCell>
            </TableRow>
          ) : (
            allAppliedJobs.map((appliedJob) => (
              <TableRow key={appliedJob._id} className="hover:bg-gray-50 transition-colors duration-200">
            <TableCell className="text-sm text-gray-700">
  {appliedJob?.job?.createdAt
    ? new Date(appliedJob.job.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : 'N/A'}
</TableCell>

                <TableCell className="text-sm text-gray-800 font-medium">
                  {appliedJob?.job?.title || 'N/A'}
                </TableCell>
                <TableCell className="text-sm text-gray-600">
                  {appliedJob?.job?.company?.name || 'N/A'}
                </TableCell>
                <TableCell className="text-right">
                  <Badge className={getStatusColor(appliedJob?.status)}>
                    {appliedJob?.status || 'N/A'}
                    
                  </Badge>
                </TableCell>
              </TableRow>
             
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
