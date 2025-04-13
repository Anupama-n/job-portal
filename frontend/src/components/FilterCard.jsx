import React from 'react';
import { RadioGroup } from './ui/radio-group';

const filterData = [
  {
    filterType: "Location",
    array: ["Kathmandu", "Pokhara", "Chitwan", "Delhi", "Bangalore", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "Data Science",
      "Graphic Designer",
      "FullStack Developer",
      "UI/UX Designer",
      "Machine Learning Engineer",
      "Mobile App Developer",
      "Cybersecurity Specialist",
    ],
  },
  {
    filterType: "Salary",
    array: ["0-20k", "20k-50k", "50k-1L", "1L-5L", "5L-10L"],
  },
];

const FilterCard = () => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md space-y-6 w-full">
      <h2 className="text-lg font-bold text-gray-800">Filter Jobs</h2>
      <hr />

      <RadioGroup className="space-y-4">
        {filterData.map((data, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-md font-semibold text-[#9B59B6]">{data.filterType}</h3>
            <div className="space-y-1">
              {data.array.map((item, idx) => (
                <label key={idx} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                  <input type="radio" name={data.filterType} value={item} className="accent-[#9B59B6]" />
                  {item}
                </label>
              ))}
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
