function Customer(props) {
    const {name, birthday, gender, job} = props;
    return (
        <div>
            <h2>{name}</h2>
            <p>{birthday}</p>
            <p>{gender}</p>
            <p>{job}</p>
        </div>
    );
}

export default Customer;