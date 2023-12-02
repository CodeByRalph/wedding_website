import Image from 'next/image'
import FooterImg from 'public/assets/FooterImg.png'

export default function Story(){
    return (
        <div className="p-10 text-white text-center relative h-max">
            <h1 className='text-4xl pb-5 md:text-6xl md:pb-10'>Our Story</h1>
            <div className='relative flex flex-col items-center gap-12 sm:flex-row-reverse sm:justify-center'>
                <p className="text-sm sm:w-1/2 sm:text-sm md:text-base lg:text-lg">
                Welcome to our love story, where high school 
                friendships blossomed into a lifetime of shared 
                dreams. Junior year brought us together, and by 
                senior year, we knew our connection was something 
                extraordinary. Beyond the tassel-tossing celebrations, 
                we embraced a new chapter - living together and 
                navigating life side by side. The culmination of our 
                journey so far? An enchanting engagement on August 24th, 
                2023, marking the prelude to a wedding celebration 
                that promises to be as unique as our love story. Join us 
                on this joyous journey as we say “I do” to forever.
                </p>
                <Image src={FooterImg} alt='Proposal Photos' fill={false} className=""/>
            </div>
        </div>
    );
}