

import './modalPreview.sass'
import img from '../../img/584f6bb4-a157-4d60-8635-13af3c019fab.jpg'

const ModalPreview = () => {

    return(
        <div className="preview-wrapper">
            <h3 className='preview-wrapper__title'>Character Preview</h3>
            <div className="card">
                <div className="card__image-wrapper">
                    <img className='card__image' src={img} alt="" />
                </div>
                <div className="card__text-wrapper">
                    <p className="card__text">Something</p>
                </div>
            </div>
        </div>
    )
}

export default ModalPreview;