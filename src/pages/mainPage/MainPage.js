import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeInputAction,  changeTitleWithParams, clearInput, deleteTitle } from '../../store/titleSlice'

function MainPage() {

    const dispatch = useDispatch()
    const { title, inputValue, text } = useSelector(state => state.titleReducer)

    const withParams = () => {
        dispatch(changeTitleWithParams(inputValue))
    }

    const changeInput = (event) => {
        dispatch(changeInputAction(event.target.value))
    }

  return ( 
    <>
        <h1>{title}</h1>
        <input className='input' value={inputValue} type="text" onChange={changeInput} />
        <button onClick={() => dispatch(clearInput())}>clear</button>
        <button onClick={withParams}>add</button>
        <button onClick={() => dispatch(deleteTitle())}>delete title</button>
        <p>{text}</p>

    </>
  )
}

export default MainPage