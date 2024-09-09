import React from "react";

export default function AboutUs() {
  const icons = [
    { image: "images/fb.png", icon: "fb", link: "https://www.facebook.com" },
    {
      image: "images/whatsapp.png",
      icon: "whatsapp",
      link: "https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER",
    },
    {
      image: "images/linkedin.png",
      icon: "linkedin",
      link: "https://www.linkedin.com",
    },
  ];

  const handleClick = (link) => {
    window.open(link, "_blank"); // Opens the link in a new tab
  };

  return (
    <div className = 'items-center justify-center ml-[10vw] mr-[10vw] mt-[5vw]'>
      <h1 className="font-bold text-3xl text-center md:text-4xl mb-[2vw]">
        Welcome to our Resume Builder ! 
        </h1>
        <br></br>
      {/*  About Us paragraph */}
      <p1 className="mt-15 text-xl justify-center">
        we understand the importance of creating a professional and impactful
        resume. We believe that a well-crafted resume can make a significant
        difference in your job search, helping you stand out from the
        competition and land your dream job.
        <br />
        <br />
        Our Resume Builder is designed to simplify the resume creation process,
        offering a user-friendly interface and a wide range of customizable
        templates. Whether you're a recent graduate, a seasoned professional, or
        making a career transition, our platform provides the tools and
        resources you need to create a compelling resume that highlights your
        skills, experience, and achievements.
      </p1>

      <div className="flex space-x-4 justify-center mt-6">
        {icons.map((item, idx) => (
          <img
            key={idx}
            src={item.image}
            alt={item.icon}
            className="cursor-pointer w-10 h-10"
            onClick={() => handleClick(item.link)}
          />
        ))}
      </div>
    </div>
  );
}
