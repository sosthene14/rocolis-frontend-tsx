import { gradientText } from "@/common/ClassNames";
import {  ReactNode, useState } from "react";
import { FaFacebook, FaYoutube, FaInstagramSquare } from "react-icons/fa";

interface IProps {
    title?:string
    children?:string|Element|ReactNode
    href?:string
}

const SectionTitle = ({ title }:IProps) => (
  <div className="text-white text-base font-normal font-['Angkor'] mb-5">{title}</div>
);

const SectionItem = ({ children }:IProps) => (
  <div className="w-[175.20px] opacity-70 text-white text-sm font-medium font-['Montserrat']">
    {children as ReactNode}
  </div>
);

const SocialLink = ({ href, children }:IProps) => (
  <a href={href} className="w-6 h-6 cursor-pointer">
    {children as ReactNode}
  </a>
);

export const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col   justify-center items-center gap-16 pt-8 mt-[100px] bg-neutral-800 dark:bg-slate-700">
      <div className="text-center">
        <p className="text-gray-300 mb-10 text-[1.5rem] font-bold font-['Raleway']">
          {"S'inscrire à la Newsletter"}
        </p>
        <form >
              <div className="w-full justify-center items-center flex " >
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  type="email"
                  autoComplete="on"
                
                  required
                  placeholder="Entrer votre adresse Email"
                  className="h-[50px] w-[250px] mr-[80px] md:mr-0 md:w-[400px] text-slate-400 relative left-0 top-0 pl-5  bg-blue-600 bg-opacity-10 rounded-[50px] border border-teal-300 border-opacity-50 backdrop-blur-[25px] focus:border-none focus:outline-none"
                />
                <button type="submit" className="mr-[140px] md:mr-0 ml-[320px] absolute h-[52px] w-[150px] px-[30px] py-4 bg-gradient-to-r from-slate-500 to-blue-950 rounded-[50px] border border-teal-300 border-opacity-50 justify-center items-center gap-2.5 inline-flex">
                  <div className="text-white text-base font-bold font-['Raleway']">
                    {"S'abonner"}
                  </div>
                </button>
              </div>
            </form>
      </div>

      <div className="flex flex-wrap-reverse justify-center items-center gap-[90px] pb-[20px]">
        <div className="text-center mb-12">
          <p
            className={`${gradientText} text-[30px] lg:text-[32px] font-[Moul] font-semibold cursor-pointer`}
          >
            ROCOLIS
          </p>
          <div className="flex items-center gap-5">
            <SocialLink href="https://www.facebook.com/RostelHighTech">
              <FaFacebook color="white" />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/rostelhightech/">
              <FaInstagramSquare color="white" />
            </SocialLink>
            <SocialLink href="https://www.youtube.com/@rostelhigh-tech">
              <FaYoutube color="white" />
            </SocialLink>
            <SocialLink href="https://twitter.com/RostelHighTech">
              <p className="text-white text-[15px] -mt-1 cursor-pointer font-semibold font-['Montserrat']">
                𝕏
              </p>
            </SocialLink>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-[50px] mx-auto">
          <div className="flex flex-col gap-4">
            <SectionTitle title="Notre activité" />
            <SectionItem>Petites annonces en ligne</SectionItem>
          </div>

          <div className="flex flex-col gap-4">
            <SectionTitle title="Nos Partenaires" />
            <SectionItem>Rostel High-Tech</SectionItem>
            <SectionItem>MCR Business</SectionItem>
            <SectionItem>D.E.V Pro Code</SectionItem>
          </div>

          <div className="flex flex-col gap-4">
            <SectionTitle title="A propos de Nous" />
            <SectionItem>Notre histoire</SectionItem>
            <SectionItem>Travaillez avec nous</SectionItem>
          </div>

          <div className="flex flex-col gap-4">
            <SectionTitle title="Contactez-nous" />
            <SectionItem>+221 786319559</SectionItem>
            <SectionItem>rocolis.info@gmail.com</SectionItem>
          </div>
        </div>
      </div>

      <div className="w-3/4 bg-white h-[1px] -mt-12 -mb-12"></div>

      <div>
        <p className="text-white text-center text-sm mb-5">
          Copyright © 2024 Rocolis - Powered by Rostel High-Tech
        </p>
      </div>
    </div>
  );
};
