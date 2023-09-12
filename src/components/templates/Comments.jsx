import Depoiments2 from "./Depoiments2"
import OptimizedImg from "../utils/OptimizedImg"
import { useEffect, useState } from "react";

const comments = [
    {
        id: 0,
        photo: "https://sitesmatheuslopes.com/wp-content/uploads/2022/07/1.jpg",
        name: "Luciana",
        comment: "Ainda bem que eu vi isso até o final. Feliiiz demais!!! Obrigada doutor que desenvolveu essa maravilha, fiz o teste e em dois dias minhas dores sumiram, maravilhada",
        created_at: "3 min"
    },
    {
        id: 1,
        photo: "https://sitesmatheuslopes.com/wp-content/uploads/2022/07/2.jpg",
        name: "Larissa",
        comment: "Tava muito afim de saber se funcionava de verdade e me surpreendi, mt obg",
        created_at: "4 min"
    },
    {
        id: 2,
        photo: "https://sitesmatheuslopes.com/wp-content/uploads/2022/07/3.jpg",
        name: "Neusa",
        comment: "Tô de cara com esse produto! N sabia que realmente ia funcionar, tou usando há 30 dias e adivinha funcionou muito bem!!",
        created_at: "12 min"
    },
    {
        id: 3,
        photo: "https://sitesmatheuslopes.com/wp-content/uploads/2022/07/4.jpg",
        name: "Danielli",
        comment: "Eu realmente precisava desse tratamento para as dores,não sabia mais o que fazer, o video demora um pouco mas depois que é revelado o produto eu fiquei surpresa porque não consegui isso antes, vale muito a pena pessoal, obrigada doutor!",
        created_at: "12 min"
    },
    {
        id: 4,
        photo: "https://sitesmatheuslopes.com/wp-content/uploads/2022/07/5.jpg",
        name: "Juliana",
        comment: "Doutor você devia vender esse produto por um milhããão ela funciona mesmo! Eu já tinha feito tudo que podia e nada funcionava, Meu joelho está ótimo, consigo subir escadas sem sentir mais dor, realmente funciona. Recomendo",
        created_at: "19 min"
    },
    {
        id: 5,
        photo: "https://sitesmatheuslopes.com/wp-content/uploads/2022/07/6.jpg",
        name: "Camila Silva",
        comment: "Até minhas dores de coluna e articulares nas mãos sumiram. To gostando de mais Obrigada… Deus te abençoe.",
        created_at: "24 min"
    },
    {
        id: 6,
        photo: "https://sitesmatheuslopes.com/wp-content/uploads/2022/07/7.jpg",
        name: "Cristiane",
        comment: "Já fazia dois anos que eu não conseguia mais andar direito de tanta dor nas pernas e joelho, resolvi arriscar esse produto e hoje estou uma nova mulher, até vou na praça correr com minha amiga, tratamento é perfeito!",
        created_at: "25 min"
    },
    {
        id: 7,
        photo: "https://sitesmatheuslopes.com/wp-content/uploads/2022/07/8.jpg",
        name: "Maria Carolina",
        comment: "Tenho muita dor no ombro e nas mãos, será que funciona?",
        created_at: "3 min",
        answers: [
            {
                id: 0,
                photo: "https://sitesmatheuslopes.com/wp-content/uploads/2022/07/9.jpg",
                name: "Daniela",
                comment: "Maria eu sentia o mesmo que você. O tratamento foi minha última tentativa que deu certo demais. Pode testar vc vai ver como funciona.",
                created_at: "3 min",
            },
            {
                id: 1,
                photo: "https://sitesmatheuslopes.com/wp-content/uploads/2022/07/10.jpg",
                name: "Janice",
                comment: "Maria eu n acreditava também, mas resolvi testar e n é que funcionou? Grata demais ao doutor e o universo.",
                created_at: "3 min",
            },
            {
                id: 2,
                photo: "https://sitesmatheuslopes.com/wp-content/uploads/2022/07/8.jpg",
                name: "Maria Carolina",
                comment: "Brigada meninas, vou testar",
                created_at: "3 min",
            },

        ]
    },
    {
        id: 8,
        photo: "https://sitesmatheuslopes.com/wp-content/uploads/2022/07/11.jpg",
        name: "Helena",
        comment: "Obrigado ao doutor, conseguiu mudar minha vida em poucas semanas, sou muito grata pelo o que você conseguiu fazer, parece até milagre, me emociono de saber que deu certo!",
        created_at: "39 min"
    },
    {
        id: 9,
        photo: "https://sitesmatheuslopes.com/wp-content/uploads/2022/07/12.jpg",
        name: "Michele",
        comment: "Gente eu achava que era mentira, mas testei e deu certo…. eu sentia tanta dor nas juntas que tive que largar o emprego. Cheguei ao ponto de ir toda semana no ortopedista... Por anos eu fiquei assim, mt mal, não conseguia fazer nada da vida... Com essa solução milagrosa do doutor, consegui o impossível! Eu não to acreditando.",
        created_at: "53 min"
    },
    {
        id: 10,
        photo: "https://sitesmatheuslopes.com/wp-content/uploads/2022/07/13.jpg",
        name: "Juliana",
        comment: "Pra mim essa história de sumir com as dores sem remédios sempre foi papo furado, mais nosssa… se soubesse disso antes tinha testado a muito tempo!",
        created_at: "55 min"
    },
    {
        id: 11,
        photo: "https://sitesmatheuslopes.com/wp-content/uploads/2022/07/14.jpg",
        name: "Catarina",
        comment: "Pagaria até um milhããão por esse tratamento se soubesse que ia ficar tão feliz assim!!!",
        created_at: "58 min"
    },
    {
        id: 12,
        photo: "https://sitesmatheuslopes.com/wp-content/uploads/2022/07/15.jpg",
        name: "Jéssika",
        comment: "Gente eu tenho medo de não dar certo",
        created_at: "1 h",
        answers: [
            {
                id: 0,
                photo: "https://sitesmatheuslopes.com/wp-content/uploads/2022/07/16.jpg",
                name: "Giovanna",
                comment: "Eu pensava a mesma coisa, mas testaria 10 vezes depois que vi que funciona Bora ser feliz flor! A gente merece depois tanta dor e luta",
                created_at: "1 h"
            },
            {
                id: 1,
                photo: "https://sitesmatheuslopes.com/wp-content/uploads/2022/07/17.jpg",
                name: "Bruna",
                comment: "Funciona sim ! Pode acreditar. Meu marido que me indicou… agora não fico mais sem, é uma maravilha.",
                created_at: "1 h"
            },
        ]
    },
    {
        id: 13,
        photo: "https://sitesmatheuslopes.com/wp-content/uploads/2022/07/18.jpg",
        name: "Claudia",
        comment: "A minha vida agora é outra depois desse tratamento e o bom é que é natural e sem depender de remédios! Brigada doutor 🙂",
        created_at: "1 h"
    },
    {
        id: 14,
        photo: "https://sitesmatheuslopes.com/wp-content/uploads/2022/07/19.jpg",
        name: "Adriana",
        comment: "@joycelima esse aqui que te falei que funcionou pra mim.",
        created_at: "1 h"
    },
    {
        id: 15,
        photo: "https://sitesmatheuslopes.com/wp-content/uploads/2022/07/20.jpg",
        name: "Aline",
        comment: "Acabei de testar por 3 dias!!!! Ahhhh não acredito ta funcionando, minhas dores foram pro espaço!!!",
        created_at: "1 h"
    },
    {
        id: 16,
        photo: "https://sitesmatheuslopes.com/wp-content/uploads/2022/07/21.jpg",
        name: "Stefanny",
        comment: "Testei esse produto que o povo tanto fala e está funcionando!!! Vou indicar pra todas minhas amigas e parentes 😉",
        created_at: "1 h",
        answers: [
            {
                id: 0,
                photo: "https://sitesmatheuslopes.com/wp-content/uploads/2022/07/22.jpg",
                name: "Gisele",
                comment: "Funciona msmo?",
                created_at: "46 min"
            },
            {
                id: 1,
                photo: "https://sitesmatheuslopes.com/wp-content/uploads/2022/07/21.jpg",
                name: "Stefanny",
                comment: "Eu testei por 30 dias e funcionou na primeira semana super pra mim. pode arriscar sem medo.",
                created_at: "46 min"
            },
        ]
    },
]

const Comments = () => {
    const [showComments, setComments] = useState();

    useEffect(()=>{

        const interval = setInterval(()=>{
            const playUser = JSON.parse(localStorage.getItem("play")) || [];
            const result1 = playUser.reduce((acc, currentValue) => acc + Number(currentValue), 0);
            const date = new Date();
            const days = date.getDate() < 10 ? "0" + date.getDate() : date.getDate().toString();
            const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
            const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
            const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
            const currenttimeFormated = days + hours + minutes + seconds;
            const timerWatching = (currenttimeFormated - result1)

            if(timerWatching >= 1100) {
                setComments(true)
                clearInterval(interval)
            }
        }, 60000)


        return ()=> clearInterval(interval)
    },[])

    return (
        showComments &&
        <div className="w-full flex flex-col items-center py-16 bg-gradient-to-r from-[#361800] to-[#120800]">
            <div className="w-4/5 flex flex-col bg-white">
                <h2 className="w-full border-2 px-2 py-4 font-medium">{comments.length} comentários</h2>
                <div className="flex flex-col px-6 py-4 gap-4">
                    {
                        comments.map(item =>
                            <div key={item.id} className="flex flex-col">
                                <div className="flex gap-4">
                                    <div className="w-[50px] h-[50px] flex justify-center">
                                        <OptimizedImg
                                            imgs={item.photo}
                                            alt="Imagem de uma pessoa"
                                            object="contain"
                                        />
                                    </div>
                                    <div className="w-[90%] flex flex-col">
                                        <h3 className="text-[#3d629c] font-bold">{item.name} disse:</h3>
                                        <p>{item.comment}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2 opacity-60 font-light text-sm p-1">
                                    <span>Responder</span>
                                    <span>Curtir</span>
                                    <span>Seguir</span>
                                    <span>{item.created_at}</span>
                                </div>
                                <div className={`flex flex-col gap-4 ${item.answers?.length > 0 && "my-4"}`}>
                                    {
                                        item.answers?.map(answer =>
                                            <div key={answer.id} className="w-3/4 flex flex-col translate-x-[60px]">
                                                <div className="flex gap-4">
                                                    <div className="w-[50px] h-[50px] flex justify-center">
                                                        <OptimizedImg
                                                            imgs={answer.photo}
                                                            alt="Imagem de uma pessoa"
                                                            object="contain"
                                                        />
                                                    </div>
                                                    <div className="w-[90%] flex flex-col">
                                                        <h3 className="text-[#3d629c] font-bold">{answer.name} disse:</h3>
                                                        <p>{answer.comment}</p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 opacity-60 font-light text-sm p-1">
                                                    <span>Responder</span>
                                                    <span>Curtir</span>
                                                    <span>Seguir</span>
                                                    <span>{answer.created_at}</span>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <Depoiments2 />
        </div >
    )
}

export default Comments