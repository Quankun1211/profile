import { useEffect, useRef } from "react"
import Image from "./Image"
import Information from "./Information"
import Typed from "typed.js"

const Introduce = ({theme}) => {
  const el = useRef()

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [ 'Nguyen Hong Quan', 'a web developer.'],
      typeSpeed: 100,
      loop: true
    })

    return () => {
      typed.destroy()
    }
  })

  return (
    <div id="introduce" className="flex items-center justify-center flex-col mb-20">
      <div className={`w-5/6 p-7 shadow-2xl max-[1023px]:flex-col sm:items-center mx-auto mt-44 flex sm:flex-col xl:flex-row xl:justify-between rounded`}>
        <Information/>
        <Image/>
      </div>

      <h1 className="text-2xl mt-10 font-medium">I'm <span ref={el}></span></h1>
      
    </div>
  )
}

export default Introduce