import HText from '@/shared/HText'
import Class from '@/shared/Class'
import { SelectedPage, ClassType } from '@/shared/types'
import { motion } from 'framer-motion'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'

type Props = {
    setSelectedPage : (value: SelectedPage) =>void;
}

const index = ({setSelectedPage}: Props) => {
    const classes:Array <ClassType> = [
        {
            title: "Classes for Training",
            description: "Build and Deploy a Complete Typescript Fitness Application tutorial Fitness Application tutorial ",
            image: image1
        },
        {
            title: "Classes for Training",
            description: "Build and Deploy a Complete Typescript Fitness Application tutorial Fitness Application tutorial ",
            image: image2
        },
        {
            title: "Classes for Training",
            description: "Build and Deploy a Complete Typescript Fitness Application tutorial Fitness Application tutorial ",
            image: image3
        },
        {
            title: "Classes for Training",
            description: "Build and Deploy a Complete Typescript Fitness Application tutorial Fitness Application tutorial ",
            image: image4
        },
        {
            title: "Classes for Training",
            description: "Build and Deploy a Complete Typescript Fitness Application tutorial Fitness Application tutorial ",
            image: image5
        },
        {
            title: "Classes for Training",
            description: "Build and Deploy a Complete Typescript Fitness Application tutorial Fitness Application tutorial ",
            image: image6
        },
        {
            title: "Classes for Training",
            description: "Build and Deploy a Complete Typescript Fitness Application tutorial Fitness Application tutorial ",
            image: image1
        }
    ]


  return (
    <section id="ourclasses" className='w-full bg-primary-300 py-10'>
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses) }
        >
            <motion.div  className='mx-auto w-5/6'
               initial = 'hidden'
               whileInView="visible"
               viewport={{once: true, amount: 0.5}}
               transition={{duration: 0.5}}
               variants={{
                   hidden : {opacity : 0, x: -50},
                   visible : {opacity : 1, x: 0},
               }}>
                 <div className='md:w-3/5 pt-32 '>
              <HText>Our Classess</HText>  
              <p className='py-5'>Build and Deploy a Complete Typescript Fitness Application tutorial. </p>
            </div>
            </motion.div>
            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden no-scrollbar'>
                <ul className='w-[2800px] whitespace-nowrap'>
                    {classes.map((item: ClassType,index) => (
                            <Class
                            key={`${item.title}-${index}`}
                            title = {item.title} 
                            description = {item.description}
                            image={item.image}
                            />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default index