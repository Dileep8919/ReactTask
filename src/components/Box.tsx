const Box = ({title, children}: {title: string, children: React.ReactNode}) => {
    return (
        <>
            <div>
                <p>{title}</p>
                <p>{children}</p>
            </div>
        </>
    )
}
export default Box;