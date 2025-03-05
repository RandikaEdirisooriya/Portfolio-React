"use client"

import { useState, useEffect } from "react"

export const Achievement = () => {
  const AchieveItems = [
    {
      label: "Innovesta 2023 - 2nd Place",
      disc: "I led my team, Innov8Soft, in the Innovesta 2023 competition, where we secured second place with our innovative group project.",
      imgSrc: "/images/innovesta.jpg",
    },
    {
      label: "Innovesta 2023 - 2nd Place",
      disc: "I led my team, Innov8Soft, in the Innovesta 2023 competition, where we secured second place with our innovative group project.",
      imgSrc: "/images/imagesix.jpg",
    },
    {
      label: "Innovesta 2023 - 2nd Place",
      disc: "I led my team, Innov8Soft, in the Innovesta 2023 competition, where we secured second place with our innovative group project.",
      imgSrc: "/images/imagefive.jpg",
    },
    {
      label: "Innovesta 2023 - 2nd Place",
      disc: "I led my team, Innov8Soft, in the Innovesta 2023 competition, where we secured second place with our innovative group project.",
      imgSrc: "/images/aword.jpg",
    },
    {
      label: "Circle Edge 2024 - 2nd Place",
      disc: "As the leader of Innov8Soft, I guided our team to achieve second place in the Circle Edge 2024 competition, showcasing our skills in software development and problem-solving.",
      imgSrc: "/images/imagethree.jpg",
    },
    {
      label: "Circle Edge 2024 - 2nd Place",
      disc: "As the leader of Innov8Soft, I guided our team to achieve second place in the Circle Edge 2024 competition, showcasing our skills in software development and problem-solving.",
      imgSrc: "/images/imgeone.jpg",
    },
    {
      label: "Circle Edge 2024 - 2nd Place",
      disc: "As the leader of Innov8Soft, I guided our team to achieve second place in the Circle Edge 2024 competition, showcasing our skills in software development and problem-solving.",
      imgSrc: "/images/imgetwo.jpg",
    },
    {
        label: "Circle Edge 2024 - 2nd Place",
        disc: "As the leader of Innov8Soft, I guided our team to achieve second place in the Circle Edge 2024 competition, showcasing our skills in software development and problem-solving.",
        imgSrc: "/images/imagefour.jpg",
      },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % AchieveItems.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="section flex justify-center items-center min-h-[550px] px-4">
      <div className="container max-w-5xl w-full">
        <div className="bg-zinc-800/50 p-6 md:p-14 rounded-2xl relative min-h-[400px] flex items-center justify-center overflow-hidden">
          {AchieveItems.map(({ label, disc, imgSrc }, index) => (
            <div
              key={index}
              className={`absolute w-full flex flex-col-reverse md:flex-row items-center gap-6 transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Left Side - Larger Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-75 h-72 md:w-100 md:h-96 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={imgSrc || "/placeholder.svg"}
                    alt={label}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Side - Text */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-zinc-50 font-semibold text-xl md:text-2xl mb-3">{label}</h2>
                <p className="text-zinc-400 md:text-lg">{disc}</p>
              </div>
            </div>
          ))}

          {/* Logo at the bottom */}
          <img
            src="/logo.png"
            alt="LOGO"
            width={40}
            height={40}
            className="absolute bottom-4 right-4 w-[30px] md:w-[40px] md:h-[40px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Achievement;