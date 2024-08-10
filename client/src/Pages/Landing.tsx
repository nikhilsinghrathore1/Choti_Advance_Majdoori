import React, { useEffect, useState } from 'react';
import gsap from "gsap";

const Landing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 7;

 let animating = false

  const titles = [
    `NikoChan's `,
    "CodeShare",
    "FileShare",
    "RealTime Share",
    "DukhShare",
    "pornShare",
    "jal peejiye thak ",
    "gaye honge itna share karke",
    "ScreenShare",
    "Aur kya hota hai",
    "Creativity Share",
    "done Sharing",
    "jal peejiye thak ",
    "gaye honge itna share karke",
    
  ];

  useEffect(() => {
    const updateActiveSlide = () => {
      document.querySelectorAll(".title").forEach((el, ind) => {
        el.classList.toggle("active-h1", ind === currentIndex);
      });
    };

    const handleSlider = () => {
      if(animating) return;
      animating=true
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % totalSlides;
        updateActiveSlide();
        updateImages(newIndex);
        return newIndex;
      });
    };

    const trimExcessImages = () => {
      const selectors = [".img_top", ".img_bottom"];
      selectors.forEach(selector => {
        const container = document.querySelector(selector);
        const images = Array.from(container?.querySelectorAll("img") || []);
        const excessCount = images.length - 5;
        if (excessCount > 0) {
          images.slice(0, excessCount).forEach(image => container?.removeChild(image));
        }
      });
    };

    const updateImages = (index) => {
      const imgNumber = index + 1;
      const imgSrc = `/src/assets/img${imgNumber}.avif`;
      const imgTop = document.createElement("img");
      const imgBottom = document.createElement("img");

      imgTop.src = imgSrc;
      imgBottom.src = imgSrc;

      imgTop.style.clipPath = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
      imgBottom.style.clipPath = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";

      imgBottom.style.transform = "scale(2)";
      imgTop.style.transform = "scale(2)";

      document.querySelector(".img_top")?.appendChild(imgTop);
      document.querySelector(".img_bottom")?.appendChild(imgBottom);

      gsap.to([imgTop, imgBottom], {
        clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
        scale: 1,
        duration: 2,
        ease: "power4.out",
        stagger: 0.15,
        onComplete: () => {
          trimExcessImages();
          console.log("done animating")
          animating = false; 
        },

      });
      
    };


    updateImages(currentIndex);

    // Set up event listener
    document.addEventListener("click", handleSlider);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("click", handleSlider);
    };
  }, [ currentIndex]);

  useEffect(() => {
    const slideTitles = document.querySelector('.slide-titles');
    if (slideTitles) {
      slideTitles.style.transform = `translateX(-${currentIndex * 50}vw)`;
    }
  }, [currentIndex]);

  return (
    <div className='w-full text-white overflow-hidden relative h-screen f2 bg-[#0f0f0f]'>
      <nav className='fixed text-[13px] p-[2em] top-0 w-full flex justify-between items-center z-20'>
        <a href="https://github.com/nikhilsinghrathore1" target="_blank" rel="noopener noreferrer">
          <p className='text-[15px] tracking-tight'>NikoChan</p>
        </a>
        <p>Explore more</p>
      </nav>

      <footer className='fixed bottom-0 font-light capitalize text-[13px] opacity-70 p-[2em] w-full flex justify-between items-center z-20'>
        <div className='flex gap-20'>
          <a href="#">Instagram</a>
          <a href="#">Gmail</a>
          <a href="#">Twitter</a>
        </div>
        <p>Give a like</p>
      </footer>

      <div className='sliders h-full w-full'>
        {/* Sliding Titles */}
        <div className='slide-titles w-[700vw] items-center justify-between transition-all duration-[1s] h-full absolute top-0 left-0 flex pointer-events-none z-30'>
          {titles.map((title, index) => (
            <div key={index} className=' flex-shrink-0 flex-1 w-full h-full flex justify-center items-center'>
              <h1 className={`title text-h1 ${currentIndex === index ? "active-h1" : ""}`}>{title}</h1>
            </div>
          ))}
        </div>

        {/* Sliding Images */}
        <div className='slide-images w-[550px] h-[480px] absolute top-[45%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-50'>
          <div className="img_top absolute w-full shadow-lg shadow-white  h-full path"></div>
          <div className="img_bottom absolute w-full h-full pathB shadow-lg shadow-white "></div>
        </div>
      </div>

            <div className='absolute bottom-8 f2 text-xl  flex items-center justify-center left-[50%] w-44 h-12 shadow-lg shadow-cyan-100/50 border-t-[1px]  border-cyan-100/20  rounded-full -translate-x-[50%]'>

              <p className='opacity-70 tracking-tight'>Create Room</p>
            </div>


    </div>
  );
};

export default Landing;
