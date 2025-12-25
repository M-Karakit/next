'use client'
import { ExploreCardData } from "@/app/Data/ExploreCardData/ExploreCardData"
import ExploreCard from "./ExploreCard"
import { ExploreSectionProps } from "@/app/interfaces/ExploreSection/ExploreSection"
import { useEffect, useState } from "react"
import SlideButtons from "../SlideButtons/SlideButtons"

const ExploreSection = ({sectionHeader}: ExploreSectionProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setCardsToShow(1);
            } else if (window.innerWidth < 1280) {
                setCardsToShow(2);
            } else {
                setCardsToShow(4);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalCards = ExploreCardData.length;
    
    const maxIndex = Math.max(0, totalCards - cardsToShow);

    useEffect(() => {
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [cardsToShow, maxIndex, currentIndex]);
    const onPrev = () => setCurrentIndex(prev => Math.max(prev - 1, 0));
    const onNext = () => setCurrentIndex(prev => Math.min(prev + 1, maxIndex)); 

  return (
    <section className="mt-7.5 lg:mt-12.5 xl:mt-22.5 2xl:mt-30.75 w-full px-[5.12820vw] md:px-[7.8125vw] lg:px-[13.02083vw]">
      <div className="mb-6 2xl:mb-15 flex justify-between items-center">
        <h1 className="text-xl xl:text-2xl 2xl:text-[32px] font-extrabold text-black leading-none">{sectionHeader}</h1>
        <SlideButtons button={{
          onPrev,
          onNext,
          canPrev: currentIndex > 0,
          canNext: currentIndex < ExploreCardData.length - cardsToShow
        }} />
      </div>
      <div className="overflow-hidden w-full">
          <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                  transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` 
              }}
          >
              {ExploreCardData.map((card, index) => (
                  <div 
                      key={index} 
                      style={{ 
                          flex: `0 0 ${100 / cardsToShow}%` 
                      }}
                      className="px-2 xl:px-4 shrink-0"
                  >
                      <div className="w-full max-md:max-w-90 mx-auto">
                          <ExploreCard cards={card} />
                      </div>
                </div>
              ))}
          </div>
      </div> 
    </section>
  )
}

export default ExploreSection
