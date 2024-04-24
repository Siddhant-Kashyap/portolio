import picture from "../assets/sidAvatar.png";
const LandingPage = () => {
  return (
    <>
  <div id="home" className="hidden lg:flex justify-around items-center h-5/6 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
    <div className="w-96">
        <div className="text-amber-300 font-modimi">&lt;name/&gt;</div>
        <div className="text-lime-50 font-whisper text-8xl">Siddhant</div>
        <div className="text-lime-50 font-whisper text-7xl">Kashyap</div>
        <div className="text-amber-300 font-modimi grid grid-cols-1 place-items-end">&lt;name/&gt;</div>
    </div>
    <div className="font-modimi drop-shadow-custom"><img  width={300} src={picture} alt="sid"/></div>
    <div className="w-96">
        <div className="text-amber-300 font-modimi">&lt;about/&gt;</div>
        <p className="text-lime-50 font-comfortaa text-1xl">I am a Software Engineer</p>
        <p className="text-lime-50 font-comfortaa text-1xl">Passionate coder dedicated to crafting elegant and efficient solutions through clean code and continuous learning !!!</p>
        <div className="text-amber-300 font-modimi grid grid-cols-1 place-items-end">&lt;about/&gt;</div>
    </div>
</div>

<div className="lg:hidden flex flex-col justify-center items-center h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
    <div className="w-96">
        <div className="text-amber-300 font-modimi text-sm md:text-lg lg:text-xl">&lt;name/&gt;</div>
        <div className="text-lime-50 font-whisper text-4xl md:text-5xl lg:text-8xl">Siddhant</div>
        <div className="text-lime-50 font-whisper text-3xl md:text-4xl lg:text-7xl">Kashyap</div>
        <div className="text-amber-300 font-modimi grid grid-cols-1 place-items-end text-sm md:text-lg lg:text-xl">&lt;name/&gt;</div>
    </div>
    <div className="w-96">
        <div className="text-amber-300 font-modimi text-sm md:text-lg lg:text-xl">&lt;about/&gt;</div>
        <p className="text-lime-50 font-comfortaa text-xs md:text-sm lg:text-base">I am a Software Engineer</p>
        <p className="text-lime-50 font-comfortaa text-xs md:text-sm lg:text-base">Passionate coder dedicated to crafting elegant and efficient solutions through clean code and continuous learning !!!</p>
        <div className="text-amber-300 font-modimi grid grid-cols-1 place-items-end text-sm md:text-lg lg:text-xl">&lt;about/&gt;</div>
    </div>
</div>


    
    </>
  )
}

export default LandingPage