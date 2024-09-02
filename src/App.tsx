import Router from './router.tsx';
import './App.css'
import Header from './header.tsx'
import Footer from './footer.tsx'

function App() {

  return (
      <>
          <Header />
          <main>
              <Router />
          </main>
          <Footer />
      </>
  )
}

export default App
