interface IProps {
    title:string
}

export function Li({title}:IProps) {

    return (
        <li>{title}</li>
    )
}
