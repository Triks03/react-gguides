import { useState } from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup'

import './createForm.sass'
import img from '../../img/no-image-available.png';
import { decorationData } from '../../decorationDB';
import {ReactComponent as Upload} from '../../img/Vector.svg';
import { ReactComponent as Success } from '../../img/success.svg';


const CreateForm = ({handleSubmit}) => {

    const fileReader = new FileReader()
    const [validateFile, setValidateFile] = useState(false);
    const [labelClassName, setLabelClassName] = useState('create-character__label-file');
    const [imageDecorationClassName, setImageDecorationClassName] = useState('preview__image-decoration');
    const [render, setRender] = useState(null);

    const formik = useFormik({
        initialValues:{
            name: '',
            element: '',
        },
        validationSchema: Yup.object().shape({
            name: Yup.string()
                        .min(3, 'Required field')
                        .required('Required field'),
            element: Yup.string()
                        .required('Required field'),
            file: Yup.mixed().required('Required field'),
        }),
        onSubmit: values => {
            handleSubmit(values.name, values.file, values.element)
        }
    })

    fileReader.onloadend = () => {
        setValidateFile(fileReader.result);
    }

    const onFileLoaderBlur = () => {
        if(!validateFile){
            setLabelClassName(`create-character__label-file create-character__validate`)
            setImageDecorationClassName(`preview__image-decoration preview__image-decoration_error`)
        }
    }

    const validationImageDecoration = (decorationData, element) => {
        setImageDecorationClassName(`preview__image-decoration preview__image-decoration_${element}`);
        const renderDecoration = (decorationData, element) => {
            const decoration = decorationData.filter(item => item.title === element)
            const Image = decoration[0].img
            return (
                <div className="preview__element-block">
                    <Image className='preview__element'/>
                </div>
            )
        }
        const render = renderDecoration(decorationData, element);
        setRender(render)
    }

    return(
        <>
            <div className="create-character__wrapper">
                <div className="preview__wrapper">
                    <div className={validateFile ? imageDecorationClassName : imageDecorationClassName}></div>
                    <img 
                    src={validateFile ? validateFile : img} 
                    alt="img" 
                    className="preview__image" 
                    style={validateFile ? {'objectFit' : 'cover'} : {'objectFit' : 'contain'}} />
                    <div className="preview__decoration">
                        <p className="preview__title">{formik.values.name ? formik.values.name : 'Character name'}</p>
                    </div>
                    {render}
                </div>
                <div className="create-character__container">
                    <h3 className='create-character__title'>{'Create Character'}</h3>
                    <form className="create-character__form" onSubmit={formik.handleSubmit}>
                        <div className="create-character__row">
                            <label className='create-character__label' htmlFor="name">Name</label>
                            <input
                                id='name'
                                name='name'
                                className={formik.errors.name && formik.touched.name ? 'create-character__input create-character__validate' : 'create-character__input'}
                                type="text"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder='Enter character name' />
                            {formik.errors.name && formik.touched.name ? 
                                <div className="create-character__error create-character__animation">
                                    <p className="create-character__error-text">{formik.errors.name}</p>
                                </div> :
                                null}
                        </div>
                        <div className="create-character__row">
                            <label className='create-character__label' htmlFor="element">Element</label>
                            <select 
                                className={formik.errors.element && formik.touched.element ? 
                                'create-character__select create-character__validate' : 
                                'create-character__select'} 
                                name="element" 
                                id="element"
                                value={formik.values.element}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                onClick={() => {
                                    if(validateFile && formik.values.element){
                                        validationImageDecoration(decorationData, formik.values.element)
                                    }
                                }}>
                                    <option value="" disabled hidden>Choose character element</option>
                                    <option value="anemo">Anemo</option>
                                    <option value="geo">Geo</option>
                                    <option value="electro">Electro</option>
                                    <option value="dendro">Dendro</option>
                                    <option value="hydro">Hydro</option>
                                    <option value="pyro">Pyro</option>
                                    <option value="cryo">Cryo</option>
                            </select>
                            {formik.errors.element && formik.touched.element ? 
                                <div className="create-character__error create-character__animation">
                                    <p className="create-character__error-text">{formik.errors.element}</p>
                                </div> : null}
                        </div>
                        <div className="create-character__row">
                            <p className="create-character__label">Image</p>
                            <label className={validateFile ? labelClassName : labelClassName} htmlFor="image">
                                <Upload className='create-character__decoration'/>
                                Choose your image
                            </label>
                            <input
                            id='image'
                            name='image'
                            className={'create-character__file'}
                            type="file"
                            onChange={(e) => {
                                if(e.target.value){
                                    setLabelClassName(`create-character__label-file`)
                                }
                                if(e.target.value && formik.values.element){
                                    validationImageDecoration(decorationData, formik.values.element)
                                }
                                fileReader.readAsDataURL(e.target.files[0])
                                formik.setFieldValue("file", e.target.files[0])
                            }}
                            onClick={onFileLoaderBlur}
                            accept = '.jpg' />
                            {validateFile ? 
                            <div className="create-character__file-name-block create-character__animation">
                                <p className="create-character__file-name">
                                    {formik.values.file.name.length > 15 ? 
                                    `Chosen file: ${formik.values.file.name.slice(0, 15)}...jpg` : 
                                    `Chosen file: ${formik.values.file.name}`}
                                </p>
                            </div> : null}
                            
                        </div>
                        <div className="create-character__row">
                            <button className="create-character__button" type='submit'>Create character</button>
                            {formik.values.name && validateFile && formik.values.element ? 
                            <div className='create-character__success-block'>
                                <Success className='create-character__success'/>
                            </div> 
                            : null}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateForm;