const Profile = (props) => {

    const { name, age } = props;

    return <div>
        <h1>Character: {name}, {age} years old
        </h1>
    </div>
}

export default Profile;