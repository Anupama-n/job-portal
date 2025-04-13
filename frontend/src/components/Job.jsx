import React from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const Job = () => {
  const jobId = "dummyjobid";
  const navigate = useNavigate();
  return (
    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all space-y-4 w-full">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Avatar className="w-16 h-16">
          <AvatarImage
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBHyuf_bJCZp8l1H7u1JJDjkaGnv7_N1IAw&s"
            alt="Company Logo"
          />
          <AvatarFallback>CL</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Company Name</h2>
          <p className="text-sm text-gray-500">Nepal</p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-[#9B59B6] mb-1">Title</h3>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsam earum facere.
        </p>
      </div>

      <div className="flex gap-2 flex-wrap sm:flex-nowrap">
        <Badge className="text-gray-700 font-medium py-1 px-4 border border-gray-400 bg-white rounded-lg">
          12 Positions
        </Badge>
        <Badge className="text-gray-700 font-medium py-1 px-4 border border-gray-400 bg-white rounded-lg">
          Part Time
        </Badge>
        <Badge className="text-gray-700 font-medium py-1 px-4 border border-gray-400 bg-white rounded-lg">
          24LPA
        </Badge>
      </div>

      <div className="flex gap-2">
        <Button variant='outline' onClick={() => navigate(`/jobs/description/${jobId}`)}>Details</Button>
        <Button className="bg-[#A569BD] hover:bg-[#8e44ad] text-white">
  Save For Later
</Button>




      </div>
    </div>
  );
};

export default Job;
