// eslint-disable-next-line react/prop-types
const Button = ({ text }) => {
    return (
        <div className="w-full flex justify-center mt-12">
            <button className="animate-grow-up shadow-xl text-white bg-gradient-to-r from-[#33B044] to-[#148023] rounded-2xl">
                {text}
            </button>
        </div>
    )
}

export default Button