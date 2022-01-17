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
                        Программирование изучаю с марта 2020 года. Начинал с Java и ООП. По Java проходил курсы job4j, где освоил:
                    </p>
                    <ul>
                        <li>Структуры данных и простейшие алгоритмы</li>
                        <li>Базовые понятия о сложности алгоритмов</li>
                        <li>Collections (arrays, linked and sorted lists, map)</li>
                        <li>Stream и Lambda выражения</li>
                    </ul>
                    <p>
                        На курсе пользовался сборкой MAVEN, тестированием через JUnit, взаимодействием с Travis CI.
                    </p>
                    <span>* * *</span>
                    <p>С января 2021 ушёл во frontend, захотелось работы с визуальной частью.</p>
                    <ul>
                        <li>HTML5 + CSS3</li>
                        <li>Адаптивная верстка</li>
                        <li>Слайдеры, липкие шапки, бургер меню</li>
                        <li>При создании анимации использовал только js</li>
                        <li>Макеты - Photoshop и Figma</li>
                        <li>Сборщик Gulp</li>
                    </ul>
                    <p>
                        Всё осваивал самостоятельно пользуясь документацией и сторонними ресурсами: Google, YouTube, Habr.
                    </p>
                    <p>
                        Для расширения навыков Js, выбрал React в связке с Redux. Писал:
                    </p>
                    <ul>
                        <li>todo листы</li>
                        <li>таблицы с сортировкой, поиском и пагинацией.</li>
                        <li>тренажеры для устного счёта, калькуляторы.</li>
                    </ul>
                    <span>Приложения писал с применением технологий:</span>
                    <ul>
                        <li>React hooks</li>
                        <li>ECMA6 classes</li>
                        <li>Aнимация с использованием сторонних библиотек</li>
                        <li>Animate Presence и Vanta js</li>
                        <li>React Router</li>
                    </ul>
                    <p>
                        Также знаком с express js и основой работы с базами данных такими как MongoDB, 
                        PostgreSql, MySql. Писал простейшие backend проекты с запросами на сервер и обработкой ответов, работал с Postman.
                    </p>
                    <span>* * *</span>
                    <p>До решение перейти в IT занимался продажами спортивного питания и производством рекламных вывесок.</p>
                    <ul>
                        <li>5lb <a href='https://www.5lb.ru/'>https://www.5lb.ru/</a></li>
                        <li>ArtM <a href="https://art-mpress.ru">https://art-mpress.ru/</a></li>
                    </ul>
                    <p>Высокие коммуникативные способности, самообучаемость, самостоятельность и целеустремлённость.</p>
                </div>
                
            </div>
        </motion.div>
    )
}

export default About