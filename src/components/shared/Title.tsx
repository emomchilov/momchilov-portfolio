interface Props {
    className?: string
}

export const Title: React.FC<Props> = ({className = ''}) => {
    return <div className={className}>
        <h3 className="text-white text-[36px]">hi, i'm eden.</h3>
        <h6 className="py-2 text-white">let's get to know each other.</h6>
    </div>
}