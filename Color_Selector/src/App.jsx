import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState("olive");

  return (
    <div style={{ backgroundColor: color }} className='w-full h-screen duration-200'>
      <div className='fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor("red")} style={{ backgroundColor: "red" }} className='outline-none px-4 py-1 rounded-full text-white shadow-sm active:text-gray-400'>Red</button>

          <button onClick={() => setColor("green")} style={{ backgroundColor: "green" }} className='outline-none px-4 py-1 rounded-full text-white shadow-sm active:text-gray-400'>Green</button>

          <button onClick={() => setColor("lime")} style={{ backgroundColor: "lime" }} className='outline-none px-4 py-1 rounded-full text-white shadow-sm active:text-gray-400'>Lime</button>

          <button onClick={() => setColor("purple")} style={{ backgroundColor: "purple " }} className='outline-none px-4 py-1 rounded-full text-white shadow-sm active:text-gray-400'>Purple</button>

          <button onClick={() => setColor("blue")} style={{ backgroundColor: "blue" }} className='outline-none px-4 py-1 rounded-full text-white shadow-sm active:text-gray-400'>Blue</button>

          <button onClick={() => setColor("cyan")} style={{ backgroundColor: "cyan" }} className='outline-none px-4 py-1 rounded-full text-white shadow-sm active:text-gray-400'>Cyan</button>

          <button onClick={() => setColor("gray")} style={{ backgroundColor: "gray" }} className='outline-none px-4 py-1 rounded-full text-white shadow-sm active:text-gray-400'>Gray</button>

          <button onClick={() => setColor("violet")} style={{ backgroundColor: "violet" }} className='outline-none px-4 py-1 rounded-full text-white shadow-sm active:text-gray-400'>Violet</button>

          <button onClick={() => setColor("salmon")} style={{ backgroundColor: "salmon" }} className='outline-none px-4 py-1 rounded-full text-white shadow-sm active:text-gray-400'>Salmon</button>

          <button onClick={() => setColor("teal")} style={{ backgroundColor: "teal" }} className='outline-none px-4 py-1 rounded-full text-white shadow-sm active:text-gray-400'>Teal</button>

          <button onClick={() => setColor("chocolate")} style={{ backgroundColor: "chocolate" }} className='outline-none px-4 py-1 rounded-full text-white shadow-sm active:text-gray-400'>Chocolate</button>

          <button onClick={() => setColor("maroon")} style={{ backgroundColor: "maroon" }} className='outline-none px-4 py-1 rounded-full text-white shadow-sm active:text-gray-400'>Maroon</button>

        </div>
      </div>
    </div>
  )
}

export default App