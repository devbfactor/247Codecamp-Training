
function Profile(props) {
    console.log(props);
    
    //destructuring props
    const{name, lastname} = props;

    return (
        <h3>Name: {name} {lastname} </h3> //props.name; props.lastname
    )
}

export default Profile;