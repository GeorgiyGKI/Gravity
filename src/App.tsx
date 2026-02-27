import {Navbar} from "./layout/Navbar.tsx";

function App() {

  return (
      <div className="min-h-screen overflow-x-hidden">

          <Navbar />
          <div className="flex flex-col items-end justify-center">
              <svg height="500" className="overflow-visible" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path className="glow-shape" fill="#FF0066" d="M18.6,-20.4C27.7,-19,41.1,-18.3,44.2,-13.3C47.2,-8.3,39.9,1.2,34.3,8.9C28.7,16.7,24.8,22.7,19.4,27.8C13.9,32.9,7,36.9,2,34.3C-3.1,31.6,-6.1,22.1,-16.5,18.6C-26.9,15.2,-44.6,17.7,-50.1,13.3C-55.6,8.9,-48.9,-2.4,-40.8,-8.9C-32.7,-15.5,-23.3,-17.3,-16.2,-19.3C-9.2,-21.4,-4.6,-23.8,0.1,-23.9C4.7,-24,9.5,-21.8,18.6,-20.4Z" transform="translate(100 100)" />
              </svg>
          </div>


          <main>
              {/*<Hero />*/}
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
