import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpOnClick = () => {
    // console.log("Upper Case was clicked" + text)
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to upperCase", "success")
  }

  const handleLowOnClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to loweCase", "success")
  }

  const handleOnClear = () => {
    let newText = ''
    setText(newText)
    props.showAlert("Text Area cleard", "success")
  }

  const reverseText = () => {
    //Split function splits the text into an array of words.
    // Reverse function reverse the array of words.
    //join function combines the reverese array again into a sentence.
    let newText = text.split('').reverse().join('')
    setText(newText)
    props.showAlert("Text has been reversed", "success")
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

  const copyText = () => {
    //It is navigator API.
    navigator.clipboard.writeText(text)
    props.showAlert("Text has been copied to the clipboard", "success")
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(' '))
    props.showAlert("Extra spaces has been successfully removes", "success")
  }

  const handleOnChange = (event) => {
    // console.log("On Change")
    setText(event.target.value)
  }

  const [text, setText] = useState('')
  // text = "new text" wrong way to change the state
  // setText("new text") correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my" onClick={handleUpOnClick}>
          Convert To UpperCase
        </button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my" onClick={handleLowOnClick}>
          Convert To LowerCase
        </button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my" onClick={handleOnClear}>
          Clear Text
        </button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my" onClick={reverseText}>
          Reverse
        </button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my" onClick={findWord}>
          Find Word
        </button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my" onClick={copyText}>
          Copy
        </button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === 'dark' ? 'white' : 'dark' }}
      >
        <h2>Your Text Summary</h2>
        <p>
          <b>
            {' '}
            {text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters
          </b>
        </p>
        <p>
          <b> {0.008 * text.split(' ').filter((element) => {return element.length !== 0}).length} Minutes read </b>
        </p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text: "Nothing to preview"}</p>
        
      </div>
    </>
  )
}
