import { useState } from "react"

const INIT_STATE = {
    name: ""
}

const DataBinding = () => {
    const [data, setData] = useState(INIT_STATE);
    const {name} = data

    const handleButtonClick = event => {
        console.log(event.target)
    }

    const handleChange = (event) => {
        setData({...data, name: event.target.value})
    }

    const handleFocus = (event) => {
      console.log("I am focus event")
    }

    const handleBlur = event => {
      if(!name) {
        alert("Please Enter Your name")
      }
      console.log("I am blur event")
    }

  return (
    <div>
        <h1>Events In React</h1>
        <button onClick={handleButtonClick}>Click Me</button>
        <br />
        <input type="text"  placeholder="Enter some Text" value={name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
        <br />
        <br />
        {/* <h3>Welcome {name}</h3> */}
        {name &&  <h3>Welcome {name}</h3>}
    </div>
  )
}

export default DataBinding