import Button from "../utils/Button"

const Section8 = () => {

    const ingredients = [
        {
            title: "CURCUMINA BCM-95 (CÚRCUMA LONGA)",
            text: "Um dos mais potentes remédios naturais para dor existentes na natureza. É também um anti-inflamatório eficaz e age rapidamente eliminando a causa raiz da dor.",
            img: "https://curcumy.net.br/wp-content/uploads/2022/12/Curcuma-1.png"
        },
        {
            title: "EXTRATO DE GENGIBRE (ZINGIBER OFFICINALLE):",
            text: "Poderoso Anti-inflamatório natural usado na China e Ásia tropical há milhares de anos. Combate problemas ligados à dor, inclusive artrite reumatoide, artrose, bursite, dor lombar, dor na coluna, quadril e joelho inchado.",
            img: "https://curcumy.net.br/wp-content/uploads/2022/12/Zingiber.png"
        },
        {
            title: "COLÁGENO TIPO II",
            text: "A substância mais importante para a saúde das articulações. Melhora as dores articulares, fortalece os ossos, recupera a elasticidade e a nutrição das cartilagens e evita o desgaste das articulações.",
            img: "https://curcumy.net.br/wp-content/uploads/2022/12/Colageno-Tipo-II.png"
        },
    ]


    return (
        <div className="w-full py-20 flex flex-col items-center gap-6 bg-[#F7F8EE]">

            <h2 className="text-[#6f3700] text-3xl font-bold px-4 ">
                Conheça o segredo da fórmula do Curcumy.
            </h2>

            <div className="w-4/5 flex gap-8">
                {
                    ingredients.map(ingredient =>
                        <div 
                            key={ingredient.title}
                            className="w-1/3 flex flex-col items-center justify-center bg-white shadow-xl rounded-2xl p-4"
                        >
                            <img 
                                src={ingredient.img} 
                                alt="imagem do ingredient" 
                                className="w-[150px] h-[150px]"
                            />
                            <h3 className="text-[#C69432] font-bold text-center my-4 text-xl">{ingredient.title}</h3>
                            <p className="text-center px-4 text-lg">{ingredient.text}</p>
                        </div>
                    )
                }
            </div>

            <Button text={"EU QUERO CONHECER O CURCUMY!"} />
        </div>

    )
}

export default Section8