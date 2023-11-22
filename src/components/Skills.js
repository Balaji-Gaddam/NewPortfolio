import React from 'react'
import '../App.css'
import SkillCard from './SkillCard'
import htmlimg from '../images/html.png'
import cssimg from '../images/css-3.png'
import jsimg from '../images/javascript.png'
import reactimg from '../images/atom.png'
import bootimg from '../images/bootstrap.png'
import pythonimg from '../images/python.png'
import sqlimg from '../images/mysql.png'
import gitimg from '../images/github.png'
import psimg from '../images/photoshop.png'
import djimg from '../images/dj.png'
import TitleHead from './TitleHead'
import ProgressBar from './ProgressBar'


const Data=[
    {
        img:htmlimg,
        title:'HTML',
        pro:'100',
        background:' linear-gradient(to left, #f95114, #ff7d55)',
        back:'0px 10px 50px 0px #f2ab70, 0 1px 1px #ed6f39',
    },
    {
        img:cssimg,
        title:'CSS',
        pro:'95',
        background: 'linear-gradient(to left, #14bcf9, #55e0ff)',
        back: '0 10px 50px 0px #70dcf2, 0 1px 1px #39d2ed',

    },
    {
        img:jsimg,
        title:'JavaScript',
        pro:'75',
        background:'linear-gradient(to left, #f9d714, #ffe355)',
        back:'0 10px 50px -5px #e9f270, 0 1px 1px #eded39',
    },
    {
        img:reactimg,
        title:'ReactJs',
        pro:'75',
        background:'linear-gradient(to left, #0c86e4, #2fc0f5)',
        back:'0 10px 50px -5px #70c2f2, 0 1px 1px #39cfed',
    },
    {
        img:bootimg,
        title:'Bootstrap',
        pro:'70',
        background:' linear-gradient(to left, #8b11dc, rgb(146, 47, 245))',
        back:'0 10px 50px -5px #8470f2, 0 1px 1px #8739ed',
    },
    {
        img:pythonimg,
        title:'Python',
        pro:'85',
        background:'linear-gradient(to left, #d6e40c, #1d8bf3)',
        back:' 0 10px 50px -5px #d9eb52, 0 1px 1px #baed39',
    },
    {
        img:djimg,
        title:'Django',
        pro:'70',
        background:'linear-gradient(to left, #06ad59, #04d365)',
        back:'0 10px 50px -5px #55eb52, 0 1px 1px #39ed5a',
    },
    {
        img:sqlimg,
        title:'MySQL',
        pro:'65',
        background:'linear-gradient(to left, #157ad9, rgb(218, 138, 17))',
        back:'0 10px 50px -5px #1a5ae3, 0 1px 1px #076cd1',
    },
    {
        img:gitimg,
        title:'Github',
        pro:'60',
        background:'linear-gradient(to left, #1594d9, rgb(17, 71, 218))',
        back:'0 10px 50px -5px #1acce3, 0 1px 1px #07bad1',
    },
    {
        img:psimg,
        title:'Photoshop',
        pro:'60',
        background:' linear-gradient(to left, #032c84, rgb(13, 78, 255))',
        back:' 0 10px 50px -5px rgb(4, 49, 139), 0 1px 1px rgb(7, 57, 209)',
    }
]

function Skills() {
  return (
    <div className='SkillsDiv'>
    <TitleHead heading='Skills' color='white'/>
     <div className='SkillMain'>
        {Data.map((items)=>{
            const{img,title,pro,background,back}=items;
            return(
                <div className='Card-Total'>
                    <SkillCard img={img} title={title} back={back}/>
                    <ProgressBar done={pro} background={background} />
                </div>
            )
        })}
    </div>
    </div>
   
  )
}

export default Skills