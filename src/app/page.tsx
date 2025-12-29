import Image from "next/image";
import { HomeData } from "./Data/HomeData/Home";
import Tours from "./components/Tours/Tours";
import { TourData } from "./Data/TourData/TourData";
import ExploreSection from "./components/ExploreSection/ExploreSection";
import { ExploreSectionData } from "./Data/ExploreCardData/ExploreCardData";
import CompanySection from "./components/CompanySection/CompanySection";
import { CompanyData } from "./Data/CompanyData/CompanyData";
import SpecialOfferSection from "./components/SpecialOfferSection/SpecialOfferSection";
import { SpecialOfferData } from "./Data/SpecialOfferData/SpecialOfferData";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import { ServiceData } from "./Data/ServiceData/ServiceData";
import MostPopularSection from "./components/MostPopularSection/MostPopularSection";
import { HeaderTitle } from "./Data/MostPopularData/MostPopularData";
import CustomerSaysSection from "./components/CustomerSaysSection/CustomerSaysSection";
import { title } from "./Data/CustomerSaysData/CustomerSaysData";
import BookBikeSection from "./components/BookBikeSection/BookBikeSection";
import { bookData } from "./Data/BookBikeData/BookBikeData";

export default function Home() {
  return (
    <>
      <section className="relative h-screen w-full font-open-sans flex flex-col justify-center items-center text-white">
        <div className="absolute top-0 -z-10 w-full h-full">
          <Image src={HomeData.bgImage} alt="background" fill priority className="object-fill"/>
        </div>
        <div className="flex flex-col justify-center items-center gap-15 2xl:mt-32">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-podcast font-normal leading-none ">{HomeData.title}</h1>
            <p className="text-lg xl:text-xl 2xl:text-2xl font-bold leading-none">{HomeData.subTitle}</p>
          </div>
          <Tours tourProps={TourData} />
        </div>
      </section>

      <ExploreSection sectionHeader={ExploreSectionData.sectionHeader} />
      <CompanySection companyProps={CompanyData} />
      <SpecialOfferSection specialOfferProps={SpecialOfferData} />
      <ServicesSection serviceProps={ServiceData} />
      <BookBikeSection bookBikeProps={bookData.bookBikeProps} />
      <MostPopularSection sectionHeader={HeaderTitle.sectionHeader} />
      <CustomerSaysSection sectionHeader={title.sectionHeader} />
    </>
  );
}
