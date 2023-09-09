import Button from "../utils/Button"

const Section3 = () => {

    return (
        <div className="w-full h-[80vh] flex flex-col items-center justify-center py-8">

            <div className="w-4/5 flex">
                <div className="w-1/2">
                    <h2 className="text-[#522a10] text-4xl font-bold py-4">
                        Veja por que o Curcumy alivia a dor de forma rápida e eficiente!
                    </h2>
                    <p className="leading-8 text-xl">
                        <span className="font-bold italic">A Aplicação Sublingual</span>,
                        proporciona uma absorção rápida e eficaz por meio da glândula que temos sob a língua,
                        nela vasos que acessam diretamente a corrente sanguíne 
                        <span className="font-bold italic"> absorvem o conteúdo rapidamente e alcançam efeitos surpreendentes em poucos minutos.</span>
                    </p>
                </div>
                <div className="w-1/2 mt-4 flex justify-center items-start mx-auto">
                    <img
                        src="https://curcumy.net.br/wp-content/uploads/2022/12/sublingual.jpg"
                        alt="imagem do produto"
                        className="w-full h-4/5 object-contain"
                    />
                </div>
            </div>

            <Button text={"QUERO ALÍVIO RÁPIDO!"} />
        </div>
    )
}

export default Section3