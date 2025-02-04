import React from 'react'
import SkillsText from './SkillsText'
import AllSkill from './AllSkill'
import AllSkillsSM from './AllSkillsSM'

const SkillsMain = () => {
  return (
    <div id="skills">
        <div className="max-w-[1290px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
         <SkillsText/>
            <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:hidden lg:block">   
                <AllSkill/> 
            </div>
            <div className='sm:block lg:hidden'>
                <AllSkillsSM/>
            </div>
        </div>
    </div>
  )
}

export default SkillsMain
