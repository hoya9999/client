import {TableRow, TableCell} from '@mui/material';

export default function Customer(props) {
    const {id, image, name, birthday, gender, job} = props;        
    return (
        <TableRow>
            <TableCell>{id}</TableCell>
            <TableCell><img src={image} alt="profile" /></TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{birthday}</TableCell>
            <TableCell>{gender}</TableCell>
            <TableCell>{job}</TableCell>                                    
        </TableRow>
    );
}
