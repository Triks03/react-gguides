import { useParams } from 'react-router-dom';

import './WeaponPage.sass'

const WeaponPage = () => {

    const {id} = useParams();

    return(
        <>
            <p style={{'fontSize' : '1.5rem'}}>Single weapon page {id}</p>
        </>
    )
}

export default WeaponPage;