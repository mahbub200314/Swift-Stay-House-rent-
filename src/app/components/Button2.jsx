

const Button2 = ({children}) => {
  return (

<button
  className="relative py-5 px-12 text-white text-[1.2vw] font-[500] nded-full overflow-hidden bg-white/30 rounded-full transition-all
   duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 
   before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#10072d] before:to-[#1c0c51] before:transition-all
    before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0 border-2 border-[#9810fa] cursor-pointer"
>
  {children}
</button>

  )
}

export default Button2