import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import photo from './images/222.jpg'
import git from './images/git1.svg'

import MainPage from './components/mainPage/MainPage'
import About from './components/about/About'
import Experience from './components/experience/Experience'
// import Education from './components/education/Education'


 
function App() {
    return (
    <div className='mainPage'>
        <div className='mainPage_inner'>

            <nav className='navigation'>
                <ul>
                    <li>
                        <Link className='link' to='/Portfolio'>Главная</Link>
                    </li>
                    {/* <li>
                        <Link className='link' to='/education'>Образование</Link>
                    </li> */}
                    <li>
                        <Link className='link' to='/experience'>Опыт работы</Link>
                    </li>
                    <li>
                        <Link className='link' to='/about'>О себе</Link>
                    </li>
                </ul>
                <div className='navigation_icon'>
                    <a href='https://github.com/YaroslavBorshevsky812'>
                        <img className='navigation_icon_git' src={git} alt='gitPic'></img>
                    </a>
                        
                </div>
            </nav>
            
            <AnimatePresence>
                <Switch>
                    <Route path='/Portfolio' exact>
                        <MainPage/>
                    </Route>
                    <Route path='/about' exact>
                        <About/>
                    </Route>
                    <Route path='/experience' exact>
                        <Experience/>
                    </Route>
                    {/* <Route path='/education' exact>
                        <Education/>
                    </Route> */}
                </Switch>
            </AnimatePresence>
            
            

            <div className='profile'>
                <div className='profile_inner'>
                    <div className='profile_image' style={{height: '100px', width: '100px'}}>
                        <img className='profile_image_pic' src={photo} alt='photoPic'></img>
                    </div>
                    <h3 className='profile_name'>Борщевский</h3>
                    <h3 className='profile_name'>Ярослав</h3>
                    <h4 className='profile_age'>24 года</h4>
                    <h4 className='profile_city'>г. Москва</h4>
                </div>
            </div>

        </div>
    </div>
    )
}


export default App
