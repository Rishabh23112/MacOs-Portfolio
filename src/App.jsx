import Dock from "#components/Dock"
import Home from "#components/Home"
import Navbar from "#components/Navbar"
import Resume  from "./window/Resume";
import Safari from "./window/Safari";
import Terminal from "./window/Terminal";
import gsap from "gsap";

import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable)


const App = () => {
  return (
    <>
      <video className="bg-video" autoPlay muted loop playsInline>
        <source src="/video/Earth2.mp4" type="video/mp4" />
      </video>

      <main>
        <Navbar />
        <Home />
        <Dock/>

        <Terminal/>
        <Safari/>
        <Resume/>
      </main>
    </>
  )
}

export default App