'use client'
import Nav from '@/components/Nav/page'
import { logoutUser } from '@/redux/reducerSlices/userSlice';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const dashboard = () => {
    const dispatch = useDispatch();
    const { userDetails } = useSelector((state) => state.user);
    const router = useRouter();
  return (
    <>
        <Nav/>
        

        <button onClick={()=>{dispatch(logoutUser(userDetails)) && router.push('/')}}>Logout</button>

    </>
  )
}

export default dashboard