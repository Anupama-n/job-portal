import React from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job'

const jobsarray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto mt-5'>
                <div className='flex gap-6'>
                    
                    <div className='w-[15%%]'>
                        <FilterCard />
                    </div>
                    <div className='flex-1'>
                        {
                            jobsarray.length <= 0 ? <span>No jobs found</span> : (
                                <div className='h-auto pb-5'>
                
                                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                                        {
                                            jobsarray.map((item, index) => (
                                                <div key={index}>
                                                    <Job />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Jobs
