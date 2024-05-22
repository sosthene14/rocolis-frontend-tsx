import NavBar from '../common/navbar/NavBar'
import { Hero } from '../hero/Hero'
import { AllDestinations } from './allDestinations/AllDestinations'
import RecommendedAds from './recommandations/RecommendedAds'
import SearchForm from './searchForm/SearchForm'

export default function Home() {
  return (
    <div className='overflow-x-hidden' >
        <NavBar />
        <Hero />
        <SearchForm />
        <RecommendedAds />
        <AllDestinations />
    </div>
  )
}
