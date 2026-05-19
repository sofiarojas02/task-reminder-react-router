import React from 'react';


function useLocalStorage(itemName, initialValue){
    const [item, setItem] = React.useState(initialValue)
    const [loading, setLoadind] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [sincronizedItem, setSincronizedItem] = React.useState(true);

    
    React.useEffect(()=>{
        setTimeout(()=>{
            try{
                const localStorageItem = localStorage.getItem(itemName)
                let parsedItem


            if(!localStorageItem){
                localStorage.setItem(itemName, JSON.stringify(initialValue))
                parsedItem = initialValue
            }else{
                parsedItem = JSON.parse(localStorageItem)
                setItem(parsedItem)
            }
            setLoadind(false)
            setSincronizedItem(true)
        }catch (e){
            setError(true)
        }
        
    },1500)
  },[sincronizedItem])




    const saveItem = (newItem) =>{
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  const sincronizeItem = () => {
    setLoadind(true)
    setSincronizedItem(false)
  }

  return {
    item, 
    saveItem,
    loading,
    error,
    sincronizeItem,
}
}

export {useLocalStorage}