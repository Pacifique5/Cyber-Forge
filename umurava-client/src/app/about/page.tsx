import MainLayout from "@/layouts/MainLayout";
import image from "../../../public/video.png";
import Image from "next/image";
import Case from "../../../public/icons/case.svg";
import Challenge from "../../../public/challenge.png";
import Link from "next/link";
import { Briefcase, Target, Trophy } from "lucide-react";

export default function Page() {
  const features = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Build a Strong Portfolio",
      description: "Tackle real-world projects through challenges and hackathons that mirror business needs. Showcase your skills to potential employers.",
      highlight: true
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Enhance Your Employment Path",
      description: "Develop in-demand skills and build a strong portfolio to increase your chances of landing your dream job.",
      highlight: false
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Earn Recognition and Prizes",
      description: "Earn money and knowledge prizes by participating in contests and competitions from partner companies.",
      highlight: false
    }
  ];

  return (
    <MainLayout>
      <div className="py-[6rem] md:py-[10rem] px-6 sm:px-10 md:px-16 lg:px-24 gap-9 md:gap-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl md:text-[40px] font-bold md:font-extrabold text-blue-light">
              Our Story
            </h1>
            <p className="text-gray-800 text-[14px] sm:text-[16px]">
              With 3 years of experience matching African digital talents to
              local and global job markets, we still remain with a big number of
              jobs that remain unfilled due to the lack of experienced African
              Talents.
            </p>
            <p className="text-gray-800 text-[14px] sm:text-[16px]">
              Driven by our mission to place skilled and professional digital
              talent, we created Skills Challenges as a project-based learning
              solution for talents to gain real-world experience, solve
              problems, and build portfolios so that they become ready for
              global job markets.
            </p>
          </div>

          <div className="w-full flex justify-center mx-10 my-4">
            <Image
              src={image}
              height={500}
              width={500}
              alt="Umurava banner"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        <div className="bg-[#F9FAFB] my-20 py-16 px-6 sm:px-10 lg:px-20 rounded-2xl">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Why are we solving this problem
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    feature.highlight 
                      ? 'bg-gradient-to-br from-blue-light to-blue-dark text-white md:col-span-2 lg:col-span-1' 
                      : 'bg-white text-gray-900 shadow-md hover:shadow-lg border border-gray-100'
                  }`}
                >
                  {/* Background decoration */}
                  <div className={`absolute top-0 right-0 w-20 h-20 rounded-full opacity-10 transform translate-x-8 -translate-y-8 ${
                    feature.highlight ? 'bg-white' : 'bg-blue-light'
                  }`}></div>
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                    feature.highlight 
                      ? 'bg-white/20 text-white' 
                      : 'bg-blue-light/10 text-blue-light'
                  }`}>
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className={`font-bold text-lg mb-3 ${
                      feature.highlight ? 'text-white' : 'text-gray-900'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${
                      feature.highlight ? 'text-white/90' : 'text-gray-600'
                    }`}>
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    feature.highlight 
                      ? 'bg-gradient-to-br from-blue-dark/20 to-transparent' 
                      : 'bg-gradient-to-br from-blue-light/5 to-transparent'
                  }`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-[2rem] md:gap-[5rem] lg:gap-[9rem] mx-8 mt-[6rem] md:mt-[10rem]">
          <div className="flex flex-col gap-3 md:pl-[3rem]">
            <h1 className="text-blue-light text-3xl md:text-[40px] font-bold md:font-extrabold">
              Skills Challenges Program is built on the Umurava Talent
              Marketplace Platform
            </h1>
            <p className="text-gray-800 text-[14px] sm:text-[16px]">
              A Project-based Learning Solution aimed at providing young and
              senior talents with an opportunity to showcase their skills to
              real-world projects and challenges from our partner companies and
              organizations.
            </p>
            <p className="text-gray-800 text-[14px] sm:text-[16px]">
              Umurava Skills Challenges enables young talents to build a
              portfolio and experience that increases their readiness to access
              job opportunities and projects.
            </p>
            <Link
              href={""}
              className="px-3 py-2 md:p-3 mt-3 w-[150px] text-white bg-blue-light hover:bg-blue-dark duration-500 rounded-md font-semibold text-center"
            >
              Get Started
            </Link>
          </div>

          <div className="">
            <div className="md:h-[430px] md:w-[320px]">
              <Image src={Challenge} height={380} alt="Umurava hero image" />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
