import React, {useState, useRef, useEffect} from 'react'

const UseRef = () => {
    const [name, setName] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });

  return (
    <div>
        <input type="text" onChange={e => setName(e.target.value)}/>
        <h3>Name: {name}</h3>
        <h3>Times Rendered: {count.current}</h3>
    </div>
  )
}

export default UseRef