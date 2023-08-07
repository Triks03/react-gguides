import { useParams } from 'react-router-dom';

import './ArtifactPage.sass'

const ArtifactPage = () => {

    const {id} = useParams();

    return(
        <>
            <p style={{'fontSize' : '1.5rem'}}>Single artifact page {id}</p>
        </>
    )
}

export default ArtifactPage;