import React from 'react'
import './index.css'
import Button from '../../components/button'
import { CirclesWithBar } from 'react-loader-spinner'

export default function DeleteUserModal({ isLoading, handleDelete, handleCancel }: any) {
  return (
    <div  className='DeleteModal'>
      <div className='DeleteModal__Text DeleteModal__Text--primary'>{!isLoading ? 'Delete User' : 'Deleting User...'}</div>
      {!isLoading ? <div className='DeleteModal__Text DeleteModal__Text--secondary'>Are you sure you want to delete this user ?</div> : null }
      {isLoading
      ? <div className='DeleteModal__Loader'>
          <CirclesWithBar
            height={30}
            width={30}
            outerCircleColor="#008300"
            innerCircleColor="#008300"
            barColor="#008300"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{marginTop: '3rem'}}
            wrapperClass=""
            visible={true}
          />
        </div>
      : <div className='DeleteModal__Button'>
          <Button title='cancel' handleClick={handleCancel} />
          <Button title='delete' handleClick={handleDelete} />
        </div>
      }
    </div>
  )
}