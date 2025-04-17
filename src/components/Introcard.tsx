interface IntrocardProps {
    name: string,
    role: string
}

const Introcard: React.FC <IntrocardProps> = ({name, role}) =>{
    return (
        <div>
            <p>{name}</p>
            <p>{role}</p>
        </div>
    )
}
export default Introcard;