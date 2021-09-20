function User({userData, time}) {
    return <span className="user">
        <span className="name"> {userData} </span>
        <span className="handle">{time}</span>
    </span>
}

export default User;