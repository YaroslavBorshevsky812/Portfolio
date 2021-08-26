import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper/core';
import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css"
import { motion } from 'framer-motion'

import cssPic from '../../images/technologies/css.svg'
import htmlPic from '../../images/technologies/html.svg'
import jsPic from '../../images/technologies/js.svg'
import reactPic from '../../images/technologies/react.svg'
import reduxPic from '../../images/technologies/redux.svg'
import sassPic from '../../images/technologies/sass.svg'
import gitPic from '../../images/technologies/git.svg'
import figmaPic from '../../images/technologies/figma.svg'
import javaPic from '../../images/technologies/java.svg'
import phPic from '../../images/technologies/ph.svg'
import engPic from '../../images/technologies/eng.png'


SwiperCore.use([Pagination]);

function MainPage() {
    return (
        <motion.div 
                exit={{opacity:0}}
                animate={{opacity:1}}
                initial={{opacity:0}}
        >
            <div className='content'>
                <div className='content_title'>
                    <h4 className='content_title_text'>Портфолио</h4>
                    <h4 className='content_title_text'>Junior Frontend Developer</h4>
                </div>

                <div className='content_works'>
                    <Swiper slidesPerView={'auto'} spaceBetween={30} pagination={{"clickable": true}} className="mySwiper">
                        
                        <SwiperSlide className='slide slide--arithmetic' style={{width: '70%'}}>
                            <a href='https://yaroslavborshevsky812.github.io/Arithmetic-Animate/' className='swiperLink'>
                                <div className='slide_title'>
                                    <span>Arithmetic Animate</span>
                                </div>
                                <div className='slide_info'>
                                    <span>Тренажер устного счета</span>
                                </div>
                            </a>
                        </SwiperSlide>
                        
                        <SwiperSlide className='slide slide--auth' style={{width: '70%'}}>
                            <a href='https://yaroslavborshevsky812.github.io/Auth_Random_User/' className='swiperLink'></a>
                        </SwiperSlide>
                        
                        <SwiperSlide className='slide slide--simple' style={{width: '70%'}}>
                            <a href='https://yaroslavborshevsky812.github.io/Html_Css_Prosto/' className='swiperLink'></a>
                        </SwiperSlide>

                        <SwiperSlide className='slide slide--jsonData' style={{width: '70%'}}>
                            <a href='https://yaroslavborshevsky812.github.io/Test_Json/' className='swiperLink'></a>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className='content_technologies'>
                    <div className='content_technologies_title'>
                        <h4 className='content_technologies_title_text'>Навыки</h4>
                    </div>
                    <div className='content_technologies_inner'>
                        
                        <div className='content_technologies_inner_item'>
                            <img className='content_technologies_inner_item_pic' src={htmlPic} alt='htmlPic'></img>
                        </div>
                        <div className='content_technologies_inner_item'>
                            <img className='content_technologies_inner_item_pic' src={cssPic} alt='cssPic'></img>
                        </div>
                        <div className='content_technologies_inner_item'>
                            <img className='content_technologies_inner_item_pic' src={jsPic} alt='jsPic'></img>
                        </div>
                        <div className='content_technologies_inner_item'>
                            <img className='content_technologies_inner_item_pic' src={reactPic} alt='reactPic'></img>
                        </div>
                        <div className='content_technologies_inner_item'>
                            <img className='content_technologies_inner_item_pic' src={reduxPic} alt='reduxPic'></img>
                        </div>
                        <div className='content_technologies_inner_item'>
                            <img className='content_technologies_inner_item_pic' src={gitPic} alt='gitPic'></img>
                        </div>
                        <div className='content_technologies_inner_item'>
                            <img className='content_technologies_inner_item_pic' src={sassPic} alt='sassPic'></img>
                        </div>
                        <div className='content_technologies_inner_item'>
                            <img className='content_technologies_inner_item_pic' src={javaPic} alt='javaPic'></img>
                        </div>
                        <div className='content_technologies_inner_item'>
                            <img className='content_technologies_inner_item_pic' src={phPic} alt='phPic'></img>
                        </div>
                        <div className='content_technologies_inner_item'>
                            <img className='content_technologies_inner_item_pic' src={figmaPic} alt='figmaPic'></img>
                        </div>
                        <div className='content_technologies_inner_item'>
                            <img className='content_technologies_inner_item_pic' src={engPic} alt='engPic'></img>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
        
    )
}

export default MainPage