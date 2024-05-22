import NavBar from '../common/navbar/NavBar'
import { Hero } from '../hero/Hero'
import RecommendedAds from './recommandations/RecommendedAds'
import SearchForm from './searchForm/SearchForm'

export default function Home() {
  return (
    <div className='overflow-x-hidden' >
        <NavBar />
        <Hero />
        <SearchForm />
        <RecommendedAds />
    </div>
  )
}
