import React, { useCallback, useState, useEffect, useRef } from 'react'

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState(" ");

  // useRef
  const passwordRef = useRef(null)

  // password ganerator.
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllow) str += "0123456789"
    if (charAllow) str += "~`!@#$%^&*()-_+={}[]|\<>/?"

    for (let i = 0; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass);

  }, [length, numberAllow, charAllow, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllow, charAllow, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-xl font-semibold text-center my-3'>Password generator.</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input className='w-full outline-none py-2 px-3'
            type="text"
            value={password}
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 active:bg-blue-800'>Copy</button>
        </div><br />

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className='cursor-pointer'
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              id='numberInput'
              onChange={() => { setNumberAllow((prev) => !prev) }}
              className='cursor-pointer'
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              id='charInput'
              onChange={() => { setCharAllow((prev) => !prev) }}
              className='cursor-pointer'
            />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div><br />
      </div>

    </>
  )
}

export default App