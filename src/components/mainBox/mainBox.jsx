

import './mainBox.sass'

const MainBox = (props) => {
    return (
        <div className="wrapper">
            {props.children}
        </div>
    )
}

export default MainBox;