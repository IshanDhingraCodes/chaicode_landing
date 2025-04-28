import React from "react";
import { ThemeConsumer } from "./ui/ThemeContext";
import { chaicodeBlack, chaicodeWhite } from "../assets";
import { footerLinks } from "../constants";
import {
  Discord,
  Github,
  Instagram,
  LinkedIn,
  Tweeter,
  Youtube,
} from "../assets/footerIcons";
import SocialIcon from "./ui/SocialIcon";

const Footer = () => {
  const { theme } = ThemeConsumer();

  return (
    <footer
      className={`relative h-[850px] xs:h-[600px] ${
        theme === "light-theme" ? "bg-[#f0f0f0]" : "bg-black-gradient"
      }`}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 w-full h-[850px] xs:h-[600px]">
        {/* NEW inner container */}
        <div className="max-w-[1440px] mx-auto px-10   h-full">
          <section className="flex flex-col justify-between items-center sm:py-16 py-6 h-full w-full">
            <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
              {/* Logo and description */}
              <div className="flex-1 flex flex-col justify-center items-start  mr-10">
                <img
                  src={theme === "light-theme" ? chaicodeBlack : chaicodeWhite}
                  alt="chaicode logo"
                  className="w-[266px] object-contain"
                />
                <p className="text-[18px] text-center w-full leading-[30.8px] mt-4 max-w-[312px] text-light">
                  Home for programmers
                </p>
              </div>

              {/* Footer Links */}
              <div className="flex-[1.5] flex flex-row justify-start md:justify-end gap-0 sm:gap-20 lg:gap-50 flex-wrap">
                {footerLinks.map((footerlink) => (
                  <div
                    key={footerlink.title}
                    className="flex flex-col mt-10 md:mt-0 min-w-[150px]"
                  >
                    <h4 className="font-bold text-xl mb-6 leading-[27px] ">
                      {footerlink.title}
                    </h4>
                    <ul className="list-none space-y-4">
                      {footerlink.links.map((link) => (
                        <li key={link.name} className="text-light">
                          <a
                            href={link.link}
                            className="font-normal text-[16px] leading-[24px] cursor-pointer hover:text-amber-600 transition-colors duration-300"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
              <p className="font-normal text-center text-[18px] leading-[27px]">
                Copyright Ⓒ 2025 ChaiCode . All Rights Reserved.
              </p>

              <div className="flex flex-row md:mt-0 mt-6">
                <SocialIcon href="https://www.youtube.com/@chaiaurcode">
                  <Youtube />
                </SocialIcon>
                <SocialIcon href="https://www.instagram.com/hiteshchoudharyofficial/?hl=en">
                  <Instagram />
                </SocialIcon>
                <SocialIcon href="https://github.com/hiteshchoudhary">
                  <Github />
                </SocialIcon>
                <SocialIcon href="https://x.com/hiteshdotcom">
                  <Tweeter />
                </SocialIcon>
                <SocialIcon href="https://www.linkedin.com/in/hiteshchoudhary/">
                  <LinkedIn />
                </SocialIcon>
                <SocialIcon href="https://discord.com/invite/WDrH3zuWFb">
                  <Discord />
                </SocialIcon>
              </div>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
