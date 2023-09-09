import Button from "../utils/Button"

const Section5 = () => {

    const modeUses = [
        {
            id: 0,
            img: "https://curcumy.net.br/wp-content/uploads/2023/03/11.jpg",
            text: "Coloque 1ml (20 gotas) do produto diretamente na sua boca, copo com água ou bebida de sua preferência (tem o sabor suave de abacaxi)",
        },
        {
            id: 1,
            img: "https://curcumy.net.br/wp-content/uploads/2023/03/12-1.jpg",
            text: "Não ingerir com bebidas quentes ou geladas, para maior eficácia do produto",
        },
        {
            id: 2,
            img: "https://curcumy.net.br/wp-content/uploads/2023/03/13-1.jpg",
            text: "Tome apenas uma vez por dia e você terá o resultado esperado",
        },
    ]


    return (
        <div className="w-full h-[80vh] flex flex-col items-center justify-center py-8 bg-[#f7f8ee]">

            <h2 className="text-[#522a10] text-5xl text-center font-bold py-4">
                Qual o modo de uso?
            </h2>

            <div className="w-3/4 flex justify-evenly my-8 gap-8">
                {
                    modeUses.map(use =>
                        <div
                            key={use.id}
                            className="w-1/3 bg-white shadow-md rounded-xl flex flex-col items-center gap-8 p-4"
                        >   
                            <img 
                                src={use.img} 
                                alt="imagem do modo de uso"
                                className="rounded-full w-[200px]"
                            />
                            <p className="text-center">{use.text}</p>
                        </div>
                    )
                }
            </div>

            <Button text={"QUERO EXPERIMENTAR O CURCUMY!"} />
        </div>
    )
}

export default Section5