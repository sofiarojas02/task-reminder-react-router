import React from "react"

// Esta es una de las maneras de pasar propiedades desde un padre (header) a los hijos (counter y search)

function TodoHeader ({children, loading}) {
    return(
        <header>
            {
                React.Children // sirve para recorrer los hijos dentro de un componente padre
                .toArray(children) // Convierte los hijos en array
                .map(child => React.cloneElement(child, {loading})) // map recorre, se clonan a los hijos y se les pasa la propiedad loading
                }
        </header>
    )
}

export {TodoHeader}