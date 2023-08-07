
import { useEffect, useState } from 'react';

import MainBox from '../../components/mainBox/mainBox'
import CharacterList from '../../components/characterList/characterList';
import CharacterService from '../../services/CharacterService';

import './CharactersPage.sass'

const CharactersPage = () => {

    const [charactersData, setCharactersData] = useState();


    useEffect(() => {
        getAllCharacters().then(item => setCharactersData(item.data))
    }, [charactersData])

    const getAllCharacters = async () =>{
        const resp = await CharacterService.getCharacters()
        return resp
    }

    return(
        <>
            <MainBox>
                <CharacterList charactersData={charactersData}/>
            </MainBox>
        </>
    )
}

export default CharactersPage;