import OptimizedImg from "../utils/OptimizedImg"

const HeadLine = () => {
    return (
        <div className="w-[95%] md:w-1/2 mx-auto my-4">
            <OptimizedImg
                imgs={"https://i.ibb.co/YpGc6DV/Como-um-acidente-de-carro-me-ajudou-a-curar-a-dor-de-mais-de-20-mil-pessoas-2-Photo-Room-png-Photo-R.png"}
                alt="Imagem do titulo"
            />
        </div>
    )
}

// 1 - https://i.ibb.co/BsgqJf6/Como-um-acidente-de-carro-me-ajudou-a-curar-a-dor-de-mais-de-20-mil-pessoas-Photo-Room-png-Photo-Roo.png
// 2 -https://i.ibb.co/YpGc6DV/Como-um-acidente-de-carro-me-ajudou-a-curar-a-dor-de-mais-de-20-mil-pessoas-2-Photo-Room-png-Photo-R.png

export default HeadLine