import { useMemo, useState } from "react"

const State = ()=>{

    const [counter, setCounter] = useState(0)




    return(
        <div>
        <button onClick={()=>setCounter(counter-1)}>Ayirish</button>
        {counter}
        
        <button onClick={()=>setCounter(counter+1)}>Qo'shish</button>
        </div>
    )
}

export default State