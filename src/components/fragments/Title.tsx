interface Props {
    label: string
}

export const Title: React.FC<Props> = ({label}) => {
    return (
        <h1 className="text-2xl lg:text-4xl font-semibold">{label}</h1>
    )
}