import React from 'react'
import ProjectDetails from './ProjectDetails'
import TitleHead from './TitleHead';

const ProjectDetailCard=[
    {
        ProjectName:'Threafty Traveller',
        img:'https://img.freepik.com/free-vector/boy-traveler_23-2148177141.jpg?w=740&t=st=1700475010~exp=1700475610~hmac=80ba1408d48b3f05f4742009b3ce5870a1af5ae6aa2e6e8ba02428b41f31b68f',
        Prodiscription:'',
        link:'https://kxor50.csb.app/'
    },
    {
        ProjectName:'Food_Bank',
        img:'https://img.freepik.com/free-vector/female-chef-concept-illustration_114360-12051.jpg?w=740&t=st=1700479344~exp=1700479944~hmac=6775a209260a4e3b12c02990e6e249c03df80d395282e9a252f84512f50ca5fa',
        Prodiscription:'',
        link:'https://tnwldk-3000.csb.app/'
    },
    {
        ProjectName:'Cone & Cake',
        img:'https://img.freepik.com/free-vector/ice-cream-donut-with-coffee_24877-51622.jpg?w=740&t=st=1700475178~exp=1700475778~hmac=6c5882b242864444056f0faded41b4339f7c17615c1ecade092ca27f4e5a7b47',
        Prodiscription:'',
        link:'https://csb-n9f6wo.netlify.app/'
    },
    {
        ProjectName:'Oho',
        img:'https://img.freepik.com/free-vector/realistic-cinema_1284-25377.jpg?w=740&t=st=1700475597~exp=1700476197~hmac=4f42a55dc50f555b1506fb12122b3c8b9f5425d1f3a673daec041fa07ce6e317',
        Prodiscription:'',
        link:''
    },
    {
        ProjectName:'Todo',
        img:'https://img.freepik.com/premium-vector/list-planning-checklist-notepad-paper-daily-task-agreement-concept-illustration_270158-539.jpg?w=740',
        Prodiscription:'',
        link:'https://enchanting-cobbler-b90de8.netlify.app/'
    },
    {
        ProjectName:'Ecommerce',
        img:'https://img.freepik.com/free-vector/online-shopping-concept-landing-page_52683-21292.jpg?w=740&t=st=1700475730~exp=1700476330~hmac=da4c2d823ef5e8880183147757e90f461cf90bdebcf4e4279fec6948be75ec8d',
        Prodiscription:'',
        link:''
    },
]

function Projects() {
  return (
    <div className='ProjectDiv'>
        <TitleHead heading='Works' color='white'/>
    <div className='ProjectMain'>
        {ProjectDetailCard.map((ProDetails, index) => {
            const { ProjectName, img, Prodiscription, link } = ProDetails;
            return (
                <div className='Card-Total' key={index}>
                    <ProjectDetails ProjectName={ProjectName} img={img} Prodiscription={Prodiscription} link={link} />
                </div>
            );
        })}
    </div>
    </div>
  )
}

export default Projects



