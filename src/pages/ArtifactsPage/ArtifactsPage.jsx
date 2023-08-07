import { Link } from 'react-router-dom';

import Loader from '../../components/loader/loader'

import './ArtifactsPage.sass'

const ArtifactsPage = () => {
    return(
        <>
            <Loader/>
            <p style={{'fontSize' : '1.5rem'}}>ArtifactsPage</p>
            <Link to={'/artifact/1'}><div className="charecter-item">First</div></Link>
            <Link to={'/artifact/2'}><div className="charecter-item">Second</div></Link>
        </>
    )
}

export default ArtifactsPage;