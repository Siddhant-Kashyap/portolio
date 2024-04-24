const Experience = () => {
  return (
    <>
      <div id="experience" className="  bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] flex justify-center">
        <div>
          <h1 className="mt-20 text-3xl font-bold font-kodemono text-center text-purple-500">
            Experience
          </h1>
          <div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                  <time className="font-mono italic">2022</time>
                  <div className="text-lg font-extrabold">
                    Android Developer
                  </div>
                  <p className="font-comfortaa">
                    As an Android developer at SKBH Apps, I spearheaded the
                    development and UI enhancements of multiple applications,
                    ensuring seamless user experiences. Additionally, I
                    contributed to backend logic implementation, fostering
                    robust functionality across the company's app portfolio.
                  </p>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end mb-10">
                  <time className="font-mono italic">2023</time>
                  <div className="text-lg font-black">
                    Global Logic - Intern
                  </div>
                  <p className="font-comfortaa">                 
                     During my tenure as a full-stack intern at GlobalLogic, I
                  actively participated in the development lifecycle of diverse
                  projects. My responsibilities encompassed both front-end and
                  back-end tasks, including coding, testing, and debugging. I
                  gained practical experience in building scalable web
                  applications, honed my skills in technologies like React.js,
                  Node.js, and database management, and collaborated closely
                  with cross-functional teams to deliver high-quality solutions.
                  This internship at GlobalLogic significantly enriched my
                  understanding of full-stack development and prepared me for
                  future roles in the software industry.
                  </p>
                </div>
                
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start md:text-end mb-10">
                  <time className="font-mono italic">2023</time>
                  <div className="text-lg font-black">
                    GlobalLogic -Software Developer
                  </div>
                  <p className="font-comfortaa">
                  As a software developer working as a full-stack engineer
                  proficient in React and Node.js, I possess the expertise to
                  architect and implement end-to-end solutions for web
                  applications. Leveraging React for dynamic front-end
                  development, I craft intuitive user interfaces that ensure
                  seamless user experiences. On the back end, my proficiency in
                  Node.js allows me to build robust and scalable server-side
                  logic, ensuring efficient data processing and management. With
                  a holistic understanding of both front-end and back-end
                  technologies, I excel in delivering comprehensive solutions
                  that meet the demands of modern web development.
                  </p>
                </div>
                {/* <hr /> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
