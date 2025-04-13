import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer",
    "UI/UX Designer",
    "Machine Learning Engineer",
    "Mobile App Developer",
    "Cybersecurity Specialist"
]

const CategoryCarousel = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
        <Carousel className="w-full">
            <CarouselContent className="flex items-center space-x-6 px-4 w-155">
                
                    {
                        category.map((cat, index) => (
                            <CarouselItem key={index} className='md: basis-1/2 lg:basis-1/3'> 

                                <Button  className="w-full py-3 px-8 text-sm font-semibold text-white bg-gradient-to-r from-[#9B59B6] to-[#BB8FCE] rounded-xl shadow-lg hover:brightness-110 ">{cat}</Button>
                            </CarouselItem>
                        ))
                    }
            
            </CarouselContent>
            <div className="absolute top-1/3 left-[-3rem] transform -translate-y-1/2 z-10">
                <CarouselPrevious className="p-3 bg-white text-[#9B59B6] rounded-full shadow-md hover:bg-[#F4ECF7] hover:text-[#BB8FCE] transition-all duration-200"/>
            </div>
            <div className="absolute top-1/3 right-[-3rem] transform -translate-y-1/2 z-10">
                <CarouselNext className="p-3 bg-white text-[#9B59B6] rounded-full shadow-md hover:bg-[#F4ECF7] hover:text-[#BB8FCE] transition-all duration-200" />
            </div>
        </Carousel>
    </div>
  )
}

export default CategoryCarousel
