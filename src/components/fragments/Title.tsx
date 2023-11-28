interface Props {
    label: string
}

export const Title: React.FC<Props> = ({label}) => {
    return (
        <h1 className="text-5xl font-medium">{label}</h1>
    )
}