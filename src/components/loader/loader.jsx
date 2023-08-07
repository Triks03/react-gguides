

import './loader.scss'
import anemo from './icon/element_anemo.png'
import cryo from './icon/element_cryo.png'
import dendro from './icon/element_dendro.png'
import electro from './icon/element_electro.png'
import geo from './icon/element_geo.png'
import hydro from './icon/element_hydro.png'
import pyro from './icon/element_pyro.png'

const Loader = () => {


    return(
        <>
            <div id="page">
                <div id="blob-loader">
                    <div className="sp_loader__wrapper">
                        <div className="sp_slime__wrapper">
                            <div className="sp_slime__outline"></div>
                            <div className="sp_slime__outline_ends">
                                <div className="sp_slime__outline_end"></div>
                                <div className="sp_slime__outline_end"></div>
                            </div>
                            <div className="sp_slime__eyes">
                                <div className="sp_slime__eye"></div>
                                <div className="sp_slime__eye"></div>
                            </div>
                        </div>
                        <div className="sp_ground_line__wrapper">
                            <div className="sp_ground_line"></div>
                            <div className="sp_ground_line__ends">
                                <div className="sp_ground_line__end"></div>
                                <div className="sp_ground_line__end"></div>
                            </div>
                        </div>
                        <div className="sp_element__wrapper">
                            <div className="sp_elements">
                                <div className="sp_element">
                                    <div className="sp_element__icon">
                                        <img src={anemo} alt=""/>
                                    </div>
                                </div>
                                <div className="sp_element">
                                    <div className="sp_element__icon">
                                        <img src={cryo} alt=""/>
                                    </div>
                                </div>
                                <div className="sp_element">
                                    <div className="sp_element__icon">
                                        <img src={dendro} alt=""/>
                                    </div>
                                </div>
                                <div className="sp_element">
                                    <div className="sp_element__icon">
                                        <img src={electro} alt=""/>
                                    </div>
                                </div>
                                <div className="sp_element">
                                    <div className="sp_element__icon">
                                        <img src={geo} alt=""/>
                                    </div>
                                </div>
                                <div className="sp_element">
                                    <div className="sp_element__icon">
                                        <img src={hydro} alt=""/>
                                    </div>
                                </div>
                                <div className="sp_element">
                                    <div className="sp_element__icon">
                                        <img src={pyro} alt=""/>
                                    </div>
                                </div>
                                <div className="sp_element">
                                    <div className="sp_element__icon">
                                        <img src={anemo} alt=""/>
                                    </div>
                                </div>
                                <div className="sp_element">
                                    <div className="sp_element__icon">
                                        <img src={cryo} alt=""/>
                                    </div>
                                </div>
                                <div className="sp_element">
                                    <div className="sp_element__icon">
                                        <img src={dendro} alt=""/>
                                    </div>
                                </div>
                                <div className="sp_element">
                                    <div className="sp_element__icon">
                                        <img src={electro} alt=""/>
                                    </div>
                                </div>
                                <div className="sp_element">
                                    <div className="sp_element__icon">
                                        <img src={geo} alt=""/>
                                    </div>
                                </div>
                                <div className="sp_element">
                                    <div className="sp_element__icon">
                                        <img src={hydro} alt=""/>
                                    </div>
                                </div>
                                <div className="sp_element">
                                    <div className="sp_element__icon">
                                        <img src={pyro} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loader;