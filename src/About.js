import React from "react";
import { Header } from "./header.js";


export const About = () => {
  return (
    <>
      <Header />
      <div class="about-me" className="mt-12 px-2 text-center">
        <h1 className="text-2xl font-interbold text-slate-900 mb-4">Professionally,</h1>
        <p className="text-md font-light font-intermedium mb-2 text-slate-900 sm:px-36">As a Full stack with expertise in multiple
          disciplines, I have spent the past three years honing my skills in ideation, writing reuseable codes,server and API integration and technical writing.
          My goal now is to apply this wealth of knowledge
          to industries that are yet to fully realize the benefits of faster,better and trustworthy design and development.
          </p><p className="text-md font-light font-intermedium mb-2 text-slate-900 sm:px-36">

          I believe that my diverse background, coupled with my
          experience in the field, puts me in a unique position to
          help businesses and organizations that may not have the best yet.
          By bringing my expertise to these industries, I can help
          them create innovative and user-centered products and services that meet the needs of their customers.

          My passion for Web Development has only grown stronger over time, and I am eager to continue exploring new challenges
          and opportunities in this field. I am confident that my skills and experience will allow me to make a meaningful
          impact on any project or team that I am a part of.</p>
        <h1 className="text-2xl font-interbold text-slate-900 mb-4">Personally,</h1>
        <p className="text-slate-900 sm:p-36 text-md font-light font-inter mb-2">
          I come from a typical working-class family in Nigeria, and I am proud to be a fourth-generation Nigerian.
          Despite not being financially rich, my parents instilled in me and my siblings a strong value for education,
          ensuring that we received the best education possible with the resources they had.

          My fascination with technology began when I was a child and watched
          science fiction films, I had aspirations of becoming a hacker. At the time,
          it seemed like an impossible dream, but my passion for technology never
          dwindled.
          <br />
          <br />
          
          That all changed when I discovered Google Grasshopper,
          a coding bootcamp that allowed me to learn the skills I needed to become a programmer.

          From there, my journey in technology has been a thrilling adventure.
          I have developed my skills and expanded my knowledge, always
          striving to improve myself and to keep pace with the ever-evolving
          world of tech.

          Today, I am eager to collaborate with like-minded individuals on
          positive projects that can have a meaningful impact on the world. I believe that through technology,
          we can bring about positive change and make the world a better place for all.

        </p>
      </div>
    </>
  )
};