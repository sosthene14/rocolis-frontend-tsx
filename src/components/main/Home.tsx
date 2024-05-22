
import { Footer } from '../common/footer/Footer'
import NavBar from '../common/navbar/NavBar'
import { Hero } from '../hero/Hero'
import { AllDestinations } from './allDestinations/AllDestinations'
import { BigDepDesSection } from './bigDepDesSection/BigDepDesSection'
import ImminentDeparture from './iminentDeparture/IminentDeparture'
import RecommendedAds from './recommandations/RecommendedAds'
import SearchForm from './searchForm/SearchForm'

export default function Home() {
  return (
    <div className='overflow-x-hidden' >
        <NavBar />
        <Hero />
        <SearchForm />
        <RecommendedAds />
        <ImminentDeparture />
        <AllDestinations />
        <BigDepDesSection />
        <Footer />
    </div>
  )
}
