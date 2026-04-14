import React, { useState } from 'react'
import { HistoryContext } from './HistoryContextCreate'

function HistoryContextProvider({children}) {
    const [history, setHistory] = useState([]);
    const frendHostory = {history, setHistory};

    return (
        <HistoryContext.Provider value={frendHostory}>{children}</HistoryContext.Provider>
    )
}

export default HistoryContextProvider

