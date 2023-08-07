import { useEffect } from 'react';

import './customSelect.sass'
import { ReactComponent as Delete } from '../../img/delete.svg';

const CustomSelect = ({handleClose, open, handleChooseElement, decorationData}) => {

    useEffect(() => {
        const modalClose = (e) => {
            if(e.keyCode === 27){
                handleClose()
            }
        }
        window.addEventListener('keydown', modalClose)
        return () => window.removeEventListener('keydown', modalClose)
    }, [])

    function renderElementButton(decData){
        const buttonList = decData.map(item => {
            const Image = item.img
            return(
                <button className="custom-select__element-button" key={item.id} onClick={() => {
                    handleChooseElement(item.title)
                    handleClose()}}>
                    <Image className='custom-select__element-icon'/>
                </button>
            )
        })
        return buttonList
    }

    const buttonsList = renderElementButton(decorationData);

    return(
        <>
            {open ? 
            <div className="custom-select__modal">
                <div className="custom-select__overlay" onClick={handleClose}></div>
                <div className="custom-select__modal-content">
                    <div className="custom-select__modal-header">
                        <button className='custom-select__button' onClick={handleClose}><Delete className="custom-select__close-icon"/></button>
                        <h3 className='custom-select__title'>Choose element</h3>
                    </div>
                    <div className="custom-select__body">
                            {buttonsList}
                        </div>
                </div>
            </div> : null}
        </>
    )
}

export default CustomSelect;