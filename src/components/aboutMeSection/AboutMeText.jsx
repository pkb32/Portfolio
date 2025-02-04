import React from 'react'

function AboutMeText() {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
        <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className='text-white'>
        I'm Prayash, a web developer, a game developer and a competitive coder with a passion for learning
        and coding. I specialize in MERN stack development and interested in building real-world projects that can make a difference. 
        I am a quick learner and work well in a team. I also have experience in game development using Unity engine. I am also a competitive coder. Last but 
        not the least I know vehicle designing and modeling and have a brief knowdledge about arduino and electronics. 
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10  hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">
          My Projects
      </button>
    </div>
  )
}

export default AboutMeText
