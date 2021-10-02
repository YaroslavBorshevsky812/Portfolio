import React, { useState } from 'react'
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
    
    const [burger, setBurger] = useState(false)
    const [darkTheme, setDartTheme] = useState(false)
    const [modalWindow, setModalWindow] = useState(false)
    const mainInnerClasses = ['mainPage_inner']
    const mainPageClasses = ['mainPage']
    const modalWindowClasses = ['modal']
    if(burger) {
        mainInnerClasses.push(['active'])
    }

    if(darkTheme) {
        mainPageClasses.push(['dark'])
    }

    if(modalWindow) {
        modalWindowClasses.push(['active'])
    }

    return (
    <div className={mainPageClasses.join(' ')}>
        <div className={mainInnerClasses.join(' ')}>

            <nav className='navigation'>
                <div className='navigation_exit'>
                    <i onClick={() => setBurger(!burger)} className='navigation_exit-item'></i>
                </div>
                
                <ul>
                    <li>
                        <Link onClick={() => setBurger(!burger)} className='link' to='/Portfolio'>Главная</Link>
                    </li>
                    {/* <li>
                        <Link className='link' to='/education'>Образование</Link>
                    </li> */}
                    <li>
                        <Link onClick={() => setBurger(!burger)} className='link' to='/experience'>Опыт работы</Link>
                    </li>
                    <li>
                        <Link onClick={() => setBurger(!burger)} className='link' to='/about'>О себе</Link>
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
                    <div className="profile_header">
                        <button onClick={() => setBurger(!burger)} className={'burger'}>
                            <span className="burger_line"></span>
                            <span className="burger_line"></span>
                            <span className="burger_line"></span>
                        </button>
                        <div className="container">
                            <input onClick={() => setDartTheme(!darkTheme)} type="checkbox" id="toggle-button" className="toggle-button"/>
                        </div>
                    </div>
                <div onClick={() => setModalWindow(!modalWindow)} className='profile_inner'>
                    <div className='profile_image'>
                        <img className='profile_image_pic' src={photo} alt='photoPic'></img>
                    </div>
                    <div className="profile_info">
                        <h3 className='profile_name'>Борщевский Ярослав</h3>
                        <h4 className='profile_age'>24 года</h4>
                        <h4 className='profile_city'>г. Москва</h4>
                    </div>
                    
                </div>
                <div className="container-toggleBtn">
                    <input onClick={() => setDartTheme(!darkTheme)} type="checkbox" id="toggle-button" className="toggle-button"/>
                </div>
            </div>
            
        </div>
        <div className={modalWindowClasses.join(' ')}>
            <div className='modal-content'>
                <div className='modal-content-image'>
                    <img className='modal-content-image-pic' src={photo} alt='photoPic'></img>
                </div>
                <div className="modal-content-info">
                    <div className="modal-header">
                        <div className='modal-header-exit'>
                            <i onClick={() => setModalWindow(!modalWindow)} className='modal-header-exit-item'></i>
                        </div>
                    </div>
                    <h3 className='profile_name'>Борщевский Ярослав</h3>
                    <h4 className='profile_age'>24 года</h4>
                    <h4 className='profile_city'>г. Москва</h4>
                </div>
            </div>
        </div>
    </div>
    )
}


export default App
