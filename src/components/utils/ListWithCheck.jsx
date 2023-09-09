import { CheckCircle } from "@phosphor-icons/react"

// eslint-disable-next-line react/prop-types
const ListWithCheck = ({ list }) => {
    return (
        <div className="flex flex-col gap-6 mt-8">
            {
                // eslint-disable-next-line react/prop-types
                list.map(item =>
                    <li key={item} className="flex items-center gap-2 text-lg font-medium ">
                        <CheckCircle className="fill-[#00a817]" size={28} />
                        <p>{item}</p>
                    </li>
                )
            }
        </div>
    )
}

export default ListWithCheck