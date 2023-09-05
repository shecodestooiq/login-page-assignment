import React from 'react'
import Context from '../store/Store'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Form() {
const nav= useNavigate();
const userInfo = useContext(Context)
const handleSubmit = (e) => {e.preventDefault();
    if (userInfo.name===""){
        alert (' لطفا ادخل اسمك!');
        return;
    }
    if (userInfo.password ===""){
        alert ("لطفا ادخل كلمة السر!")
        return;
    }
    if (userInfo.date ===""){
        alert ("لطفا ادخل تاريخ الميلاد!")
        return;
    }
    alert("تم التسجيل!"); 
    nav("/UserInfo")
  };    

return (
    <div className='main'>
     <h1>!مرحبا</h1>  
          <h4>قم بتسجيل الدخول الى حسابك</h4>
        <form className='formm' onSubmit={handleSubmit}>
            <div className='Field'>
                <label>اسم المستخدم</label>
                <input type="text" onChange={e => userInfo.setName(e.target.value)}/>
            </div>
            <div className='Field'>
                <label>كلمة السر</label>
                <input type="text" onChange={e => userInfo.setPssword(e.target.value)}/>
            </div>
            <div className='Field'>
                <label>تاريخ ميلاد المستخدم</label>
                <input type="date" onChange={e => userInfo.setDate(e.target.value)}/>
            </div>
            <div className='Field'>
                <button type="submit"  >
                تسجيل الدخول
                </button>
            </div>
        </form>
    </div>
  )
}
