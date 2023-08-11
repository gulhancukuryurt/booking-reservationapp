import React, { useState } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import Image from 'next/image'
import "pure-react-carousel/dist/react-carousel.es.css";
import { FaRegHeart, FaBiking, FaUmbrellaBeach, FaCity, FaMugHot } from "react-icons/fa";
import planner from '../pages/planner.json'

function TripPlanner() {

    const [tripPlanner, setTripPlanner] = useState("romantizm");
    const [filterPlanner, setFilterPlanner] = useState(planner.planner);

    const handlePlanner = (tripPlanner) => {
        setTripPlanner(tripPlanner);
        console.log(tripPlanner)
    }
    const filterTripPlanner = () => {
        if (tripPlanner === "romantizm") {
            return filterPlanner
                .filter((plan) => plan.category === tripPlanner)
        } else {
            return filterPlanner
                .filter((plan) => plan.category === tripPlanner)

        }
    }
    return (
        <div className='max-w-screen-xl px-2 py-5 mx-auto'>
            <h3 className='font-bold text-2xl'>Hızlı ve kolay seyahat planlayıcısı</h3>
            <p className='mt-2 mb-5'>Bir tema seçin ve Türkiye'deki popüler seyahat noktalarını keşfedin</p>
            <div className='flex flex-col md:flex-row md:flex-grow mb-2'>
                <div className='flex flex-grow flex-row items-center mt-2'>
                    <button className="flex flex-row items-center" onClick={() => handlePlanner("romantizm")}><FaRegHeart className='mr-1' /> Romantizm</button>
                </div>
                <div className='flex flex-grow flex-row items-center mt-2'>
                    <button className='flex flex-row items-center' onClick={() => handlePlanner("açık hava")}> <FaBiking className='mr-1' /> Açık hava </button>
                </div>
                <div className='flex flex-grow flex-row items-center mt-2'>
                    <button className='flex flex-row items-center' onClick={() => handlePlanner("plaj")}>  <FaUmbrellaBeach className='mr-1' /> Plaj </button>
                </div>
                <div className='flex flex-grow flex-row items-center mt-2'>
                    <button className='flex flex-row items-center' onClick={() => handlePlanner("şehir")}>  <FaCity className='mr-1' /> Şehir </button>
                </div>
                <div className='flex flex-grow flex-row items-center mt-2'>
                    <button className='flex flex-row items-center' onClick={() => handlePlanner("dinlenme")}>  <FaMugHot className='mr-1' /> Dinlenme</button>
                </div>
            </div>
            <div className="max-w-screen-xl px-2 py-5 mx-auto">
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={8} visibleSlides={4} step={3} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    {
                                        filterTripPlanner().map((plan, id) => (
                                            <Slide index={id}>
                                                <div key={id} className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                                    <Image src={plan.img} alt="propertimg" className="object-cover object-center w-full" width={170} height={136} />
                                                    <h3 className="font-bold text-xl">{plan.name}</h3>
                                                    <p>{plan.distance}</p>
                                                </div>
                                            </Slide>
                                        ))}


                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={8} visibleSlides={5} step={3} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    {
                                        filterTripPlanner().map((plan, id) => (
                                            <Slide index={id}>
                                                <div key={id} className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                                    <Image src={plan.img} alt="propertimg" className="object-cover object-center w-full" width={170} height={136} />
                                                    <h3 className="font-bold text-md">{plan.name}</h3>
                                                    <p>{plan.distance}</p>
                                                </div>
                                            </Slide>
                                        ))

                                    }


                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={1} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                    {
                                        filterTripPlanner().map((plan, id) => (
                                            <Slide index={id}>
                                                <div key={id} className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                                    <Image src={plan.img} alt="propertimg" className="object-cover object-center w-full" width={150} height={50} />
                                                    <h3 className="font-bold text-xl">{plan.name}</h3>
                                                    <p>{plan.distance}</p>
                                                </div>
                                            </Slide>
                                        ))}
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>

        </div>

    )
}

export default TripPlanner