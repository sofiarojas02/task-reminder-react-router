import React, { useEffect } from "react"

function withStoragelistener(WrapedComponent){
    return function WrapedComponentWithStorageListener(props){
        const [storageChange, setStorageChange] = React.useState(false)


        useEffect(()=>{
            const todosChanges = (change) => {
                if(change.key === 'TODOS_V1'){
                    setStorageChange(true)
                }
            }

            window.addEventListener('storage', todosChanges)

            return () => window.removeEventListener('storage', todosChanges)

        },[])


        const toggleShow = () => {
            setStorageChange(false)
            props.sincronize()
        }

        return(
            <WrapedComponent 
            show ={storageChange} 
            toggleShow = {toggleShow}  
            />
        )
    }
}

export {withStoragelistener}