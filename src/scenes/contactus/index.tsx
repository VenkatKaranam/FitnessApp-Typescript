import {useForm} from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";


type Props = {
    setSelectedPage : (value:SelectedPage) => void;
}

const index = ({setSelectedPage}: Props) => {
    const inputStyles = "w-full my-1 rounded-lg bg-primary-300 px-5 py-3 placeholder-white";
    const {register, trigger, formState:{errors}} = useForm();
    const onSubmit = async (e: any) =>{
        const isValid = await trigger();
        if (!isValid){
            e.preventDefault();
        }

    }
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32 ">
        <motion.div 
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        >
            <motion.div
            className="md:w-3/5"
             initial = 'hidden'
             whileInView="visible"
             viewport={{once: true, amount: 0.5}}
             transition={{duration: 0.5}}
             variants={{
                 hidden : {opacity : 0, x: -50},
                 visible : {opacity : 1, x: 0},
             }}
            
            >
               <HText>Join Now <span className="text-primary-500"> To Get Shape</span></HText> 

               <p className="my-5">Build and Deploy a Complete Typescript Fitness Application tutorial. For frontend, we will be using React, Typescript, 
                        Vite, Tailwind, Hero</p>
            </motion.div>

            <div className="mb-5 justify-between gap-8 md:flex">
                <motion.div
                className="mt-10 basis-3/5 md:mt-0"
                initial = 'hidden'
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                    hidden : {opacity : 0, y: 50},
                    visible : {opacity : 1, y: 0},
                }}
                >
                    <form target="_blank" onSubmit={onSubmit} method="POST">
                        <input className={inputStyles} type="text" placeholder="Name"
                        {...register("name",{
                            required:true,
                            maxLength:100,
                        })}
                        />
                        {errors.name && (
                            <p className="mt-1 text-primary-500">
                                {errors.name.type === "required" && "This field is required"}
                                {errors.name.type === "maxLenght" && "Should be less than 100 chr"}
                            </p>
                        )}

                          <input
                                className={inputStyles}
                                type="text"
                                placeholder="EMAIL"
                                {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && (
                                <p className="mt-1 text-primary-500">
                                {errors.email.type === "required" &&
                                    "This field is required."}
                                {errors.email.type === "pattern" && "Invalid email address."}
                                </p>
                            )}

                            <textarea
                                className={inputStyles}
                                placeholder="MESSAGE"
                                rows={4}
                                cols={50}
                                {...register("message", {
                                required: true,
                                maxLength: 2000,
                                })}
                            />
                            {errors.message && (
                                <p className="mt-1 text-primary-500">
                                {errors.message.type === "required" &&
                                    "This field is required."}
                                {errors.message.type === "maxLength" &&
                                    "Max length is 2000 char."}
                                </p>
                            )}
                            <button type="submit"
                            className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">Join Now</button>

                    </form>
                    </motion.div>
                    <motion.div
                      className="relative mt-16 basis-2/5 md:mt-0"
                      initial = 'hidden'
                      whileInView="visible"
                      viewport={{once: true, amount: 0.5}}
                      transition={{duration: 0.5}}
                      variants={{
                          hidden : {opacity : 0, x: -50},
                          visible : {opacity : 1, x: 0},
                      }}
                    >
                        <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                            <img className="w-full" alt="contactus" src={ContactUsPageGraphic}/>
                        </div>
                    </motion.div>
            </div>
         </motion.div>       
     </section>
  )
}

export default index