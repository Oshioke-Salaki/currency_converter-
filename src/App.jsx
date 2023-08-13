import React, { useEffect, useState } from 'react'
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

function App() {
  const [cur1, setCur1] = useState('CAD')
  const [cur2, setCur2] = useState('USD')
  const [val, setVal] = useState('1')
  const [output, setOutput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(function(){
    async function fetchOut(){
      setIsLoading(true)
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${val}&from=${cur1}&to=${cur2}`)
      const data = await res.json()
      setOutput(data.rates[cur2])
      setIsLoading(false)
    }
    if(cur1 === cur2) return setOutput(val)
    fetchOut()
  }, [val, cur1, cur2])
  return (
    <div>
      <input type="text" value={val} onChange={(e)=> setVal(e.target.value)} disabled={isLoading}/>
      <select value={cur1} onChange={(e)=>setCur1(e.target.value)} disabled={isLoading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={cur2} onChange={(e)=>setCur2(e.target.value)} disabled={isLoading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
    <p>{output} {cur2}</p>
    </div>
  );
}

export default App