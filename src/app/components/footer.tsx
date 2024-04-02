"use client";
import { NAV_LINKS } from "./constants";

// Triaged, use Next/Image and map nav links
const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white text-center py-4 mt-auto">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-start mt-5 gap-4">
            <div className="font-bold">Links</div>
            <div>Homes</div>
            <div>Features</div>
            <div>FAQs</div>
            <div>About</div>
            <div>Pricing</div>
            {/* {NAV_LINKS.length > 0 && NAV_LINKS.map} */}
          </div>

          <div className="flex flex-col items-start mt-5 gap-4 ml-32">
            <div className="font-bold">Legal</div>
            <div>Privacy & Policy</div>
            <div>Terms & Conditions</div>
          </div>

          <div className="flex flex-col mt-5 items-start w-1/4 ml-32">
            <div className="font-bold ">Reach out</div>

            <div className="flex items-start mt-5">
              <img src="/point.png" alt="" className="mr-2" />
              <div>
                <div>Door 2 Ground floor Marcela Bldg.</div>
                <div className="mr-8">Jose Palma Gil St., Claveria St.</div>
                <div className="mr-10">Davao City, 8000 Philippines</div>
              </div>
            </div>
            <br />
            <div className="flex items-center mt-2">
              <img src="/vector.png" alt="" className="mr-2" />
              <div>sales.lap@gmail.com</div>
            </div>
            <br />

            <div className="flex items-center mt-2">
              <img src="/Vector (1).png" alt="" className="mr-2" />
              <div>+63 905 556 5713</div>
            </div>
          </div>

          <div className="flex flex-col mt-5">
            <div className="font-bold mr-14">Get Started</div>
            <div className="flex items-center ml-12 mt-5">
              <div className="bg-white w-[220px] h-10 flex items-center justify-between rounded-md px-4">
                <input
                  type="text"
                  placeholder="Email"
                  className="text-black flex-grow outline-none bg-transparent"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 ml-2 text-blue-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-white w-full mt-4"></div>

        <div className="flex items-center justify-center mt-8">
          <p className="mr-80">© 2024 My Website. All rights reserved.</p>
          <img src="/fb.png" alt="" className="mr-5" />
          <img src="/mssgr.png" alt="" className="mr-5" />
          <img src="/insta.png" alt="" className="mr-5" />
          <img src="/twtr.png" alt="" className="mr-5" />
          <img src="/gmail.png" alt="" className="mr-5" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
