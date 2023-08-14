import Header from '@/components/Header'
import Offers from '@/components/Offers'
import PropertyType from '@/components/PropertyType'
import Trending from '@/components/Trending'
import TripPlanner from '@/components/TripPlanner'
import Stays from '@/components/Stays'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import MainLogin from '@/components/MainLogin'
import MailList from '@/components/MailList'


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
    <Stays/>
    <MainLogin/>
    <MailList/>
    </>
  )
}
