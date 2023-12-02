import Image from 'next/image'
import groom from 'public/assets/Groom.png'
import Bride from 'public/assets/bride.png'

export default function Headshots(){
    return(
        <div className='relative flex flex-col sm:flex-row sm:justify-around sm:items-center sm:mt-10'>
                <div className='relative sm:float-left'>
                  <Image src={groom} alt="groom headshot" width={250} height={250} className="m-auto"/>
                </div>
                <div className="mt-10 mb-10 flex flex-col items-center text-white text-xl md:text-4xl">
                  <h1>Ralph</h1>
                  <h1>&</h1>
                  <h1>Odette</h1>
                </div>
                <div className="relative">
                  <Image src={Bride} alt="Bride headshot" width={250} height={250} className="m-auto"/>
                </div>
        </div>
    )
}