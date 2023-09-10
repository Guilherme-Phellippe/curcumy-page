import { CreditCard, Key, Lock, ShieldCheck, ThumbsUp, Truck } from "@phosphor-icons/react"

const Sale = () => {

    const products = [
        "https://curcumy.net.br/wp-content/uploads/2023/04/12-462x1024.png",
        "https://curcumy.net.br/wp-content/uploads/2023/04/5-464x1024.png",
        "https://curcumy.net.br/wp-content/uploads/2023/04/3-min-465x1024.png",
        "https://curcumy.net.br/wp-content/uploads/2023/04/1-min-462x1024.png"
    ]


    return (
        <div className="flex flex-col py-16 items-center bg-gradient-to-tl  from-[#592400] to-[#271200]">
            <h2 className="text-white text-4xl p-4 font-bold">ESCOLHA A MELHOR OFERTA PARA VOCÊ</h2>
            <h3 className="text-[#d7a224] text-2xl p-4">FRASCO EXTRA + FRETE GRÁTIS SOMENTE HOJE!</h3>
            <div className="w-4/5 mx-auto flex gap-4 my-16">
                {
                    products.map((product, index) =>

                        <div key={index} className={`${index === 0 && "animate-grow-up"} cursor-pointer`}>
                            <img src={product} alt="imagem do produto" />
                        </div>
                    )
                }
            </div>
            <div className="w-1/2 flex flex-wrap text-white gap-8 ">
                <div className="w-[30%] flex flex-col gap-4 justify-center items-center">
                    <ShieldCheck size={44} />
                    <span className="text-center text-sm">COMPRA SEGURA</span>
                </div>
                <div className="w-[30%] flex flex-col gap-4 justify-center items-center">
                    <ThumbsUp size={44} />
                    <span className="text-center text-sm">SATISFAÇÃO GARANTIDA</span>
                </div>
                <div className="w-[30%] flex flex-col gap-4 justify-center items-center">
                    <Lock size={44} />
                    <span className="text-center text-sm">PRIVACIDADE PROTEGIDA</span>
                </div>
                <div className="w-[30%] flex flex-col gap-4 justify-center items-center">
                    <CreditCard size={44} />
                    <span className="text-center text-sm">PAGUE NO CARTÃO EM ATÉ 12 VEZES</span>
                </div>
                <div className="w-[30%] flex flex-col gap-4 justify-center items-center">
                    <Truck size={44} />
                    <span className="text-center text-sm">ENTREGA EM 7 DIAS ÚTEIS PARA TODO BRASIL</span>
                </div>
                <div className="w-[30%] flex flex-col gap-4 justify-center items-center">
                    <Key size={44} />
                    <span className="text-center text-sm">SITE 100% SEGURO COM SEGURANÇA SSL</span>
                </div>
            </div>
        </div>
    )
}

export default Sale