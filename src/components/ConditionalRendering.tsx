function ConditionalRendering ({isLoggedIn} : {isLoggedIn: boolean}) {
    // if(isLoggedIn) {
    //     return <p>Hey you're Logged In</p>
    // } else {
    //     return <p>Hey you need to log in first..</p>
    // }
    return (
        <p> {isLoggedIn && <button>Logout</button>} </p>
    )
}
export default ConditionalRendering;