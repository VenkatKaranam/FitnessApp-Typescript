import AnchorLink from 'react-anchor-link-smooth-scroll';
import {SelectedPage } from './types'
import {motion} from 'framer-motion'
type Props = {
    icon: JSX.Element,
    title: string,
    description: string
    setSelectedPage : (value: SelectedPage) => void;
}
 const childVariant = {
    hidden: {opacity: 0, scale: 0.9},
    visible: {opacity:1, scale: 1}
 }

const Benefit = (props: Props) => {
  return (
    <motion.div className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center'
    variants={childVariant}>
        <div className='mb-4 flex justify-center'>
            <div className='rounded-full border-2 border-gray-100 bg-primary-100 p-4'>
                {props.icon}
            </div>
        </div>

        <div className='font-bold'> {props.title}</div>
        <p className='my-3'>{props.description}</p>
        <AnchorLink 
         className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
         onClick={()=> props.setSelectedPage(SelectedPage.ContactUs)}
         href={`#${SelectedPage.ContactUs}`}>Learn More</AnchorLink>
    </motion.div>
  )
}

export default Benefit