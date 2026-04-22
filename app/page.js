import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import DashboardSection from '../components/DashboardSection'
import JobsSection from '../components/JobsSection'
import ProfileSection from '../components/ProfileSection'
import AuthSection from '../components/AuthSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DashboardSection />
      <JobsSection />
      <ProfileSection />
      <AuthSection />
      <Footer />
    </main>
  )
}
