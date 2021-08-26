import { motion } from 'framer-motion'
import artM from '../../images/exp/art.png'
import fiveLb from '../../images/exp/5lb.png'
import w1 from '../../images/exp/1.jpg'
import w2 from '../../images/exp/2.jpg'
import w3 from '../../images/exp/3.jpg'

function Experience() {
    return (
        <motion.div 
        exit={{opacity:0}}
        animate={{opacity:1}}
        initial={{opacity:0}}
        className='content'
        >
            <div className='content_title'>
                    <h4 className='content_title_text'>Опыт работы</h4>
            </div>
            <div className='experience'>
                <div className='work'>
                    <div className='work-title'>
                        <a href='https://art-mpress.ru/'>
                            <img className='work-title-logo' src={artM} alt="art-M"/>  
                        </a>
                        <div className='work-title-text'>
                            <h4>"Art-M" (изготовление рекламных вывесок)</h4>
                            <h4>Aвгуст 2017 - июль 2019</h4>
                            <h4> - Макетчик</h4>
                        </div>
                    </div>

                    <div className='work-content'>
                        <ul>
                            <li> работа с цветной печатной продукцией, накатка пленки на поверхность.</li>
                            <li> работа с электрикой, коммутация светодиодов, установка светодиодных лент.</li>
                            <li> изготовление фреймлайтов и кристалайтов всех форматов.</li>
                            <li> обучение стажеров.</li>
                        </ul>
                        <div className='work-content-images'>
                            <div className='work-content-images-wrapper'>
                                <img className='work-content-images-item' src={w2} alt="art-M"/>  
                                <img className='work-content-images-item' src={w1} alt="art-M"/>  
                                <img className='work-content-images-item' src={w3} alt="art-M"/> 
                            </div>
                             
                        </div>
                    </div>
                </div>
            </div>

            <div className='experience'>
                <div className='work'>
                    <div className='work-title'>
                        <a href='https://www.5lb.ru/'>
                            <img className='work-title-logo work-title-logo--fiveLb' src={fiveLb} alt="5lb"/>  
                        </a>
                        <div className='work-title-text'>
                            <h4>5lb (сеть магазинов спортивного питания)</h4>
                            <h4>Сентябрь 2019 — по настоящее время</h4>
                            <h4> - Продавец</h4>
                        </div>
                    </div>

                    <div className='work-content'>
                        <ul>
                            <li> администрирование магазина.</li>
                            <li> оформление документов.</li>
                            <li> продажи.</li>
                            <li> обучение стажеров.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
        
    )
}

export default Experience