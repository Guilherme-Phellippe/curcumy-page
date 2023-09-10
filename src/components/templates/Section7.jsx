import Button from "../utils/Button"

const Section7 = () => {

    return (
        <div className="w-full py-20 flex items-center gap-6 bg-gradient-to-r from-[#592400] to-[#271200]">

            <div className="w-1/2 h-full flex flex-col items-end justify-start">
                <div className="w-1/2">
                    <img
                        className="w-full h-full object-contain"
                        src="https://curcumy.net.br/wp-content/uploads/2023/03/imagem4-min.png"
                        alt="imagem do produto"
                    />
                </div>
            </div>

            <div className="w-1/2 px-8">
                <h2 className="text-white text-3xl font-bold px-4">
                    Para quem sofre com a dor intensa e constante e
                    <span className="text-[#D7A224]"> deseja ter um alívio rápido e duradouro!</span>
                </h2>

                <p className="text-white text-lg px-4 my-4 leading-8">
                    A fórmula inovadora do Curcumy tem sua origem na milenar medicina Ayurveda,
                    usada por milhares de anos pelos povos do oriente para tratar a dor.
                    Sua composição possui extrato de cúrcuma longa do tipo bcm-95,
                    comprovada em mais de 140 estudos científicos pela sua eficácia no tratamento da dor.
                </p>

                <Button text={"EU QUERO O CURCUMY!"} />
            </div>
        </div>

    )
}

export default Section7