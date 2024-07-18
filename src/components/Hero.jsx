import React from "react";

import { logo } from "../assets";

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
        Website URL Summarizer<br className='max-md:hidden' />
        <span className='orange_gradient'>
          <sup className='text-xs align-super'>powered by </sup>OpenAI GPT-4
        </span>
      </h1>
      <h2 className='desc'>
        Summarize URLs in one click, effortlessly.
        <br className='hidden md:block' />
        Get your sites, URLs, articles, blogs summarized concisely.
      </h2>
    </header>
  );
};

export default Hero;
