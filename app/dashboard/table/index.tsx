'use client'
import Button from '@/app/components/button';
import { IoIosRefresh } from "react-icons/io";
import './index.css'

export default function Table({ users, getUserDetail, getUserId }: any) {
  return (
    <div className={`Table`}>
      <div className='Table__Heading'>
        <div className='Table__Heading-refresh'>
          <IoIosRefresh />
          <div>Refresh</div>
        </div>
        <div className='Table__Heading-paginate'></div>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{width: '60px'}}><input type='checkbox' /></th>
            <th align='left'>First Name</th>
            <th align='left'>Last Name</th>
            <th align='left'>User Name</th>
            <th style={{width: '100px'}}><span>Action</span></th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user: any) => (
            <tr key={user.id}>
              <td><input type='checkbox' /></td>
              <td>
                {user.first_name}
              </td>
              <td>
                {user.last_name}
              </td>
              <td>
                {user.user_name}
              </td>
              <td className="Table__Action">
                <div>
                  <Button title='Update' handleClick={() => getUserDetail(user)} />
                  <Button title='Delete' handleClick={() => getUserId(user.id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}