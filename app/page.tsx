import Image from 'next/image'
import Link from 'next/link'
import HeroImg from 'public/assets/Hero.png'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="h-[80vh] w-screen relative flex justify-center items-center">
        <Image src={HeroImg} alt="Hero Image" layout="fill" objectFit="cover"/>
        <div className="relative flex flex-col">
          <h1 className="text-white text-center text-2xl">The wedding celebration of</h1>
          <h1 className="text-white text-center text-3xl mb-5">Odette and Ralph</h1>
          <Link href="" className="text-white text-center w-1/3 m-auto p-2 rounded-md bg-green-200">RSVP</Link>
        </div>
      </div>

    </main>
  )
}
