import Loader from '../../components/loader/loader';

import './HomePage.sass'

const HomePage = () => {
    return(
        <>
            <Loader/>
            <p style={{'fontSize' : '1.5rem'}}>HomePage</p>
        </>
    )
}

export default HomePage;