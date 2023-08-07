
import { Modal, Button } from 'rsuite'

import CharacterService from '../../services/CharacterService';

import './deleteCharacterModal.less'

const DeleteCharacterModal = ({open, handleClose, id, oldImage}) => {

    const deleteCharacter = async (id, oldImage) => {
        const resp = await CharacterService.deleteCharacter(id, oldImage)
        console.log(resp)
    }

    return(
        <>
            <Modal backdrop={true} keyboard={true} open={open} onClose={handleClose} autoFocus={false}>
                <Modal.Header>
                    <Modal.Title>Delete Character</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure? 
                    <br/>
                    Delete character?
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {
                        deleteCharacter(id, oldImage)
                        handleClose()
                    }}>
                    Delete
                    </Button>
                    <Button onClick={handleClose}>
                    Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
      </>
    )
}

export default DeleteCharacterModal;