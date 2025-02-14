import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Reviews from '../components/Reviews'
import Team from '../components/Team'
import Services from '../components/Services'
import ContactForm from '../components/Contact'
import Journey from '../components/Journey'
import { ContactProvider } from '../context/ContactContext'
import Footer from '../components/Footer'
const page = () => {
  return (
    <div>
  <ContactProvider>
    <Hero/>
    <Reviews/>
    <Team/>
    <Services/>
    <Journey/>
    <ContactForm/>
    <Footer/>
    </ContactProvider>
    </div>
  )
}

export default page