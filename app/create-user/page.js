'use client'
import React from 'react';
import TextInput from '../components/text-input'
import Button from '../components/button'
import Logo from '../components/logo'
import Forgot from '../components/forgot'
import styles from './index.module.css'
import { useState } from 'react'
import { createUser } from '../api-requests'
import { useRouter } from 'next/navigation';
import { CirclesWithBar } from 'react-loader-spinner'
import { toast } from 'react-hot-toast'

export default function CreateUser() {
  let router = useRouter()

  let [state, setState] = useState({
    first_name: null,
    last_name: null,
    user_name: null,
    password: null,
    isLoading: false,
  });

  const getFirstName = (e) => {
    setState({...state, first_name: e.target.value})
  }

  const getLastName = (e) => {
    setState({...state, last_name: e.target.value})
  }

  const getUserName = (e) => {
    setState({...state, user_name: e.target.value})
  }

  const getPassword = (e) => {
    setState({...state, password: e.target.value})
  }

  const validateInput = (body) => {
    let { first_name, last_name, user_name, password } = body

    if(first_name && last_name && user_name && password) {
      return true
    }else {
      return false
    }
  }

  const submitForm = async () => {
    let body = { ...state }

    if(validateInput(body)) {
      setState({...state, isLoading: true})
      let response = await createUser(body)
      
      if(response.status === 'success') {
        localStorage.token = response.data.token

        toast.success(response.message)

        setTimeout(() => {
          router.push('/dashboard', { scroll: false })
        }, 2000)
      }else {
        toast.error(response.message)
        setState({...state, isLoading: false})

        if(response.data && response.data.isLoggedIn) {
          setTimeout(() => {
            router.push('/dashboard', { scroll: false })
          }, 2000)
        }
      }
    }else {
      setState({...state, isLoading: false})
      alert('Incomplete Data! You missed out some fields')
      return
    }
  }

  return (
    <div className='Form__Container'>
      <div className='Form__Header'>
        <Logo />
        <div className='Form__Header-text'>Create Account</div>
      </div>
      <div className='Form__Control'>
        <div className='Form__Field'>
          <label>First Name</label>
          <TextInput
            name='first_name'
            type='text'
            placeholder='Enter your first name'
            handleBlurEvent={getFirstName}
          />
        </div>
        <div className='Form__Field'>
          <label>Last Name</label>
          <TextInput
            name='last_name'
            type='text'
            placeholder='Enter your last name'
            handleBlurEvent={getLastName}
          />
        </div>
      </div>
      <div className='Form__Control'>
        <div className='Form__Field'>
          <label>User Name</label>
          <TextInput
            name='user_name'
            type='text'
            placeholder='Enter your user name'
            handleBlurEvent={getUserName}
          />
        </div>
        <div className='Form__Field'>
          <label>Password</label>
          <TextInput
            name='password'
            type='password'
            placeholder='Enter your password'
            handleBlurEvent={getPassword}
          />
        </div>
      </div>
      <div className='Form__Control'>
        {state.isLoading
        ? <CirclesWithBar
            height={50}
            width={50}
            outerCircleColor="#008300"
            innerCircleColor="#008300"
            barColor="#008300"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{margin: '3rem'}}
            wrapperClass=""
            visible={true}
          />
        : <div className={styles.formButtonStyles}>
            <Button title='Log In' handleClick={submitForm} />
          </div>
        }
      </div>
      <div className='Form__Footer'>
        <Forgot title='Or Login' to='/create-user' />
      </div>
    </div>
  );
}