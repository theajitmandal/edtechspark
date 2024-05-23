'use client'
import { Button, Input } from '@nextui-org/react'
import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { changeHeight, changeWidth, changeShape, changeBackgroundColor } from '@/redux/reducerSlices/boxSlice'

const Box = () => {
    const {backgroundColor, height, width, borderRadius} = useSelector(state=>state.box)
    const dispatch = useDispatch()
  return (
    <div>
        <div style={{backgroundColor: backgroundColor, height: height, width: width, borderRadius: borderRadius}}>
        </div>
        <Button onClick={() => dispatch(changeWidth()) }>+Width</Button>
        <Button onClick={() => dispatch(changeHeight()) }>+Height</Button>
        <Button onClick={() => dispatch(changeShape()) }>Change to circle</Button>
        <Input oncChange={(e) => dispatch(changeBackgroundColor(e.target.value))} placeholder="Enter color"/>
    </div>
  )
}

export default Box