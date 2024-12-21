import React from 'react'
import Notification from './@notification/page'
import UserAnlytics from './@users/page'
import RevenueMatrice from './@revenue/page'
import ComplexLogin from './@login/page'


const ComplexLayout = ({children}) => {
    const isLoggedIn =true
    
  return isLoggedIn?(
    <div>
        <h1>{children}</h1>
        <div style={{display:'flex'}}>
        <div style={{display:'flex', flexDirection:'column'}} >
        <UserAnlytics />
        <RevenueMatrice/>
        </div>
        <div style={{display:'flex', flex:1}}>

        <Notification />
        </div>
        </div>
    </div>
  ): (<ComplexLogin /> )
}

export default ComplexLayout