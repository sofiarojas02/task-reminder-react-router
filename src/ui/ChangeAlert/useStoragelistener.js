import React, { useEffect } from "react"

function useStoragelistener(sincronize){
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
            sincronize()
        }

        return(
            {
            show:storageChange,
            toggleShow,
            }
        )
    }

export {useStoragelistener}