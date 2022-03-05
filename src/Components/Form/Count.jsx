import React from 'react'

export function Count(props) {
    
    const [count,setCount] = React.useState(1000);

    // componentLifeCycle - componentni yaratilshi(tug'ulishi),o'zgarishi va tugashi(o'lishi)


    // componentDidMount
    React.useEffect(()=>{
        console.log('componentDidMount');
    },[])

    // componentDidUpdate
    React.useEffect(()=>{
        console.log("componentDidUpdate");
    },[count])

    // componentWillUnmount
    React.useEffect(()=>{
        return ()=>{
            console.log("componentWillUnmount");
        }
    },[])

    return (
        <>
            <button onClick={()=>setCount((prev)=>prev+1)}>{count}</button>
        </>
    )
}
