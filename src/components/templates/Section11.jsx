import Button from "../utils/Button"

const Section11 = () => {

    return (
        <div className="w-full py-20 flex flex-col items-center justify-center">

            <div className="w-4/5 flex">
                <div className="w-1/2 flex flex-col gap-y-5">
                    <h2 className="text-[#6f3700] text-4xl font-bold py-4">O Curcumy é um produto <br /> 100% natural!</h2>
                    <p className="font-bold italic text-lg">O Curcumy é um produto 100% natural criado para reconstruir e fortalecer as articulações, tendões, coluna e músculos.</p>
                    <p className="italic text-lg">Um tratamento que age direto na causa da dor, trazendo alívio imediato sem os problemas que uma medicação forte pode causar no seu fígado e  estômago.</p>
                    <p className="font-bold italic text-lg">É um tratamento de dentro para fora, causando alívio mais rapidamente.</p>
                    <p className="italic text-lg">Além disso, o Curcumy tem um sabor agradável de abacaxi e você pode diluir 20 gotas em água ou na sua bebida preferida.</p>
                </div>
                <div className="w-1/2 mt-4 flex flex-wrap justify-center items-start mx-auto p-6 ">
                    <img
                        src="https://curcumy.net.br/wp-content/uploads/2023/03/imagem5-min-629x1024.png"
                        alt="imagem do produto"
                        className="w-3/4 h-3/4 object-contain"
                    />
                </div>
            </div>

            <Button text={"QUERO EXPERIMENTAR O CURCUMY!"} />
        </div>
    )
}

export default Section11