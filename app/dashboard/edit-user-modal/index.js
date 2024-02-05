'use client'
import React from 'react';
import TextInput from '../../components/text-input'
import Button from '../../components/button'
import Logo from '../../components/logo'
import styles from './index.module.css'
import { useState } from 'react'
import { CirclesWithBar } from 'react-loader-spinner'

export default function EditUserModal({ isLoading, user_detail, handleUpdate }) {
  let [state, setState] = useState({
    first_name: null,
    last_name: null,
    user_name: null,
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

  const validateInput = (body) => {
    let { first_name, last_name, user_name } = body

    if(first_name && last_name && user_name) {
      return true
    }else {
      return false
    }
  }

  const submitForm = async () => {
    let body = { ...state }

    if(validateInput(body)) {
      handleUpdate(body, user_detail.id)
    }else {
      alert('Incomplete Data! You missed out some fields')
      return
    }
  }

  return (
    <div className='Form__Container'>
      <div className='Form__Header'>
        <Logo />
        <div className='Form__Header-text'>Edit Account</div>
      </div>
      <div className='Form__Control'>
        <div className='Form__Field'>
          <label>First Name</label>
          <TextInput
            name='first_name'
            type='text'
            placeholder='Enter your first name'
            value={user_detail.first_name}
            handleBlurEvent={getFirstName}
          />
        </div>
        <div className='Form__Field'>
          <label>Last Name</label>
          <TextInput
            name='last_name'
            type='text'
            placeholder='Enter your last name'
            value={user_detail.last_name}
            handleBlurEvent={getLastName}
          />
        </div>
      </div>
      <div className='Form__Control' style={{justifyContent: 'flex-start'}}>
        <div className='Form__Field'>
          <label>User Name</label>
          <TextInput
            name='user_name'
            type='text'
            placeholder='Enter your user name'
            value={user_detail.user_name}
            handleBlurEvent={getUserName}
          />
        </div>
      </div>
      <div className='Form__Control'>
        {isLoading
          ? <CirclesWithBar
              height={50}
              width={50}
              outerCircleColor="#008300"
              innerCircleColor="#008300"
              barColor="#008300"
              ariaLabel="circles-with-bar-loading"
              wrapperStyle={{marginTop: '3rem'}}
              wrapperClass=""
              visible={true}
            />
          : <div className={styles.formButtonStyles}>
              <Button
                title='Save'
                handleClick={() => submitForm()}
              />
            </div>
        }
      </div>
    </div>
  );
}