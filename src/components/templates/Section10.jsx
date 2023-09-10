import Button from "../utils/Button"

const Section10 = () => {

    return (
        <div className="w-full h-[70vh] p-8 flex flex-col items-center gap-6 bg-[url(https://curcumy.net.br/wp-content/uploads/2023/03/desk4-scaled-1.jpg)] bg-cover">
            <div className="w-[90%] h-full flex gap-4">
                <div className="w-1/2 flex flex-col justify-center">
                    <h2 className="text-[#6f3700] text-4xl font-bold py-4">
                        Garantia de resultados ou o seu dinheiro de volta!
                    </h2>

                    <p className="italic py-4">Sabemos que oferecemos produtos eficazes e superiores aos disponíveis no mercado. Nossas fórmulas são inovadoras e realmente entregam o que prometem. Confiamos tanto em nossas fórmulas que podemos fazer essa garantia:</p>

                    <p className="font-bold text-lg">Se você não estiver satisfeito com os resultados do Curcumy com 90 dias de tratamento, reembolsamos 100% do seu dinheiro!</p>
                </div>
                <div className="w-1/2 flex justify-center">
                    <img
                        src="https://curcumy.net.br/wp-content/uploads/2023/03/imagem6-min.png"
                        alt="imagem do produto"
                        className="w-1/2 object-contain"
                    />
                </div>
            </div>



            <Button text={"QUERO COMPRAR COM GARANTIA!"} />
        </div>
    )
}

export default Section10