import ProjectCard from "./ProjectCard"
import colabvision  from "../assets/collabVision.png"
import myKart  from "../assets/mykart.jpg"
import musicui  from "../assets/musicfrontend.jpg"
import npm  from "../assets/npm.jpg"
import qtrip from "../assets/qKart.jpeg"
import ongoing from "../assets/ongoinProject.jpg"


const ProjectSection = () => {
  return (
    <>
    <div id="project" className= "  bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] flex justify-center">
        <div>
          <h1 className="mt-20 text-3xl font-bold font-kodemono text-center text-purple-500">
            Projects
          </h1>
          <div className=" m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-9 mt-8">
            <ProjectCard logoSrc={colabvision} name={"CollabVision"} description={"Project Management application with integrated video call"} uri={"https://kolabvizonnn.netlify.app/"} />
            <ProjectCard logoSrc={npm} name={"Express-MCSR"} description={"Node Package Manager to Fast tract your Express Backend work"} uri ={"https://www.npmjs.com/package/express-mcsr"} />
            <ProjectCard logoSrc={myKart} name={"MyKart"} description={"Ecommerse website"} uri={"https://6497351594f5d80911ebe5ea--myownkart.netlify.app/"} />
            <ProjectCard logoSrc={musicui} name={"Qtify"} description={"UI design for music streamning app "} uri={"https://boisterous-trifle-182ad7.netlify.app/"} />
            <ProjectCard logoSrc={qtrip} name={"QTrip"} description={"Travel site helps you to ease your travelling bucket list"}uri={"https://qtripkk.netlify.app/"} />
            <ProjectCard logoSrc={ongoing} name={"Gamer-Geek Guild (ongoing)"} description={"Website for Gamers and geek where they can come and play duo or single player games"} />
          
          
        
          </div>
        </div>
        </div>
        
    </>
  )
}

export default ProjectSection