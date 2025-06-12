import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Img from '../assets/walls.jpg'
import donate from '../assets/donate.jpg'

AOS.init();

const images = [
  'https://esocs.church/assets/assets/images/website/slider/20230220_071647_603999.jpg',
   Img,
   donate,

];

export const Header = () => {
  const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, 6000); // 3 minutes in milliseconds
  return () => clearInterval(interval);
}, []);


  return (
    <div className="relative dark:text-white bg-white flex flex-col py-16 lg:pt-0 mt-19 lg:flex-col lg:pb-0">
      <div className="flex flex-col items-start w-full max-w-xl px-4 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p
                data-aos="fade-up"
                data-aos-duration="3000"
                className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-500"
              >
                Esocs Collaboration
              </p>
            </div>
            <h2
              data-aos="fade-up"
              data-aos-duration="2000"
              className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
            >
              The ESOCS Centenary
              {/* <br className=" md:block" /> */}
              <span className="inline-block text-deep-purple-accent-400">
                Endowment Fund
              </span>
            </h2>
            <p
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="text-base  text-gray-700 md:text-lg"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <Link
              data-aos="slide-right"
              data-aos-duration="2000"
              to="register"
              className="inline-flex items-center justify-center w-full h-12 delay-300 duration-700 px-6 mb-3 font-medium tracking-wide text-(--color-fireworks1) hover:text-white transition-colors rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-(--color-fireworks1) hover:bg-(--color-fireworks3) focus:shadow-outline focus:outline-none"
            >
              Apply Now
            </Link>
            <Link
              data-aos="flip-left"
              data-aos-duration="2000"
              to="/about"
              aria-label="Learn More"
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-amber-800"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
      <div className="inset-y-0 right-0 w-full max-w-xl px-4 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
      <div className="relative w-full h-full overflow-hidden">
  <AnimatePresence mode="wait">
    <motion.img
      key={images[currentImage]}
      src={images[currentImage]}
      alt="ESOCS Image"
      initial={{ opacity: 0, filter: 'blur(16px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(16px)' }}
      transition={{
        duration: 1.5,
        ease: 'easeInOut'
      }}
      className="absolute inset-0 w-full h-full object-cover rounded-xl pt-5 shadow-xl shadow-black/50"
    />
  </AnimatePresence>
</div>

      </div>
    </div>
  );
};
