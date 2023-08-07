
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import CharacterService from '../../services/CharacterService';

import MainBox from '../../components/mainBox/mainBox';
import UpdateCharacterForm from '../../components/updateCharacterForm/updateCharacterForm';

import './UpdateCharacterPage.sass'

const UpdateCharacterPage = () => {

    const {id} = useParams()

    const [charData, setCharData] = useState()

    useEffect(() => {

        getCharacter(id).then(item => setCharData(item.data));

    },[id])

    const getCharacter = async (id) => {
        const resp = await CharacterService.getOneCharacter(id)
        return resp
    }

    const navigate = useNavigate();

    const handleSubmit = async (name, element, oldImage, id, image) => {
        const resp = await CharacterService.updateCharacter(name, element, oldImage, id, image)
        console.log(resp);
        if(resp.status === 200) {
            return navigate('/character');
        }
        console.log('Work')
    }



    return(
        <>
            <MainBox>
                <UpdateCharacterForm handleSubmit={handleSubmit} charData={charData}/>
            </MainBox>
        </>
    )
}

export default UpdateCharacterPage;