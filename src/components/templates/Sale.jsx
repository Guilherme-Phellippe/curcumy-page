import { CreditCard, Key, Lock, ShieldCheck, ThumbsUp, Truck } from "@phosphor-icons/react"
import OptimizedImg from "../utils/OptimizedImg"
import Types from "prop-types"

const Sale = ({ page }) => {

    const products = [
        {
            id: 0,
            link: "https://ev.braip.com/campanhas/cpa/camd2m298",
            discount: 60,
            img: "https://i.ibb.co/1M9vQQ1/6-6.jpg",
            value: "69,98",
            inCash: "697,00",
            qntd: 12,
            pay: 6
        },
        {
            id: 1,
            link: "https://ev.braip.com/campanhas/cpa/camzovodx",
            discount: 50,
            img: "https://i.ibb.co/QpcpJvN/3-2-2.jpg",
            value: "39,86",
            inCash: "397,00",
            qntd: 5,
            pay: 3
        },
        {
            id: 2,
            link: "https://ev.braip.com/campanhas/cpa/cam2kjkd1",
            discount: 40,
            img: "https://i.ibb.co/NsxkWk3/2-1-2.jpg",
            value: "29,82",
            inCash: "297,00",
            qntd: 3,
            pay: 2
        },
        {
            id: 3,
            link: "https://ev.braip.com/campanhas/cpa/camokmkod",
            discount: 5,
            img: "https://i.ibb.co/NCN4z3P/1-1-1.jpg",
            value: "19,78",
            inCash: "197,00",
            qntd: 1,
            pay: 1
        },
    ]


    const handlePurchaseProduct = (product) => {
        // eslint-disable-next-line no-undef
        fbq('track', 'InitiateCheckout', { qntd: product.qntd, page });
        window.location.href = product.link
    }


    return (
        <div id="container-sales" className="flex flex-col py-16 items-center bg-gradient-to-tl from-[#592400] to-[#271200]">
            <h2 className="text-white text-center text-3xl lg:text-4xl p-4 font-bold">ESCOLHA A MELHOR OFERTA PARA VOCÊ</h2>
            <h3 className="text-[#d7a224] text-2xl p-4 text-center sm:text-left">FRASCO EXTRA + FRETE GRÁTIS SOMENTE HOJE!</h3>
            <div className="w-4/5 mx-auto flex flex-col md:flex-row items-center gap-6 my-16">
                {
                    products.map((product, index) =>
                        <div
                            key={product.id}
                            onClick={() => handlePurchaseProduct(product)}
                            className={`${index === 0 && "animate-grow-up z-50"} cursor-pointer`}
                        >
                            <div className="w-full h-full bg-white relative p-2 rounded-xl flex flex-col items-center">
                                <div className="w-[70px] absolute -top-[35px] right-0">
                                    <OptimizedImg imgs={"https://i.ibb.co/c15qVPH/Design-sem-nome-32-removebg-preview.png"} alt="Icone de promoção" />
                                    <div className="w-full h-full absolute top-0 flex flex-col justify-center items-center">
                                        <p className="font-bold text-white text-2xl">{product.discount}%</p>
                                        <span className="text-[7px] font-bold text-white uppercase -translate-y-[6px]">de desconto</span>
                                    </div>
                                </div>
                                <h3 className="text-[#E98F21] font-bold uppercase text-sm mt-8">Tratamento para {product.qntd} {`${product.qntd > 1 ? "meses" : "mês"}`}</h3>
                                <h3 className="text-[#B56505] font-bold italic uppercase text-xl">
                                    {
                                        product.qntd > 1 ?
                                        `Pague ${product.pay} e leve ${product.qntd}`
                                        :
                                        "Para Experimentar"
                                    }
                                </h3>
                                <div className="h-[200px] my-3">
                                    <OptimizedImg imgs={product.img} alt="Imagem do produto" />
                                </div>
                                <div className="w-full grid grid-cols-5 grid-rows-4">
                                    <span className="row-span-1 col-span-full uppercase text-xs text-zinc-400 font-bold text-center flex justify-center items-end">por apenas</span>
                                    <span className="row-span-2 col-span-1 uppercase text-zinc-500 font-bold leading-6 flex items-end text-2xl">12X<br />de</span>
                                    <span className="row-span-2 col-span-4 text-7xl text-[#B56505] font-bold flex items-center tracking-tighter">{product.value}</span>
                                    <span className="row-span-1 col-span-full text-zinc-400 text-xs text-center font-bold py-1">ou R${product.inCash} à vista com desconto</span>
                                </div>
                                <button className="uppercase bg-[#35D200] text-white font-bold rounded-xl text-2xl mt-2 p-1">Comprar agora</button>
                                <div className="flex">
                                    {
                                        index === (products.length - 1) ?
                                            <>
                                                <p className="py-4 uppercase text-[#003583] font-bold text-2xl">Frete 29,90</p>
                                                <div className="w-[60px]">
                                                    <OptimizedImg imgs={"https://i.ibb.co/MMwnvKM/Captura-de-tela-de-2023-09-22-09-09-32.png"} alt="Caminhao com frete grátis" />
                                                </div>
                                            </>
                                            :
                                            <>
                                            <p className="py-4 uppercase text-[#37B10F] font-bold text-2xl">frete grátis</p>
                                                <div className="w-[60px]">
                                                    <OptimizedImg imgs={"https://i.ibb.co/MMwnvKM/Captura-de-tela-de-2023-09-22-09-09-32.png"} alt="Caminhao com frete grátis" />
                                                </div>
                                            </>
                                    }

                                </div>
                            </div>
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
            <div className="w-[400px] bg-white mt-12">
                <OptimizedImg
                    imgs={"https://curcumy.net.br/wp-content/uploads/2022/09/Compra-Segura.png"}
                    alt="Pagamentos seguros"
                />
            </div>
        </div>
    )
}

Sale.propTypes = {
    page: Types.string.isRequired
}

export default Sale