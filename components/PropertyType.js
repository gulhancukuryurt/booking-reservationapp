import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import Image from 'next/image'
import "pure-react-carousel/dist/react-carousel.es.css";
import hotel from '../img/hotel.jpeg'
import apartments from '../img/apartments.jpeg'
import resort from '../img/resorts.jpeg'
import villas from '../img/villas.jpeg'
import cabins from '../img/cabins.jpeg'
import cottages from '../img/cottages.jpeg'
import glamping from '../img/glamping.jpeg'
import serviceapartment from '../img/servicedapartments.jpeg'
import vacation from '../img/vacation.jpeg'
import guest from '../img/guest.jpeg'
import hostel from '../img/hostels.jpeg'
import motel from '../img/motels.jpeg'

export default function Index() {
    return (
        <div className="max-w-screen-xl px-2 py-5 mx-auto">
             <h3 className="text-2xl font-bold -mb-2">Tesis tipine göre göz atın</h3>
            <div className="flex items-center justify-center w-full h-full py-4 sm:py-8 px-4">
               
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} visibleSlides={1} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                        <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={hotel} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Oteller</h3>
                                           <p>999.956 otel</p>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={apartments} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Daireler</h3>
                                           <p>1.252.266 daire</p>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={resort} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Tatil Köyleri</h3>
                                           <p>19.678 tatil köyü</p>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={villas} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Villalar</h3>
                                           <p>655.937 villa</p>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={cabins} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Dağ Evleri</h3>
                                           <p>47.086 köşk/dağ evi</p>
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={cottages} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Kulübeler</h3>
                                           <p>713.968 kulübe</p>
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={glamping} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Glamping</h3>
                                           <p>18.963 glamping noktası</p>
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={serviceapartment} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Apart Oteller</h3>
                                           <p>41.405 apart otel</p>
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={vacation} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Tatil Evleri</h3>
                                           <p>655.937 tatil evi</p>
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={guest} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Konukevleri</h3>
                                           <p>119.817 konukevi</p>
                                        </div>
                                    </Slide>
                                    <Slide index={10}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={hostel} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Hosteller</h3>
                                           <p>19.026 hostel</p>
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={motel} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Moteller</h3>
                                           <p>13.547 motel</p>
                                        </div>
                                    </Slide>
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

                {/* Carousel for tablet and medium size devices */}
                <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={2} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                <Slide index={0}>
                                        <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={hotel} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Oteller</h3>
                                           <p>999.956 otel</p>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={apartments} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Daireler</h3>
                                           <p>1.252.266 daire</p>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={resort} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Tatil Köyleri</h3>
                                           <p>19.678 tatil köyü</p>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={villas} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Villalar</h3>
                                           <p>655.937 villa</p>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={cabins} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Dağ Evleri</h3>
                                           <p>47.086 köşk/dağ evi</p>
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={cottages} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Kulübeler</h3>
                                           <p>713.968 kulübe</p>
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={glamping} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Glamping</h3>
                                           <p>18.963 glamping noktası</p>
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={serviceapartment} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Apart Oteller</h3>
                                           <p>41.405 apart otel</p>
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={vacation} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Tatil Evleri</h3>
                                           <p>655.937 tatil evi</p>
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={guest} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Konukevleri</h3>
                                           <p>119.817 konukevi</p>
                                        </div>
                                    </Slide>
                                    <Slide index={10}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={hostel} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Hosteller</h3>
                                           <p>19.026 hostel</p>
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={motel} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Moteller</h3>
                                           <p>13.547 motel</p>
                                        </div>
                                    </Slide>
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

                {/* Carousel for mobile and Small size Devices */}
                <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} visibleSlides={1} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={hotel} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Oteller</h3>
                                           <p>999.956 otel</p>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={apartments} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Daireler</h3>
                                           <p>1.252.266 daire</p>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={resort} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Tatil Köyleri</h3>
                                           <p>19.678 tatil köyü</p>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={villas} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Villalar</h3>
                                           <p>655.937 villa</p>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={cabins} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-xl">Dağ Evleri</h3>
                                           <p>47.086 köşk/dağ evi</p>
                                        </div>
                                    </Slide>
                                    
                                   
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
    );
}
