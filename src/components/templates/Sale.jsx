import { CreditCard, Key, Lock, ShieldCheck, ThumbsUp, Truck } from "@phosphor-icons/react"
import OptimizedImg from "../utils/OptimizedImg"

const Sale = () => {

    const products = [
        {
            id: 0,
            img: "https://curcumy.net.br/wp-content/uploads/2023/04/12-462x1024.png",
            link: "https://ev.braip.com/campanhas/cpa/camd2m298",
        },
        {
            id: 1,
            img: "https://curcumy.net.br/wp-content/uploads/2023/04/5-464x1024.png",
            link: "https://ev.braip.com/campanhas/cpa/camzovodx",
        },
        {
            id: 2,
            img: "https://curcumy.net.br/wp-content/uploads/2023/04/3-min-465x1024.png",
            link: "https://ev.braip.com/campanhas/cpa/cam2kjkd1",
        },
        {
            id: 3,
            img: "https://curcumy.net.br/wp-content/uploads/2023/04/1-min-462x1024.png",
            link: "https://ev.braip.com/campanhas/cpa/camokmkod",
        },
    ]


    return (
        <div id="container-sales" className="flex flex-col py-16 items-center bg-gradient-to-tl from-[#592400] to-[#271200]">
            <h2 className="text-white text-center text-3xl lg:text-4xl p-4 font-bold">ESCOLHA A MELHOR OFERTA PARA VOCÊ</h2>
            <h3 className="text-[#d7a224] text-2xl p-4 text-center sm:text-left">FRASCO EXTRA + FRETE GRÁTIS SOMENTE HOJE!</h3>
            <div className="w-4/5 mx-auto flex flex-col md:flex-row items-center gap-4 my-16">
                {
                    products.map((product, index) =>
                        <div key={product.id} className={`${index === 0 && "animate-grow-up"} w-4/5 sm:w-1/2 cursor-pointer`}>
                            <a href={product.link}>
                                <OptimizedImg
                                    imgs={product.img}
                                    alt="imagem do produto"
                                />
                            </a>
                        </div>
                    )
                }
            </div>
            <div className="w-4/5 lg:w-3/4 xl:w-1/2 flex flex-wrap text-white gap-4 sm:gap-8 ">
                <div className="w-[45%] lg:w-[30%] flex flex-col gap-4 justify-center items-center">
                    <ShieldCheck className="text-2xl sm:text-4xl" />
                    <span className="text-center text-xs sm:text-md">COMPRA SEGURA</span>
                </div>
                <div className="w-[45%] lg:w-[30%] flex flex-col gap-4 justify-center items-center">
                    <ThumbsUp className="text-2xl sm:text-4xl" />
                    <span className="text-center text-xs sm:text-md">SATISFAÇÃO GARANTIDA</span>
                </div>
                <div className="w-[45%] lg:w-[30%] flex flex-col gap-4 justify-center items-center">
                    <Lock className="text-2xl sm:text-4xl" />
                    <span className="text-center text-xs sm:text-md">PRIVACIDADE PROTEGIDA</span>
                </div>
                <div className="w-[45%] lg:w-[30%] flex flex-col gap-4 justify-center items-center">
                    <CreditCard className="text-2xl sm:text-4xl" />
                    <span className="text-center text-xs sm:text-md">PAGUE NO CARTÃO EM ATÉ 12 VEZES</span>
                </div>
                <div className="w-[45%] lg:w-[30%] flex flex-col gap-4 justify-center items-center">
                    <Truck className="text-2xl sm:text-4xl" />
                    <span className="text-center text-xs sm:text-md">ENTREGA EM 7 DIAS ÚTEIS PARA TODO BRASIL</span>
                </div>
                <div className="w-[45%] lg:w-[30%] flex flex-col gap-4 justify-center items-center">
                    <Key className="text-2xl sm:text-4xl" />
                    <span className="text-center text-xs sm:text-md">SITE 100% SEGURO COM SEGURANÇA SSL</span>
                </div>
            </div>
        </div>
    )
}

export default Sale