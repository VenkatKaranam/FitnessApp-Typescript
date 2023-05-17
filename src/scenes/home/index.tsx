import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"
import { SelectedPage } from "@/shared/types"
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponseredRedBull from "@/assets/SponsorRedBull.png";
import SponseredForbes from "@/assets/SponsorForbes.png";
import SponseredFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreen = useMediaQuery("(min-width:1063px)")


  return (
    <section
    id = "home"
    className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
        <motion.div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
            <div className="z-10 mt-32 md:basis-3/5 ">
                <motion.div 
                className="md:mt-20"
                initial = 'hidden'
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden : {opacity : 0, x: -50},
                    visible : {opacity : 1, x: 0},
                }}
                >
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                            <img alt="home-page-test" src={HomePageText}/>
                        </div>
                    </div>
                    <p className="mt-8 text-sm md:text-start">
                    Build and Deploy a Complete Typescript Fitness Application tutorial. For frontend, we will be using React.
                    </p>
                </motion.div>
                
                <motion.div 
                className="relative my-8 flex items-center gap-8"
                initial = 'hidden'
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay:0.2 ,duration: 0.5}}
                variants={{
                    hidden : {opacity : 0, x: -50},
                    visible : {opacity : 1, x: 0},
                }}>
                    <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                        <AnchorLink
                        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                        onClick={()=> setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}
                        > Learn More
                        </AnchorLink>
                </motion.div>          
            </div>
                <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                    <img alt="home-page-graphic" src={HomePageGraphic} />
                </div>
        </motion.div>

        {isAboveMediumScreen && (
            <div className="h-[150px] bg-primary-100 py-8" >
                <div className="mx-auto w-5/6">
                    <div className="flex w-3/5 items-center justify-between">
                        <img src={SponseredRedBull} alt="redbull" />
                        <img src={SponseredFortune} alt="fortuner" />
                        <img src={SponseredForbes} alt="Forbes" />
                    </div>
                </div>
            </div>
        )}

    </section>
  )
}

export default Home