import Navbar from '../../components/Navbar'
import AuthSection from '../../components/AuthSection'
import Footer from '../../components/Footer'

export const metadata = { title: 'Log In — Blue Links' }

export default function LoginPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: 68 }}>
        <AuthSection />
      </div>
      <Footer />
    </main>
  )
}
