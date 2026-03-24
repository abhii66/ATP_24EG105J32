function User(props){ 
    const {userObj}=props
    //state
    

    //return
    return(
        <div className="border-4 rounded-2xl px-8 py-10 text-center shadow-2xl shadow-gray-700">
            <img className="block mx-auto rounded-full ring-3" src={userObj.image} alt="not available" />
            <h1 className="text-3xl">{userObj.name}</h1>
            <h1 className="text-3xl">{userObj.email}</h1>
        </div>
);
}

export default User