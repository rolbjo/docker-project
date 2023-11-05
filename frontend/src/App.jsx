import { useState, useEffect } from 'react'
import './App.scss'

function App() {
  const [randomQuestion, setRandomQuestion] = useState(null)
  const [questions, setQuestions] = useState({
    addition: [],
    subtraction: [],
    division: [],
    multiplication: [],
  })
  const [userAnswer, setUserAnswer] = useState('')
  const [displayMessage, setDisplayMessage] = useState(false)
  const [userName, setUserName] = useState('')
  const [welcomeMessage, setWelcomeMessage] = useState('')

  const fetchData = async (category) => {
    const response = await fetch(`/api/${category}`)
    const data = await response.json()
    setQuestions((prevQuestion) => ({ ...prevQuestion, [category]: data }))
  }

  useEffect(() => {
    fetchData('addition')
    fetchData('subtraction')
    fetchData('division')
    fetchData('multiplication')
  }, [])

  const handleNameSubmit = async () => {
    if (userName.trim() === '') {
      return
    }

    const response = await fetch('/addUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: userName }),
    })

    if (response.status === 200) {
      const data = await response.json()
      setWelcomeMessage(`Welcome, ${data.userName}!`)
      setUserName('')
    }
  }

  useEffect(() => {
    fetch('/getWelcomeMessage')
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          setWelcomeMessage(data.message)
        }
      })
      .catch((error) => {
        console.error('Error fetching welcome message:', error)
      })
  }, [])

  const getRandomQuestion = (category) => {
    if (questions[category].length > 0) {
      const randomNumber = Math.floor(
        Math.random() * questions[category].length
      )
      setRandomQuestion(questions[category][randomNumber])
      setDisplayMessage(false)
    }
  }

  const categories = ['addition', 'subtraction', 'division', 'multiplication']

  const createButtons = () => {
    return categories.map((category) => (
      <button
        style={{ marginLeft: 20 }}
        key={category}
        onClick={() => getRandomQuestion(category)}
      >
        Give me {category}
      </button>
    ))
  }

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value)
    setDisplayMessage(false)
  }

  const checkAnswer = () => {
    setDisplayMessage(true)
  }

  return (
    <div className='mainContainer'>
      <h1>Math Quiz</h1>
      <input
        type='text'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleNameSubmit}>Add User</button>
      <p>{welcomeMessage}</p>
      <div>{createButtons()}</div>
      {randomQuestion && (
        <div className='questionContainer'>
          <h2>Random Question:</h2>
          <p>{randomQuestion.question} =</p>
          <input type='text' value={userAnswer} onChange={handleInputChange} />
          <button onClick={checkAnswer}>Check Your Answer</button>
          {displayMessage && (
            <p>
              {userAnswer.trim() === ''
                ? 'Please enter an answer'
                : parseInt(userAnswer) === randomQuestion.answer
                ? 'That is correct!'
                : 'Try again'}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default App
