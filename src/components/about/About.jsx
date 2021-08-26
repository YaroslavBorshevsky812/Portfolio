import { motion } from 'framer-motion'

function About() {
    return (
        <motion.div 
        exit={{opacity:0}}
        animate={{opacity:1}}
        initial={{opacity:0}}
        className='content'
        >
            <div className='content_title'>
                    <h4 className='content_title_text'>О себе</h4>
            </div>
            <div className='about'>
                <div className='about_inner'>
                    <p>
                        В начале 2020 года начал изучать Java. 
                        На курсах писал модель трекера в ООП стиле, 
                        работал с инструментом сборки Maven, с тестированием через JUnit и 
                        взаимодействием с GitHub и Travic CI.
                    </p>
                    <span>По Java знаю:</span>
                    <ul>
                        <li>Структуры данных и простейшие алгоритмы</li>
                        <li>Базовые понятия о сложности алгоритмов</li>
                        <li>Collections (arrays, linked and sorted lists, map)</li>
                        <li>Stream и Lambda выражения</li>
                    </ul>
                    <p>
                        После второго блока Java почувствовал недостаток в визуальной части программирования, 
                        решил попробовать себя в верстке.
                    </p>
                    <span>По верстке работал:</span>
                    <ul>
                        <li>HTML5 + CSS3</li>
                        <li>Адаптивная верстка</li>
                        <li>Слайдеры, липкие шапки, бургер меню</li>
                        <li>При создании анимации использовал только js</li>
                        <li>Макеты - Photoshop и Figma</li>
                        <li>Сборщик Gulp</li>
                    </ul>
                    <p>
                        На GitHub можно посмотреть пэт проекты: 
                        сделал генератор случайных примером для тренировки устного счета на чистом js, 
                        затем переписал его на react.
                    </p>
                    <p>
                        На React+Redux сделал многостраничное уже расширенное (через react router) 
                        приложение для тренировки устного счета с возможностью масштабирования до 
                        приложения с регистрацией и привязке к базе данных.
                    </p>
                    <span>Приложение писал с применением технологий:</span>
                    <ul>
                        <li>React hooks</li>
                        <li>ECMA6 classes</li>
                        <li>Aнимация с использованием сторонних библиотек</li>
                        <li>Animate Presence и Vanta js</li>
                        <li>React Router</li>
                    </ul>
                </div>
                
            </div>
        </motion.div>
    )
}

export default About