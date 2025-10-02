import React from "react";
import { Blog, Phone, Email, Github } from "@/assets";
import Link from "next/link";
import "./Books.css";

const Profile = () => {
  return (
    <section
      className="w-full relative z-0 top-0 right-0 overflow-hidden"
      id="1"
    >
      <div className="max-w-5xl mx-auto flex gap-20 items-end pt-52 pb-96">
        <div>
          <h1 className="relative left-0 top-0 text-6xl mb-14 text-[#2F4858] before:content-[''] before:absolute before:-left-4 before:-top-4 before:w-12 before:h-12 before:bg-[#eb9928] before:rounded-full before:-z-1">
            PROFILE
          </h1>
          <h1 className="w-80 relative right-0 top-0">
            <img className="w-full" src="/images/profileimage.png" />
          </h1>
        </div>
        <div>
          <div className="mb-7">
            <h2 className="inline-block mr-2 font-bold">황대성</h2>
            <span className=" text-gray-700">HWANG DAESUNG</span>
          </div>
          <h3 className="flex items-center gap-3 mb-2 font-light">
            <span className="inline-block">
              <Email width={"30px"} height={"30px"} />
            </span>
            klp2797@naver.com
          </h3>
          <h3 className="flex items-center gap-3 mb-2 font-light">
            <span className="inline-block">
              <Phone width={"30px"} height={"30px"} />
            </span>
            010-2406-8022
          </h3>
          <h3>
            <Link
              className="flex items-center gap-3 mb-2 font-light"
              href="https://devdaybook.tistory.com"
              target="_blank"
            >
              <span className="inline-block">
                <Blog width={"30px"} height={"30px"} />
              </span>
              devdaybook.tistory.com
            </Link>
          </h3>
          <h3 className="flex items-center gap-3 font-light">
            <Link
              className="flex items-center gap-3 mb-2 font-light"
              href="https://github.com/hwangdae"
              target="_blank"
            >
              <span className="inline-block">
                <Github width={"30px"} height={"30px"} />
              </span>
              github.com/HwangDae
            </Link>
          </h3>
        </div>
      </div>
      <div className="w-[480px] h-[480px] absolute -right-56 top-[500px] -z-1 rounded-full  bg-[rgb(218,155,183,0.5)] animate-bounce-up-down"></div>
      <div className="shelf">
        <div className="book">A</div>
        <div className="book">B</div>
        <div className="book">C</div>
        <div className="book">D</div>
      </div>
    </section>
  );
};

export default Profile;
