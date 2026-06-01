import { useStoragelistener } from "./useStoragelistener"
import '../../CSS/ChangeAlert.css'

function ChangeAlert({sincronize}){

    const {show, toggleShow, } = useStoragelistener(sincronize)


    if(show){
        return  (
            <div className="changeDetected__container">
                <div className="changeDetected--opacity"></div>
                <div className="changeDetected__info">
                    <h3>Se detectaron cambios en otra pagina</h3>
                    <p>¿Deseas recargar la pagina?</p>
                    <button
                    className="changeDetected__btn"
                    onClick={toggleShow}
                    >SI</button>
                </div>
            </div>
        )
    }else{
        return null
    }
}


export {ChangeAlert}