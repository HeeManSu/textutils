import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpOnClick = () => {
    // console.log("Upper Case was clicked" + text)
    let newText = text.toUpperCase()
    setText(newText)
  }

  const handleLowOnClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
  }

  const handleOnClear = () => {
    let newText = ''
    setText(newText)
  }

  const reverseText = () => {
    //Split function splits the text into an array of words.
    // Reverse function reverse the array of words.
    //join function combines the reverese array again into a sentence.
    let newText = text.split('').reverse().join('')
    setText(newText)
  }

  const findWord = () => {
    let word = prompt('Enter the word you want to search')
    let newText = text.includes(word)
    if (newText === true) {
      setText('True')
    } else {
      setText('False')
    }
  }

  const handleOnChange = (event) => {
    // console.log("On Change")
    setText(event.target.value)
  }

  const [text, setText] = useState('Enter text here')
  // text = "new text" wrong way to change the state
  // setText("new text") correct way to change the state
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpOnClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowOnClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleOnClear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={reverseText}>
          Reverse
        </button>
        <button className="btn btn-primary mx-2" onClick={findWord}>
          Find Word
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          <b>
            {' '}
            {text.split(' ').length} words and {text.length} characters
          </b>
        </p>
        <p>
          <b> {0.008 * text.split(' ').length} Minutes read </b>
        </p>

        <h2>Preview</h2>
        <p>{text}</p>
        <br />
      </div>
    </>
  )
}
