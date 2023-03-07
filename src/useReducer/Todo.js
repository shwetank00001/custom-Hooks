import React from 'react'

const Todo = () => {

  const [data, setData] = React.useState('')

  function reducer(state,action){

    if(action.type === "ADD"){
      const newData = [...state.value, action.payload]
      return({
        ...state,
        value: newData
      })
    }
    if(action.type === "REMOVE"){
      const newData = state.value.filter( (item) => item.id !== action.payload)
      return({
        ...state,
        value: newData
      })
    }

  }

  const defaultState={
    value: []
  }

  const [state, dispatch] = React.useReducer(reducer, defaultState)

  const ele = state.value.map(function(item){
    return(
      <div key={item.id} className="button">
        <p>{item.data}</p>
        <button onClick={() => handleRemove(item)} >Remove</button>
      </div>
    )
  })

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(data){
      const newData = {id: new Date().getTime(), data}
      dispatch({type:"ADD", payload:newData})
    }
  }

  function handleRemove(item){
    if(data){
      dispatch({type:"REMOVE" , payload:item.id })
    }
  }
  return (
    <div className='main'>
      <h1>Todo app</h1>

      <form onSubmit={handleSubmit}>
        <input placeholder='add a todo..' value={data} onChange={(e) => setData(e.target.value)} />
        <button>Add</button>
      </form>

      {ele}

    </div>
  )
}

export default Todo