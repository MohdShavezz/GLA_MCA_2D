import React, { useCallback, useState } from 'react'

const Child=({onInc})=>{

    return <>      
            <button onClick={onInc}>Inc from Child</button>
    </>
}

const Parent = () => {
    const [count, setCount] = useState(0)
    const [theme, setTheme] = useState('light')


    
    const handleInc = useCallback(() => {
        console.log('handleInc run...')
        setCount(count + 1)
    }, [count])

    
    return (
        <div>
              <p>Count: {count}</p>
              <p>Theme: {theme}</p>

            <button onClick={()=>setTheme(theme==='light'?'dark':'light')}>toggle theme</button>
            <Child onInc={handleInc}/>
        </div>
    )
}

export default Parent
