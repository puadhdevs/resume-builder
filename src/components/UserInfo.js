import React from 'react'
import "./UserInfo.css"
function UserInfo({user}) {

    console.log("##### Userinfo state provider ####",user)


    return (
        <div className="userInfo">
            <div className="userInfo__first">
                <h1 className="userInfo__name">{user.fullName}</h1>
            </div>
            <hr />
            <div className="userInfo__second">
                <div className="userInfo__mobile">
                      <p>
                    <i className="fas fa-phone-alt"></i>
                        {user.mobile}
                        {user.alt_mobile && ", "} {user.alt_mobile && user.alt_mobile}
                    </p>
                </div>
                <di className="userInfo__email">
                    <p>
                      
                    <i className="fas fa-envelope"></i>
                        {user.email}  </p>
                </di>
                <div className="userInfo__address">
                      <p>
                        <i className="fas fa-map-marker-alt"></i>
                        <span>             
                            {user.address}  {user.address && ", "}
                            {user.city && user.city }  {user.city && ", "}
                            {user.pincode && user.pincode}  {user.pincode && ", "}
                            {user.state && user.state }
                        </span>
                       
                  </p>
                </div>

            </div>
        </div>
    )
}

export default UserInfo
