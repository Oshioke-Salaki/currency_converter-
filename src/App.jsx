import React, { useEffect, useState } from 'react'
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

function App() {
  const [cur1, setCur1] = useState('CAD')
  const [cur2, setCur2] = useState('USD')
  const [val, setVal] = useState('')
  const [output, setOutput] = useState('')

  useEffect(function(){
    async function fetchOut(){
      if(val==='') return
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${val}&from=${cur1}&to=${cur2}`)
      const data = await res.json()
      console.log(data)
      setOutput(data.rates[cur2])

    }

    fetchOut()
  }, [val, cur1, cur2])
  return (
    <div>
      <input type="text" value={val} onChange={(e)=> setVal(e.target.value)}/>
      <select value={cur1} onChange={(e)=>setCur1(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={cur2} onChange={(e)=>setCur2(e.target.value)}>
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