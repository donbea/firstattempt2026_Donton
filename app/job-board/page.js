import Navbar from '../../components/Navbar'
import JobsSection from '../../components/JobsSection'
import Footer from '../../components/Footer'

export const metadata = { title: 'Job Board — Blue Links' }

export default function JobBoardPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: 68 }}>
        <JobsSection />
      </div>
      <Footer />
    </main>
  )
}
