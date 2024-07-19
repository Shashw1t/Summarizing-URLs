import React from "react";
import { logo } from "../assets";
import "../App.css"; // Ensure correct path if needed

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />
        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/Shashw1t", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Article Summarizer<br className='max-md:hidden' />
        <span className="text-xs font-extrabold text-black text-center">powered by</span>
        <span className='orange_gradient'>
          OpenAI GPT-4
        </span>
      </h1>
      <h2 className='desc'>
        <b>
        Summarize Articles in one click, effortlessly.
        <br className='hidden md:block' />
        Get your articles, sites, blogs summarized concisely.
        </b>
      </h2>
    </header>
  );
};

export default Hero;
