import Navbar from '../../components/Navbar'
import DashboardSection from '../../components/DashboardSection'
import Footer from '../../components/Footer'

export const metadata = { title: 'Dashboard — Blue Links' }

export default function DashboardPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: 68 }}>
        <DashboardSection />
      </div>
      <Footer />
    </main>
  )
}
