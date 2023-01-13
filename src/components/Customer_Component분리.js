function Customer(props) {
    const {id, image, name, birthday, gender, job} = props;        
    return (
        <div>
            <CustomerProfile 
                image={image}            
                id={id}
                name={name}
            />
            <CustomerInfo 
                birthday={birthday}
                gender={gender}
                job={job}
            />
        </div>
    );
}

function CustomerProfile(props) {
    const {id, image, name} = props;    
    return (
        <div>
            <img src={image} alt='profile' />
            <h2>{name}({id})</h2>
        </div>
    )
}

function CustomerInfo(props) {
    const {birthday, gender, job} = props;
    return (
        <div>
            <p>{birthday}</p>
            <p>{gender}</p>
            <p>{job}</p>
        </div>
    );    
}

export default Customer;