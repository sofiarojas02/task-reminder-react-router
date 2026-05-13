import React from 'react';


function useLocalStorage(itemName, initialValue){
    const [item, setItem] = React.useState(initialValue)
    const [loading, setLoadind] = React.useState(true);
    const [error, setError] = React.useState(false);

  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem

  React.useEffect(()=>{
    setTimeout(()=>{
        try{
            if(!localStorageItem){
                localStorage.setItem(itemName, JSON.stringify(initialValue))
                parsedItem = initialValue
            }else{
                parsedItem = JSON.parse(localStorageItem)
                setLoadind(false)
                setItem(parsedItem)
            }
        }catch (e){
            setError(true)
        }
        
    },2000)
  },[])




    const saveItem = (newItem) =>{
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return {
    item, 
    saveItem,
    loading,
    error,
}
}

export {useLocalStorage}