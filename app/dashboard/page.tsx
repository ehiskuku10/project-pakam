'use client'
import Table from './table'
import SideNav from './side-nav'
import EditUserModal from './edit-user-modal'
import DeleteUserModal from './delete-user-modal'
import styles from './index.module.css'
import Button from '../components/button'
import BackDrop from '../components/backdrop'
import React, { useEffect, useState, useRef } from 'react'
import { getUsers, updateUser, deleteUser } from '../api-requests'
import { CirclesWithBar } from 'react-loader-spinner'
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast'

export default function Dashboard() {
  let router = useRouter()

  const [state, setState] = useState({ 
    users: [],
    user_detail: {
      id: undefined,
      first_name: '',
      last_name: '',
      user_name: '',
    },
    user_id: null,
    show_edit_modal: false,
    show_delete_modal: false,
    fetch_count: 0,
    isLoading_edit: false,
    isLoading_delete: false,
    isLoading_page: true,
  })

  const initialized = useRef(false)

  useEffect(() => {
    if(!initialized.current) {
      initialized.current = true

      getUsers()
      .then(response => {
        if(response.status === 'success') {
          setState(state => ({
            ...state, 
            users: response.data.users,
            isLoading_page: false,
            show_delete_modal: false,
            isLoading_delete: false,
          }))
    
          toast.success(response.message)
        }else {
          toast.error(response.message)
        }
      })
    }
  }, [state.fetch_count])

  const getUserDetail = (user: any) => {
    setState(state => ({
      ...state,
      user_detail: user,
      show_edit_modal: true,
      show_delete_modal: false,
    }))
  }

  const getUserId = (user_id: any) => {
    setState(state => ({
      ...state,
      user_id,
      show_delete_modal: true,
      show_edit_modal: false,
    }))
  }

  const handleUpdate = async(body:any, id:number) => {
    setState({...state, isLoading_edit: true})
    let response = await updateUser(body, id)

    if(response.status === 'success') {
      initialized.current = false

      setState({
        ...state,
        show_edit_modal: false,
        fetch_count: state.fetch_count + 1,
        isLoading_edit: false,
      })

      toast.success(response.message)
    }else {
      setState({...state, isLoading_edit: false})
      toast.error(response.message)
    }
  }

  const handleDelete = async() => {
    setState({...state, isLoading_delete: true})
    let response = await deleteUser(state.user_id)

    if(response.status === 'success') {
      initialized.current = false

      setState(state => ({
        ...state,
        fetch_count: state.fetch_count + 1,
      }))

      toast.success(response.message)
    }else {
      setState({...state, isLoading_delete: false})

      toast.error(response.message)
    }
  }

  const handleCancel = () => {
    setState({...state, show_delete_modal: false})
  }
  
  return (
    <div className={styles.dashboard}>
      <SideNav />
      <div className={styles.dashboardPanel}>
        <div className={styles.dashboardHeader}>
          <div className={styles.dashboardHeaderText}>Assessment</div>
          <div className={styles.dashboardHeaderButton}>
            <Button
              title='create'
              css={{width: '140px', backgroundColor: '#005700'}}
              handleClick={() => router.push('/create-user', { scroll: false })}
            />
          </div>
        </div>
        {state.isLoading_page
          ? <div className={styles.dashboardLoader}>
              <CirclesWithBar
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
            </div>
          : <Table
              users={state.users}
              getUserDetail={getUserDetail} 
              getUserId={getUserId}
            />
        }
      </div>

      {
        state.show_edit_modal
        ? <BackDrop closeModal={() => setState({...state, show_edit_modal: false})}>
            <EditUserModal
              isLoading={state.isLoading_edit}
              user_detail={state.user_detail}
              handleUpdate={handleUpdate}
            />
          </BackDrop>
        : null
      }
      
      {
        state.show_delete_modal
        ? <BackDrop closeModal={() => setState({...state, show_delete_modal: false})}>
            <DeleteUserModal
              isLoading={state.isLoading_delete}
              handleCancel={handleCancel}
              handleDelete={handleDelete}
            />
          </BackDrop>
        : null
      }
    </div>
  )
}