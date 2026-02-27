import {Navbar} from "./layout/Navbar.tsx";
import Hero from "./sections/Hero.tsx";

function App() {

  return (
      <div className="min-h-screen overflow-x-hidden">

          <Navbar />
          <main>
             <Hero />
              {/*<About />*/}
              {/*<Market />*/}
              {/*<Partners />*/}
              {/*<JoinTeam />*/}
              {/*<Contact />*/}
          </main>
          {/*<Footer />*/}
      </div>
  )
}

export default App
