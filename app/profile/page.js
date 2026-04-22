import Navbar from '../../components/Navbar'
import ProfileSection from '../../components/ProfileSection'
import Footer from '../../components/Footer'

export const metadata = { title: 'Profile — Blue Links' }

export default function ProfilePage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: 68 }}>
        <ProfileSection />
      </div>
      <Footer />
    </main>
  )
}
