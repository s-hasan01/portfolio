import { RiReactjsLine} from "react-icons/ri";
import {FaAngular, FaPython} from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiPostgresql, SiMongodb } from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import {TbBrandKotlin} from "react-icons/tb";
import { motion} from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
})

const Technologies = () => {
    return (
        <div className='border-b border-neutral-900'>
            <motion.h2
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 1.5}}
                className='my-20 text-center text-4xl'>Technologies</motion.h2>
            <motion.div
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1.8}}
                className='flex flex-wrap items-center justify-center gap-4 py-6'>
                <motion.div
                    variants={iconVariants(2.4)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-900 p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400'/>
                </motion.div>
                <motion.div
                    variants={iconVariants(3.3)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-900 p-4'>
                    < FaPython className='text-7xl text-cyan-400'/>
                </motion.div>
                <motion.div
                    variants={iconVariants(4.1)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-900 p-4'>
                    < FaNodeJs className='text-7xl text-cyan-400'/>
                </motion.div>
                <motion.div
                    variants={iconVariants(2.7)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-900 p-4'>
                    < FaJava className='text-7xl text-cyan-400'/>
                </motion.div>
            </motion.div>
            <motion.div
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 1.8}}
                className='flex flex-wrap items-center justify-center gap-4 pb-20'>
                <motion.div
                    variants={iconVariants(3.1)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-900 p-4'>
                    < AiOutlineDotNet className='text-7xl text-cyan-400'/>
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-900 p-4'>
                    < SiMongodb className='text-7xl text-cyan-400'/>
                </motion.div>
                <motion.div
                    variants={iconVariants(2.9)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-900 p-4'>
                    < FaAngular className='text-7xl text-cyan-400'/>
                </motion.div>
                <motion.div
                    variants={iconVariants(2.4)}
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-900 p-4'>
                    < SiPostgresql className='text-7xl text-cyan-400'/>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies