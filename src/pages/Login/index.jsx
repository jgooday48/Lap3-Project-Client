import React from 'react'

const Login = () => {
    const [inputValue, setinputValue] = useState('')
    const [inputValuep, setinputValuep] = useState('')
    const [inputValuee, setinputValuee] = useState('')
    const inputRef = useRef()
    const navigate = useNavigate()
    const { setUser } = useAuth()
  
    useEffect(() => {
      inputRef.current.focus()
    },[])
  
    const handleInput = (e) => {
      console.log(e.target.value)
      setinputValue(e.target.value)
    }
  
    const handleInputp = (e) => {
      console.log(e.target.value)
      setinputValuep(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser(inputValue)
        navigate('/')
      }
  
  return (
    <>
        <h1>Login</h1>

        <form
      aria-label='sign in'
      onSubmit={handleSubmit}
    >

<label htmlFor="username" className="mr10">Username</label>
      <input
        type="text"
        id="username"


        autoComplete="off"
        value={inputValue}
        onChange={handleInput}
        ref={inputRef}
        required
      />

      <label htmlFor="password" className="mr10">Password</label>
      <input
        type="password"
        id="password"


        autoComplete="off"
        value={inputValuep}
        onChange={handleInputp}
        ref={inputRef}
        required
      />

      <input type="submit" />
    </form>


    
    </>
  )
}

export default Login
