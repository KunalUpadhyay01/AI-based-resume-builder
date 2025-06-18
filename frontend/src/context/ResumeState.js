import React,{useState, useContext, createContext} from 'react'

const part1 = createContext();
function ResumeState({children}) {
    const [something, setSomething] = useState([]);
    const [real, setReal] = useState([]);
  return (
    <part1.Provider value={{something, setSomething}}>
        {children}
    </part1.Provider>
  )
}

export default ResumeState