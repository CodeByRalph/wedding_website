import Image from 'next/image'
import DividerImg from 'public/assets/divider.png'


import Story from '../components/Story'
import Headshots from '../components/Headshots'
import Counter from '../components/Counter'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <main className="h-auto">
      {/* Hero Image and button */}
      <Hero />
      {/* venue information labels */}
      <div className="w-full flex flex-col justify-center items-center text-white">
        <h1 className="mt-10 text-3xl">June 14th, 2025</h1>
        <h1 className="text-xl mt-5">Location Name</h1>
        <h1 className="text-xl mt-2">Location Address</h1>
      </div>
      {/* countdown cards */}
      <Counter />
      {/* Divider Image */}
      <div className="h-36 relative flex justify-center sm:h-48 lg:h-96">
        <Image src={DividerImg} alt="Divider Image" fill={true} style={{ objectFit: "cover"}}/>
      </div>
      {/* Headshot images */}
      <Headshots />
      <Story />
    </main>
  )
}
 