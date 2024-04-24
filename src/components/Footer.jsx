

const Footer = () => {
  return (
    <footer id="footer" className=" bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] lg:grid lg:grid-cols-5 shadow-footershadow">
      <div className="relative block h-12 lg:col-span-2 lg:h-full">
        <img
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="img"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-xs uppercase tracking-wide text-orange-500">
                {" "}
                Call me{" "}
              </span>

              <a
                
                className="block text-2xl space-y-4 font-medium text-white-900 hover:opacity-75 sm:text-3xl"
              >
                +91 8709257676
              </a>
            </p>

          </div>

          <div>
            <p className="font-medium text-orange-500">Email</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="mailto:KashyapSiddhant01@gmail.com"
                  className="text-gray-100 text-xl transition hover:opacity-75"
                >
                  {" "}
                  KashyapSiddhant01@gmail.com{" "}
                </a>
              </li>

              
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">

            <p className="mt-8 text-xs text-gray-500 sm:mt-0">
              &copy; 2024. Siddhant Kashyap. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
