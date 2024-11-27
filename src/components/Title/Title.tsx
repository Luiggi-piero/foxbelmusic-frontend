type Props = {
    title?: string,
    fontSize?: string,
    margin?: string
}

function Title({ title, fontSize, margin }: Props) {
    return (
        <h1 style={{ fontSize, margin, color: '#E86060', textAlign: 'center' }}>{title}</h1>
    )
}

export default Title