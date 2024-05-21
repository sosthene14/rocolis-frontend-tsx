import NavBar from '../common/navbar/NavBar'
import { Hero } from '../hero/Hero'
import SearchForm from './searchForm/SearchForm'

export default function Home() {
  return (
    <div >
        <NavBar />
        <Hero />
        <SearchForm />
    </div>
  )
}
