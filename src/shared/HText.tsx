

type Props = {
    children : React.ReactNode;
}

const HText = ({children}: Props) => {
  return (
    <div>
        <h1 className="w-3/5 front-montserrat text-3xl font-bold ">{children}</h1>
    </div>
  )
}

export default HText