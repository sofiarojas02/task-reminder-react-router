import { useContext, useEffect } from "react"
import '../../CSS/TodoSearch.css'


function TodoSearch({
    searhcValue,
    setSearhcValue,
    loading,
    params,
    setParams,
  }){

  const onSearchValueChange = (event) => {
    setSearhcValue(event.target.value);

    let params = {
      search: event.target.value,
    };
    setParams(params);
  };

  useEffect(() => {
    const search = params.get("search") ?? "";
    setSearhcValue(search);
  }, [params]);


  return(
        <input 
        className="todo__search"
        placeholder="Buscar"
        onChange={onSearchValueChange}
        value={searhcValue}
        disabled = {loading}
        ></input>

      
  )
}
export {TodoSearch}