import React from "react";

const Context = React.createContext();

function Provider({children}) {
    return <Context.Provider value="Bnima">{children}</Context.Provider>
}

export {Context,Provider}