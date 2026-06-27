import { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import "../src/App"

function App() {

  const [meme, setMeme] = useState("")
  const buttonRef = useRef(null)
  const memeContainerRef = useRef(null)

  const fetchMeme = async () => {
    buttonRef.current.disabled = true
    buttonRef.current.textContent = "Coming right up..."

    try {
      const res = await fetch("https://meme-api.com/gimme")
      const data = await res.json()
      setMeme(data.url)
    }

    catch (error) {
      memeContainerRef.current.textContent = "Something went wrong :("
      console.log(error)
    }

    finally {
      buttonRef.current.disabled = false
      buttonRef.current.textContent = "Generate"
    }
  }

  return (<>

    {/* App Container */}
    <div className="min-h-screen" style={{ background: `radial-gradient(ellipse at top left, #065f46 0%, transparent 50%), radial-gradient(ellipse at bottom right, #1e3a5f 0%, transparent 50%), #0a0a12` }}>

      <Navbar />

      <div className="md:flex md:justify-center md:items-center">

        {/* Meme Container */}
        <div ref={memeContainerRef} className="meme_container bg-gray-900 border border-white h-80 max-w-[90vw] m-auto rounded-2xl md:min-w-[70vw] md:min-h-[70vh] md:ml-10 lg:h-80 lg:max-w-[50vw]">
          <img src={meme} className="w-full h-full object-contain rounded-2xl" alt="" />
        </div>

        <div className="flex flex-col justify-center items-center lg:flex lg:justify-center lg:items-center">

          {/* Text Content */}
          <div className="text-white text-center items-center p-10 text-2xl md:text-3xl">
            <h1 className="font-bold"> Welcome to MemeZilla, fellas! </h1>
            <h1>Smash that 'Generate' button to see a new meme.</h1>
          </div>

          {/* GENERATE Button */}
          <div className="button bg-white px-7 py-2 text-3xl w-fit cursor-pointer rounded-sm" ref={buttonRef} onClick={fetchMeme}>
            <button>Generate</button>
          </div>

        </div>
      </div>

    </div>
  </>)
}

export default App;