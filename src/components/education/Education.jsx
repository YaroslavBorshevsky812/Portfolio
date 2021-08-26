import { motion } from 'framer-motion'

function Education() {
    return (
        <motion.div 
        exit={{opacity:0}}
        animate={{opacity:1}}
        initial={{opacity:0}}
        className='content'
        >
            <div className='content_title'>
                    <h4 className='content_title_text'>Образование</h4>
            </div>
        </motion.div>
        
    )
}

export default Education