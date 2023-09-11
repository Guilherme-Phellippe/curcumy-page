import { useEffect, useRef } from "react"
import OptimizedImg from "../utils/OptimizedImg"

const Whatsapp = () => {
    const refTextImg = useRef();

    useEffect(()=>{
        const interval = setInterval(() => {
            refTextImg.current.classList.toggle("opacity-0")
            refTextImg.current.classList.toggle("opacity-100")
            refTextImg.current.classList.toggle("-translate-x-full")
        }, 8000);

        return ()=> clearInterval(interval)
    },[])

    const handleClickWhatsapp = ()=>[
        window.open("https://api.whatsapp.com/send?phone=5535991368790&text=Ol%C3%A1%20poderia%20me%20ajudar%20a%20comprar%20o%20curcumy...")
    ]

    return (
        <div 
            className="w-[100px] md:w-[120px] flex justify-center fixed bottom-0 md:bottom-2 right-0 md:right-4"
            onClick={handleClickWhatsapp}
        >
            <OptimizedImg
                imgs="https://i.ibb.co/rxdnY3Z/vecteezy-whatsapp-logo-png-whatsapp-icon-png-whatsapp-transparent-18930748-651-1.png" 
                alt="imagem do whatsapp"
            />

            <h2 
                ref={refTextImg}
                className="w-[200px] absolute top-1/2 opacity-100 shadow-md border-[1px] border-[#0002] -translate-x-full -translate-y-1/2 p-2 left-0 bg-white rounded-xl transition-transform duration-500"
            >Olá, como posso te ajudar?</h2>
        </div>
    )
}

export default Whatsapp