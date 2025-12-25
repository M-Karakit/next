'use client'
import { sectionHeader } from "@/app/interfaces/CustomerSays/CustomerSays"
import SlideButtons from "../SlideButtons/SlideButtons"
import { useEffect, useState } from "react";
import { CustomerCardData } from "@/app/Data/CustomerSaysData/CustomerSaysData";
import CustomerSaysCard from "./CustomerSaysCard";

const CustomerSaysSection = ({sectionHeader}: sectionHeader) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(2);

    useEffect(() => {
            const handleResize = () => {
                if (window.innerWidth < 1024) {
                    setCardsToShow(1);
                } else {
                    setCardsToShow(2);
                }
            };
    
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

    const totalCards = CustomerCardData.length;

    const maxIndex = Math.max(0, totalCards - cardsToShow);
    const onPrev = () => setCurrentIndex(prev => Math.max(prev - 1, 0));
    const onNext = () => setCurrentIndex(prev => Math.min(prev + 1, maxIndex)); 
  return (
    <section className="mt-12 mb-12 lg:mt-12.5 xl:mt-22.5 xl:mb-30 2xl:mb-40 2xl:mt-30.75 w-full px-[5.12820vw] md:px-[7.8125vw] lg:px-[13.02083vw]">
      <div className="mb-6 2xl:mb-15 flex justify-between items-center">
        <h1 className="text-xl xl:text-2xl 2xl:text-[32px] font-extrabold text-black leading-none">{sectionHeader}</h1>
        <SlideButtons button={{
          onPrev,
          onNext,
          canPrev: currentIndex > 0,
          canNext: currentIndex < CustomerCardData.length - cardsToShow
        }} />
      </div>
      <div className="overflow-hidden w-full">
          <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                  transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` 
              }}
          >
              {CustomerCardData.map((card, index) => (
                  <div 
                      key={index} 
                      style={{ 
                          flex: `0 0 ${100 / cardsToShow}%` 
                      }}
                      className="px-2 2xl:px-2.5"
                  >
                      <div className="w-full max-md:max-w-90 mx-auto">
                          <CustomerSaysCard customerSays={card} />
                      </div>
                </div>
              ))}
          </div>
      </div> 
    </section>
  )
}

export default CustomerSaysSection
