
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {decorationData} from '../../decorationDB.js'
import DeleteCharacterModal from '../../components/deleteCharacterModal/deleteCharacterModal.jsx';

import { ReactComponent as Delete } from '../../img/delete.svg';
import { ReactComponent as Update } from '../../img/update.svg';

import './characterList.sass'

const CharacterList = ({charactersData}) => {

    const [open, setOpen] = useState(false);
    const [id, setId] = useState(null);
    const [oldImage, setOldImage] = useState(null);

    const navigate = useNavigate()

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    function renderCharactersList(characterData) {
        const charactersList = characterData.map(item => {
            const renderDecoration = (decorationData, element) => {
                const decoration = decorationData.filter(item => item.title === element)
                const Image = decoration[0].img
                return (
                    <>
                        <div className="character-list__element-block">
                            <Image className='character-list__element'/>
                        </div>
                        <div className={`character-list__image-decoration character-list__image-decoration_${element}`}></div>
                    </>
                )
            }
            const renderDecorations = renderDecoration(decorationData, item.element);
            return (
                <li className="character-list__item" key={item.id} tabIndex={0}>
                    <Link className='character-list__link'>
                        <div className="character-list__image-wrapper">
                            {renderDecorations}
                            <img src={`http://localhost:5000/${item.image}`} alt="img" className="character-list__image" />
                        </div>
                    </Link>
                    <div className='character-list__title-wrapper'>
                        <button 
                            autoFocus = {false}
                            tabIndex={-1}
                            className="character-list__button"
                            onClick={() => {
                                setId(item.id)
                                setOldImage(item.image)
                                handleOpen()
                                }}>
                            <Delete className='character-list__button_delete'/>
                        </button>
                        <button 
                            className="character-list__button" 
                            autoFocus = {false}
                            tabIndex={-1}>
                            <p className="character-list__title" 
                                style={item.name.length > 10 ? {'fontSize' : '2rem'} : {'fontSize' : '3rem'}}>{item.name}
                            </p>
                        </button>
                        <button 
                            autoFocus = {false}
                            tabIndex={-1}
                            className="character-list__button"
                            onClick={() => {
                                navigate(`/admin-panel/update-character/${item.id}`)}}>
                            <Update className='character-list__button_update'/>
                        </button>
                    </div>
                </li>
                
            )
        })
        return (
            charactersList
        )
    }

    let rendersCharactersList;
    if(charactersData){
        rendersCharactersList = renderCharactersList(charactersData)
    }

    return(
        <div className='character-list__wrapper'>
            <DeleteCharacterModal handleClose={handleClose} open={open} id={id} oldImage={oldImage}/>
            <ul className="character-list__list">
                {rendersCharactersList}
            </ul>
        </div>
    )
}

export default CharacterList;