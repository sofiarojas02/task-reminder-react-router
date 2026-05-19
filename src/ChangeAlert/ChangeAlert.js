import { withStoragelistener } from "./withStorageListener"

function ChangeAlert({show, toggleShow}){


    if(show){
        return  (
            <div>
                <p>Hubo cambios</p>
                <button
                
                onClick={toggleShow}
                
                >Refrescar</button>
            </div>
        )
    }else{
        return null
    }
}

const ChangeAlertWithStorageListener = withStoragelistener(ChangeAlert)

export {ChangeAlertWithStorageListener}