import {ReactComponent as CloseSVG} from '../IconsSVG/close.svg'
import {ReactComponent as CheckSVG} from '../IconsSVG/check.svg'




function TodoIcon({type, color, onClick}){

    const iconTypes = {
        'check': (color) => <CheckSVG className='icon-svg' fill={color} />,
        'delete': (color) => <CloseSVG className='icon-svg' fill={color} />,
    }
    
    return(
        <span
        onClick={onClick}
        className={`icon__container icon__container--${type}`}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export {TodoIcon}