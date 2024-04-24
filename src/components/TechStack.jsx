import jsLogo from "../assets/javascriptLogo.png"
import reactLogo from "../assets/ReactJs.png"
import typescriptLogo from "../assets/Typescript_logo_2020.svg.png"
import nodeLogo from "../assets/NodeJS.png"
import pythonLogo from "../assets/Python-logo-notext.svg.png"
import nextJS from "../assets/Next.js-900x0.png"
import javaLogo from "../assets/java-logo-1.png"
import springLogo from "../assets/fTL08u_H_400x400.png"
import docker from "../assets/docker-mark-blue.png"
import awsLogo from "../assets/awslogo.png"
import mySql from "../assets/Mysql_logo.png"
import postgressLogo from "../assets/Postgresql_elephant.svg"
import android from "../assets/Android_robot.svg.png"
import git from "../assets/pngimg.com - github_PNG28.png"
import graphQl from "../assets/GraphQL_Logo.svg.png"
import tailwind from "../assets/Tailwind_CSS_Logo.svg.png"
import Card from "./Card";


const TechStack = () => {
  return (
    <>
      <div id ="skill" className=" bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]  flex justify-center">
        <div>
          <h1 className="text-3xl mt-32 font-bold font-kodemono text-center text-purple-500">
            Technology I Worked On
          </h1>
          <div className=" m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-8">
            <Card name={"JavaScript"} logoSrc={jsLogo}/>    
            <Card name={"Java"} logoSrc={javaLogo}/>    
            <Card name={"TypeScript"} logoSrc={typescriptLogo}/>    
            <Card name={"Python"} logoSrc={pythonLogo}/>    
            <Card name={"ReactJS"} logoSrc={reactLogo}/>    
            <Card name={"NextJs"} logoSrc={nextJS}/>    
            <Card name={"NodeJS"} logoSrc={nodeLogo}/>    
            <Card name={"SprintBoot"} logoSrc={springLogo}/>    
            <Card name={"Docker"} logoSrc={docker}/>    
            <Card name={"AWS"} logoSrc={awsLogo}/>    
            <Card name={"MySql"} logoSrc={mySql}/>    
            <Card name={"PostgresSQL"} logoSrc={postgressLogo}/>    
            <Card name={"Android"} logoSrc={android}/>    
            <Card name={"Git"} logoSrc={git}/>    
            <Card name={"GraphQl"} logoSrc={graphQl}/>    
            {/* <Card name={"Tailwind"} logoSrc={tailwind}/>     */}
        
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStack;
