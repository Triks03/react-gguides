
import { useNavigate } from 'react-router-dom';

import CharacterService from '../../services/CharacterService';

import MainBox from '../../components/mainBox/mainBox';
import CreateForm from '../../components/createForm/createForm';

import './CreateCharacterPage.sass'

const CreateCharacterPage = () => {

    const navigate = useNavigate();

    const handleSubmit = async (name, image, element) => {
        const resp = await CharacterService.createCharacter(name, image, element);
        console.log(resp);
        if(resp.status === 200) {
            return navigate('/character');
        }
    }



    return(
        <>
            <MainBox>
                <CreateForm handleSubmit={handleSubmit}/>
            </MainBox>
        </>
    )
}

export default CreateCharacterPage;