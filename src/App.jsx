import Dock from "#components/Dock";
import Home from "#components/Home";
import Navbar from "#components/Navbar";
import gsap from "gsap";
import Finder from "./window/Finder";
import ImageWindow from "./window/Image";
import Resume from "./window/Resume";
import Safari from "./window/Safari";
import Terminal from "./window/Terminal";
import TextWindow from "./window/Text";

import { Draggable } from "gsap/Draggable";
import Contact from "./window/Contact";
import Folder from "#components/Folder";

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
        <TextWindow/>
        <ImageWindow/>
        <Finder/>
        <Contact/>
        <Folder/>
      </main>
    </>
  )
}

export default App