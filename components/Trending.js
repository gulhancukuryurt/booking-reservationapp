import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import Image from 'next/image'
import "pure-react-carousel/dist/react-carousel.es.css";
import greece from '../img/greece.jpg'
import france from '../img/france.jpg'
import italy from '../img/italy.jpg'
import holland from '../img/holland.jpg'
import selanik from '../img/selanik.jpg'
import belgrad from '../img/belgrad.jpg'
import berlin from '../img/berlin.jpg'
import batum from '../img/batum.jpg'
import dedeagac from '../img/dedeagac.jpg'
import londra from '../img/londra.jpg'
import milano from '../img/milano.jpg'
import macaristan from '../img/macaristan.jpg'

export default function Index() {
    return (
        <div className="max-w-screen-xl px-2 py-5 mx-auto">
             <h3 className="text-2xl font-bold -mb-2">Popüler seyahat noktaları</h3>
             <p className="mt-2 -mb-3">Türkiye'den gelen gezginler arasında en popüler seçenekler</p>
            <div className="flex items-center justify-center w-full h-full py-4 sm:py-8 px-4">
               
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={5} step={1} infinite={true}>
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
                                            <Image src={greece} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Atina, Yunanistan</h3>
                                          
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={france} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Paris, Fransa</h3>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={italy} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Roma, İtalya</h3>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={holland} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Amsterdam, Hollanda</h3>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={selanik} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Selanik, Yunanistan</h3>
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={belgrad} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Belgrad, Sırbistan</h3>
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={berlin} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Berlin, Almanya</h3>
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={batum} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Batum, Gürcistan</h3>
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={dedeagac} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Dedeağaç, Yunanistan</h3>
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={londra} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Londra, Birleşik Krallık</h3>
                                        </div>
                                    </Slide>
                                    <Slide index={10}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={milano} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Milano, İtalya</h3>
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={macaristan} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Budapeşte, Macaristan</h3>
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
                                            <Image src={greece} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Atina, Yunanistan</h3>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={france} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Paris, Fransa</h3>
                                           <p>1.252.266 daire</p>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={italy} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Roma, İtalya</h3>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={holland} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Amsterdam, Hollanda</h3>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={selanik} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Selanik, Yunanistan</h3>
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={belgrad} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Belgrad, Sırbistan</h3>
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={berlin} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Berlin, Almanya</h3>
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={batum} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Batum, Gürcistan</h3>
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={dedeagac} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Dedeağaç, Yunanistan</h3>
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={londra} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Konukevleri</h3>
                                           <p>119.817 konukevi</p>
                                        </div>
                                    </Slide>
                                    <Slide index={10}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={milano} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Milano, İtalya</h3>
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={macaristan} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Macaristan</h3>
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
                                            <Image src={greece} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Oteller</h3>
                                           <p>999.956 otel</p>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={france} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Daireler</h3>
                                           <p>1.252.266 daire</p>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={italy} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Roma, İtalya</h3>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={holland} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Amsterdam, Hollanda</h3>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                    <div className="flex flex-col flex-shrink-0 w-full sm:w-auto">
                                            <Image src={selanik} alt="propertimg" className="object-cover object-center w-full" />
                                           <h3 className="font-bold text-md">Selanik, Yunanistan</h3>
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
