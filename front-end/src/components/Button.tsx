type ButtonType = {
    title: string;
    variant?: "default" | "outline" ;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({title, variant = "default", ...props}: ButtonType){
    
    const buttonVariant = () => {
        if(variant === "default"){
            return "bg-[#C92A0E] border-2 border-[#C92A0E] w-full py-2 rounded-md cursor-pointer text-white font-bold text-sm"
        }else if( variant === "outline"){
            return "bg-white border-2 border-[#C92A0E] w-full py-2 rounded-md cursor-pointer text-[#C92A0E] font-bold text-sm"
        }
    }

    return(
        <button  {...props} className={buttonVariant()}>
            {title}
        </button>
    )
}