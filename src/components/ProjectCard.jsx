import Tilt from 'react-parallax-tilt'
import "../CustomCss/Custom.css"
const ProjectCard = (props) => {
  return (
    <Tilt perspective={500} >
  <div onClick={() => window.open(props.uri, "_blank")} className="mt-20 cursor-pointer bg-[#000000] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] max-w-sm p-4  min-h-60 rounded-2xl flex justify-center items-center">
  <div className='flex flex-col justify-center items-center w-full'>
    <img className="mt-1" width={200} height={100} src={props.logoSrc} alt={props.name} />
    <h5 className="mb-2 text-xl font-kodemono tracking-tight text-center text-orange-400 dark:text-orange-400">
      {props.name}
    </h5>
    <p className="font-comfortaa tracking-tight text-center text-white dark:text-white">{props.description}</p>
  </div>
</div>

  </Tilt>
  )
}

export default ProjectCard