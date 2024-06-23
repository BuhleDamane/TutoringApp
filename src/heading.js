import React from "react";
import './App.css';
import { IconName } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import { FaBookDead } from "react-icons/fa";
import { MdScience } from "react-icons/md";
import { TbMathSymbols } from "react-icons/tb";
import { TbMathXDivideY2 } from "react-icons/tb";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdAccountBalance } from "react-icons/md";
import { FaBacteria } from "react-icons/fa";
import { MdAgriculture } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import { GiArchiveRegister } from "react-icons/gi";
import { FaDiceOne } from "react-icons/fa6";
import { FaDiceThree } from "react-icons/fa6";
import { FaDiceFive } from "react-icons/fa6";
import { LuPackageOpen } from "react-icons/lu";
import"./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import logoImage from './image.js/logo2.png'
import coverImage from './image.js/cover 2.png'
import aboutImage from './image.js/about picture.png'
import bw1Image from './image.js/1 black woman.jpg'

export default function Heading(){
    return(
<div className="containa">
<nav>
    <div className="info-logo">
        <div className="info"> EduApply</div>
    <div className="logo">
      <img src={logoImage} className="logo" alt="logo"/>
    </div></div>

    <div className="navbarr">  
    <ul>
        <li><a href="#"/>Home</li>
        <li><a href="#"/>About</li>
        <li><a href="#"/>Services</li>
        <li><a href="#"/>Contact</li>
    </ul>
    </div>
    </nav>
   <div className="wrap">
    <div className="intro">
        <h1 className="slogan-h1">
        Helping You Achieve Your Ultimate Success!
        </h1>
        <p className="slogan-p">EduApply offers expert application assistance and personalized tutoring to help you achieve your academic and career goals. Join us to make your dreams a reality with EduApply.

        </p>
    </div>
    <div className="image">
    <img src={coverImage} className="cover d-none d-md-block d-lg-block d-xl-block" alt="logo"/>
    </div>
   </div>
   <div className="buttons">
    <button className="butt1">
        Get a Tutor
    </button>
    <button className="butt2">
        Become a Tutor
    </button>
   </div>
   <div className="about-page">
        <div className="intro-about">
      <h1 className="about-h1">Unlock Your Potential with Lessons You Won't Want to Miss</h1>
      <p className="about-p">Imagine a service where you can get expert tutoring anytime, anywhere. EduApply is here to make your learning experience enriching and successful. Join us to master any subject with confidence.</p>
        </div>
        <div className="rotate">
        <div class="train">
            <div className="icon eng" id="html-icon"> <h1>English</h1><p>Grade 1-12</p><div className="icons eng"><FaBookOpen /></div></div>
            <div className="icon hist" id="css-icon"> <h1>History</h1><p>Grade 10-12</p><div className="icons"><FaBookDead /></div></div>
            <div className="icon physics" id="js-icon"><h1>Physical Sciences</h1><p>Grade 10-12</p><div className="icons"><MdScience /></div></div>
            <div className="icon maths-lit" id="react-icon"><h1>Maths Literacy</h1><p>Grade 10-12</p><div className="icons"><TbMathSymbols /></div></div>
            <div className="icon maths" id="node-icon"><h1>Maths</h1><p>Grade 10-12</p><div className="icons"><TbMathXDivideY2 /></div></div>
            <div className="icon geo" id="html-icon"><h1>Geography</h1><p>Grade 10-12</p><div className="icons"><TiWeatherPartlySunny /></div></div>
            <div className="icon acc" id="css-icon"><h1>Accounting</h1><p>Grade 10-12</p><div className="icons"><MdAccountBalance /></div></div>
            <div className="icon ls" id="js-icon"><h1>Life Sciences</h1><p>Grade 10-12</p><div className="icons"><FaBacteria /></div></div>
            <div className="icon agric" id="react-icon"><h1>Agriculture</h1><p>Grade 10-12</p><div className="icons"><MdAgriculture /></div></div>
           
        </div>
    </div>
<div className="about-2">
    <div className="image-about">
    <img src={aboutImage} className="about-image" alt="logo"/>
    </div>
    <div className="tutoring">
        <h1 className="tutoring-1">Imagine a service where you can get expert tutoring anytime, anywhere. </h1>
        <p className="p-about">
            <ul class="custom-arrow-list">
                <li> <span className="mark-gold"><GiCheckMark /></span> EduApply specializes in Grades 10-12 but can accommodate other grades as needed.</li>
                <li> <span className="mark-gold"><GiCheckMark /></span> With a maximum of 10 students per group, we offer CAPS or IEB programmes.</li>           
                <li> <span className="mark-gold"><GiCheckMark /></span> Ask questions, get immediate help, and receive weekly progress reports for both learners and parents.</li>
                <li> <span className="mark-gold"><GiCheckMark /></span> Our top-notch tutors, who hold university qualifications, prioritize your education.</li>
                <li> <span className="mark-gold"><GiCheckMark /></span> EduApply works on all devices, ensuring the best learning experience for every student.</li>
                <div className="tutoring-button">  <button className="tutoring-btn">Learn More...</button></div>
              
            </ul>
        </p>
    
        <h1 className="tutoring-2">Imagine a service where you get comprehensive application assistance anytime, anywhere.</h1>       <p className="p-about">
            <ul class="custom-arrow-list">
            <li> <span className="mark-purple"><GiCheckMark /></span> EduApply specializes in helping you craft standout applications for college, jobs, and scholarships.</li>
            <li> <span className="mark-purple"><GiCheckMark /></span> Our experienced team provides personalized support, ensuring your applications reflect your true potential.</li>
            <li> <span className="mark-purple"><GiCheckMark /></span> With tailored guidance and expert advice, we prioritize your success.</li> 
            <li> <span className="mark-purple"><GiCheckMark /></span> EduApply is committed to making your application process smooth and effective, helping you achieve your academic and career goals.</li>
            <div className="applying-button">  <button className="applying-btn">Learn More...</button></div>
            </ul></p>
    </div>
</div>
        </div>
        <div className="services-page" id="services">
        <div className="container">
        <h1 className="sub-title" >Our Services </h1>
        <h1 className="tutoring-list">Our Tutoring Services</h1>
        <div className="services-list serv-list">
            <div>
                <span className="span-icon serv"><GiArchiveRegister /></span>
                <h2 >Registration Fee</h2>
                <p className="tut-p">Secure your spot with our exclusive one-time registration fee.</p>
                <p className="pp-tutor">R150.00</p>
            </div>
            <div>
                <span className="span-icon serv"><FaDiceOne /></span>
                <h2>1 Subject</h2>
                <p className="tut-p">Explore a single subject from our diverse tutoring range tailored to your success.</p>
                <p className="pp-tutor">R150.00</p>
            </div>
            <div>
                <span className="span-icon serv"><FaDiceThree /></span>
                <h2>3 Subject</h2>
                <p className="tut-p">Master three subjects from our tailored tutoring range for your academic success.</p>
                <p className="pp-tutor">R350.00</p>
            </div>
            <div>
                <span className="span-icon serv"><FaDiceFive /></span>
                <h2>5 Subject</h2>
                <p className="tut-p">Excel in five subjects with our personalized tutoring programs for your academic success.</p>
                <p className="pp-tutor">R650.00</p>
            </div>
            <button className="tutor">Book Your Slot</button>
        </div>
        </div>
        <div className="container">
        <h1 className="applying-list">Our application Services</h1>
        <div className="services-list app-list">
            <div>
                <span className="span-icon app"><LuPackageOpen /></span>
                <h2>Package 1</h2>
                <p className="app-p">Complete one tertiary application with our specialized service.</p>
                <p className="pp-apply">R25.00</p>
            </div>
            <div>
            <span className="span-icon app"><LuPackageOpen /></span>
                <h2>Package 2</h2>
                <p className="app-p">Submit up to Eight tertiary applications through our specialized service.</p>
                <p className="pp-apply">R170.00</p>
            </div>
            <div>
            <span className="span-icon app"><LuPackageOpen /></span>
                <h2>Package 3</h2>
                <p className="app-p">Effortlessly manage applications for Ten universities plus the NBT Test with our specialized service.</p>
                <p className="pp-apply">R250.00</p>
            </div>
            <div>
            <span className="span-icon app"><LuPackageOpen /></span>
                <h2>Package 4</h2>
                <p className="app-p">Efficiently handle applications for up to 10 universities and NSFAS with our specialized service.</p>
                <p className="pp-apply">R250.00</p>
            </div>
           <button className="apply">Book Your Slot</button>
        </div>
        </div>
        </div>
        <div className="reviews">
            <div>
                <h1>98% of students rave that EduApply is the ultimate solution for boosting academic results!</h1>
            <p>Over 1,000 students confirm that EduApply is the ultimate solution for boosting academic results.</p>
            </div>
            <div>

            <div className="rotate-review">
        <div class="train-review">
            <div className="icon-review "> <div className="profile-name"> <img src={bw1Image} className=" review-img d-none d-md-block d-lg-block d-xl-block" alt="logo"/> <h1>Buhle Damane</h1> </div></div>
            <div className="icon-review "> <div className="profile-name"> <img src={bw1Image} className=" review-img d-none d-md-block d-lg-block d-xl-block" alt="logo"/> <h1>Buhle Damane</h1> </div></div>
            <div className="icon-review "> <div className="profile-name"> <img src={bw1Image} className=" review-img d-none d-md-block d-lg-block d-xl-block" alt="logo"/> <h1>Buhle Damane</h1> </div></div>
            <div className="icon-review "> <div className="profile-name"> <img src={bw1Image} className=" review-img d-none d-md-block d-lg-block d-xl-block" alt="logo"/> <h1>Buhle Damane</h1> </div></div>
            <div className="icon-review "> <div className="profile-name"> <img src={bw1Image} className=" review-img d-none d-md-block d-lg-block d-xl-block" alt="logo"/> <h1>Buhle Damane</h1> </div></div>
            <div className="icon-review "> <div className="profile-name"> <img src={bw1Image} className=" review-img d-none d-md-block d-lg-block d-xl-block" alt="logo"/> <h1>Buhle Damane</h1> </div></div>
            <div className="icon-review "> <div className="profile-name"> <img src={bw1Image} className=" review-img d-none d-md-block d-lg-block d-xl-block" alt="logo"/> <h1>Buhle Damane</h1> </div></div>
            <div className="icon-review "> <div className="profile-name"> <img src={bw1Image} className=" review-img d-none d-md-block d-lg-block d-xl-block" alt="logo"/> <h1>Buhle Damane</h1> </div></div>
            <div className="icon-review "> <div className="profile-name"> <img src={bw1Image} className=" review-img d-none d-md-block d-lg-block d-xl-block" alt="logo"/> <h1>Buhle Damane</h1> </div></div>
           
        </div>
    </div>
            </div>
        </div>
  
        </div>
   
 
  
    );
};
