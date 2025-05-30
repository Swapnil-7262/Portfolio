
import { Button } from "../components/ui/button"

import { FiDownload } from 'react-icons/fi'

import Photo from '../components/Photo'
import Socials from "../components/Socials"
import Stats from "../components/Stats"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">Hello I'm <br /><span className="text-accent">Swapnil Chaudhari</span></h1>
            <p className="max-w-[500px] text-white/80 mb-9"> Bringing your vision to life with custom code solutions.</p>

            <div className=" flex flex-col xl:flex-row items-center gap-8">
              <a href="/public/Doc/Swapnil_Chaudhari.pdf" download>
                <Button variant="outline" size="lg"  className="flex uppercase items-center gap-2">
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
              </Button >
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconsStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent  text-base  hover:bg-accent hover:text-primary hover:tansition-all duration-500" />
              </div>
            </div>

          </div>


          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0"> 
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  )
}

export default Home