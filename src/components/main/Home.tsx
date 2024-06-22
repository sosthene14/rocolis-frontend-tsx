import {Filigrane} from "../common/filigrane/Filigrane";
import { Footer } from "../common/footer/Footer";
import {NavBar} from "../common/navbar/NavBar";
import { Hero } from "../hero/Hero";
import { Separator } from "../ui/separator";
import {AllDepartures} from "./allDepartures/AllDepartures";
import { AllDestinations } from "./allDestinations/AllDestinations";
import { BigDepDesSection } from "./bigDepDesSection/BigDepDesSection";
import {ImminentDeparture} from "./iminentDeparture/IminentDeparture";
import {RecommendedAds} from "./recommandations/RecommendedAds";
import {SearchForm} from "./searchForm/SearchForm";

export const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <Hero />
      <SearchForm />
      <RecommendedAds />
      <Separator className="w-[90%] mb-10 h-[2px] mx-auto bg-opacity-10 bg-slate-200" />
      <ImminentDeparture />
      <Filigrane />
      <Separator className="w-[90%] mb-10 h-[2px] mx-auto bg-opacity-10 bg-slate-200" />
      <AllDestinations />
      <Separator className="w-[90%] mb-10 h-[2px] mx-auto bg-opacity-10 bg-slate-200" />
      <AllDepartures />
      <BigDepDesSection />
      <Footer />
    </div>
  );
}
