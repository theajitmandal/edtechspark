'use client'
import { Button, Input } from '@nextui-org/react'
import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { changeHeight, changeWidth, changeShape, changeBackgroundColor, shiftPosition } from '@/redux/reducerSlices/boxSlice'

const Box = () => {
    const {backgroundColor, height, width, borderRadius, right, top} = useSelector(state=>state.box)
    const dispatch = useDispatch()
    const generateArea = () => {
      if(borderRadius === '50%'){
        return Math.PI * (width/2) ** 2
      }else{
        return height*width
      }
    }
  return (
    <div className='flex items-center flex-col p-20'>
        <div style={{backgroundColor: backgroundColor, height: height, width: width, borderRadius: borderRadius, right: right, top: top, position: 'relative', margin: '200px'}}>
        </div>
        {generateArea()}
        <Button onClick={()=> dispatch(shiftPosition({value:100, type:'horizontal'}))}>Left</Button>
        <Button onClick={()=> dispatch(shiftPosition({value:-100, type:'horizontal'}))}>Right</Button>
        <Button onClick={()=> dispatch(shiftPosition({value:-100, type:'vertical'}))}>Top</Button>
        <Button onClick={()=> dispatch(shiftPosition({value:100, type:'vertical'}))}>Bottom</Button>
                
        <Button onClick={() => dispatch(changeWidth()) }>+Width</Button>
        <Button onClick={() => dispatch(changeHeight()) }>+Height</Button>
        <Button onClick={() => dispatch(changeShape()) }>Change to circle</Button>
        <Input oncChange={(e) => dispatch(changeBackgroundColor(e.target.value))} placeholder="Enter color"/>
    </div>
  )
}

export default Box