import React from 'react';
import Navbar from './shared/Navbar';
import Job from './Job';

const randomJobs = [1, 2, 3];

const Browse = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            
            <div className="max-w-7xl mx-auto px-6 py-10">
                <h1 className="text-2xl font-semibold text-gray-700 mb-8 tracking-tight">
                    Search Results <span className="text-purple-600">({randomJobs.length})</span>
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {randomJobs.map((item, index) => (
                        <div key={index}>
                            <Job />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Browse;
