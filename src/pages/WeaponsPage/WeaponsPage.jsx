import { useState } from 'react';

import { Link } from 'react-router-dom';
import Loader from '../../components/loader/loader'
import CustomSelect from '../../components/customSelect/customSelect';

import './WeaponsPage.sass'
import {decorationData} from '../../decorationDB.js'

const WeaponsPage = () => {

    const [open, setOpen] = useState(false);
    const [element, setElement] = useState('');

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
        console.log('close');
    }

    const handleChooseElement = (element) => {
        setElement(element);
    }

    return(
        <>
            <button onClick={handleOpen}>Something like test</button>
            <div className='someTest'>{element}</div>
            <CustomSelect open={open} handleClose={handleClose} handleChooseElement={handleChooseElement} decorationData={decorationData}/>
            {/* <Loader/> */}
            {/* <p style={{'fontSize' : '1.5rem'}}>WeaponsPage</p>
            <Link to={'/weapon/1'}><div className="charecter-item">First</div></Link>
            <Link to={'/weapon/2'}><div className="charecter-item">Second</div></Link> */}
        </>
    )
}

export default WeaponsPage;