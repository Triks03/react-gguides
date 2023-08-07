
import { useParams } from 'react-router-dom';

import './CharacterPage.sass'

const CharacterPage = () => {

    const {id} = useParams();

    return(
        <>
            <p style={{'fontSize' : '1.5rem'}}>Single character page {id}</p>
        </>
    )
}

export default CharacterPage;