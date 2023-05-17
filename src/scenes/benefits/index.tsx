import ActionButton from "@/shared/ActionButton";
import Benefit from "@/shared/Benefit";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon} from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const index = ({setSelectedPage}: Props) => {
    const benefits: Array<BenefitType> = [
        {
            icon : <HomeModernIcon className="h-6 w-6"/>,
            title : "State of the  Art Facilited",
            description: "Build and Deploy a Complete Typescript Fitness Application tutorial"
        },
        {
            icon : <UserGroupIcon className="h-6 w-6"/>,
            title : "100's Deserve Class",
            description: "Build and Deploy a Complete Typescript Fitness Application tutorial"
        },
        {
            icon : <AcademicCapIcon className="h-6 w-6"/>,
            title : "Expert and Pro Trainers",
            description: "Build and Deploy a Complete Typescript Fitness Application tutorial"
        }
    ]
    const container = {
        hidden : {},
        visible : {
            transition : {staggerChildren : 0.2}
        }
    }
  return (
    <section
    id="benefits" 
    className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
        className=""
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        
            <motion.div className="md:my-5 md:w-3/5"
            initial = 'hidden'
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{delay:0.2 ,duration: 0.5}}
            variants={{
                hidden : {opacity : 0, x: -50},
                visible : {opacity : 1, x: 0},
            }}
            >
                <HText>Welcome to Website</HText>
                <p className=" my-5 text-sm">Build and Deploy a Complete Typescript Fitness Application tutorial </p>
            </motion.div>

            <motion.div className="md:flex items-center justify-between gap-8 mt-5 "
            initial = 'hidden'
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            variants= {container}
            >
                {benefits.map((benefit: BenefitType) =>(
                    <Benefit 
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                <img className="mx-auto"
                alt="graphic" src={BenefitsPageGraphic}/>
                <div>
                    <motion.div className="relative"
                         initial = 'hidden'
                         whileInView="visible"
                         viewport={{once: true, amount: 0.5}}
                         transition={{duration: 0.5}}
                         variants={{
                             hidden : {opacity : 0, x: 50},
                             visible : {opacity : 1, x: 0},
                         }}
                         >
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                            <div>
                                <HText>MILLIONS OF PEOPLE ARE JOINING {" "}
                                    <span className="text-primary-500">NOW</span>
                                </HText>
                            </div>

                        </div>
                    </motion.div>
                    <motion.div
                         initial = 'hidden'
                         whileInView="visible"
                         viewport={{once: true, amount: 0.5}}
                         transition={{delay:0.2 ,duration: 0.5}}
                         variants={{
                             hidden : {opacity : 0, x: 50},
                             visible : {opacity : 1, x: 0},
                         }}>
                        <p className="my-5">
                        Build and Deploy a Complete Typescript Fitness Application tutorial. For frontend, we will be using React, Typescript, 
                        Vite, Tailwind, Hero Icons, Framer Motion, Form Submit, React Anchor Link Smooth Scroll. We will also be using Cloudflare Pages for deploying our app.</p>
                        <p className="mb-5">  
                        Build and Deploy a Complete Typescript Fitness Application tutorial. For frontend, we will be using React, Typescript, Vite, Tailwind, Hero Icons, Framer Motion,
                         Form Submit, React Anchor Link Smooth Scroll. We will also be using Cloudflare Pages for deploying our app.
                        </p>
                    </motion.div>
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                        <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                        </div>
                    </div>
                </div>
            </div>

        </motion.div>
    </section>
  )
}

export default index