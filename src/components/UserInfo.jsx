import React from 'react'
import Context from '../store/Store'
import { useContext } from 'react'
export default function UserInfo() {
const userinfo= useContext(Context)

    return (
    <div className='page2'>
        <div className='greet'>
            <h2>اهلا مجددا عزيزي </h2>
            <h4>هذه هي معلومات التسجيل الخاصة بك  </h4>
        </div>
        <br></br>
        <div >
        <h4> {userinfo.name} : الاسم</h4>
        </div>
        <div>
        <h4> {userinfo.password} : كلمة السر</h4>
        </div>
        <div>
        <h4> {userinfo.date} : تاريخ الميلاد </h4>
        </div>
    </div>
  )
}
