import Logo from "@/assets/Logo.png"

type Props = {}

const index = (props: Props) => {
  return (
    <footer className="w-full bg-primary-100 py-10" >
        <div className=" mx-auto w-5/6 justify-between md:flex">
            <div className="mt-16 basis-1/3">
              <img alt="logo" src={Logo}/>
            <p className="my-5">Build and Deploy a Complete Typescript Fitness Application tutorial. For frontend, we will be using React, Typescript, 
                        Vite, Tailwind, Hero</p>
            <p className="">copy rights reserved</p>  
            </div>
            <div className="mt-16 basis-1/4 flex flex-col gap-3">
                <h1 className="font-bold">Links</h1>
                <p>Link to Home</p>
                <p>Link to Home</p>
                <p>Link to Home</p>
            </div>
            <div className="mt-16 basis-1/4 flex flex-col gap-3">
            <h1 className="font-bold">Contact Us</h1>
                <p>Build and Deploy a Complete Typescript Fitness Application</p>
            </div>    
        </div>
    </footer>
  )
}

export default index