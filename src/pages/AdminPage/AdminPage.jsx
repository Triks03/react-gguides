import { Link } from 'react-router-dom';

import MainBox from '../../components/mainBox/mainBox';

import { ReactComponent as Plus } from '../../img/plus.svg';

import './AdminPage.sass'

const AdminPage = () => {
    return(
        <MainBox>
            <div className='link__wrapper'>
                <Link to='/admin-panel/create-character' className='link'>
                    <button className='link__button'>
                        <Plus className='link__dec'/>
                    </button>
                    <p className="link__text">Add new character</p>
                </Link>
                <Link to='/character' className='link'>
                    <button className='link__button'>
                        <Plus className='link__dec'/>
                    </button>
                    <p className="link__text">Update character</p>
                </Link>
                <Link to='/character' className='link'>
                    <button className='link__button'>
                        <Plus className='link__dec'/>
                    </button>
                    <p className="link__text">Delete character</p>
                </Link>
            </div>
        </MainBox>
    )
}

export default AdminPage;