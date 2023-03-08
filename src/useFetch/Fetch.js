import React from 'react'

const Fetch = () => {
  
  const [value, setValue] = React.useState(0)
  const [poke, setPoke] = React.useState()


  React.useEffect(function(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
    .then((res) => res.json())
    .then((data) => setPoke(data))
  },[value])

  function add(){
    setValue(value+1)
  }

  return (
    <div>
      <h3>Click this count to generate Pokemon data for the respective count</h3>
      <button onClick={add}>Increment</button>
      <h3>{value}</h3>
      <pre>`{JSON.stringify(poke, null,2)}`</pre>
    </div>
  )
}

export default Fetch