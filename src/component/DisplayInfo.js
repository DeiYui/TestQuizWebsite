import React, { useState, useEffect } from 'react'
import './DisplayInfo.scss';
// import logo from './../logo.svg';

const DisplayInfo = (props) => {
    const { listUsers } = props;

    const [isShowHideListUser, setShowHideListUser] = useState(true);
    
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser)
    }

    useEffect(
        () => {
            if(listUsers.length === 4) {
                alert('nheiu qua')
            }
    }, [listUsers]
);


        return(
            <div className='display-info-container'>
                <div>
                    <span onClick={() => handleShowHideListUser()}>
                       {isShowHideListUser === true ? "hide" : "show"}
                    </span>
                </div>

                {isShowHideListUser &&
                    <div>
                    {listUsers.map((user) => {
                        return (
                            <div key={user.id} className={+user.age > 16 ? "green" : "red"}>
                            <div>My name is {user.name}</div>
                            <div>My age is {user.age}</div>
                        <div>
                            <button>Delete</button>
                        </div>
                            <hr/>
                        </div>
                     )
                })}
                    </div>
                }      
            </div>
        )
    
}


export default DisplayInfo;