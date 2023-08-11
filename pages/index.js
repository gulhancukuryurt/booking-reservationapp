import Header from '@/components/Header'
import Offers from '@/components/Offers'
import PropertyType from '@/components/PropertyType'
import Trending from '@/components/Trending'
import TripPlanner from '@/components/TripPlanner'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar />
    <Header/>
    <Offers/>
    <PropertyType/>
    <Trending/>
    <TripPlanner/>
    </>
  )
}
