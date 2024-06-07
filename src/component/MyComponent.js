import React, { useState } from 'react';
import AddUserInfo from './AddUserInfo';
import DisplayInfo from './DisplayInfo';

// class MyComponent extends React.Component{

//     state = {
//         listUsers: [
//             {id: 1, name : "megumin", age: "14"},
//             {id: 2, name : "aqua", age: "17"},
//             {id: 3, name : "darkness", age: "18"},
//         ]
//     }

//     handleAddNewUser = (userObj) => {
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }

//     //JSX
//     render() {
//         const test = 'alo'
//         return(
//             <div>
//                 {test}
//                 <AddUserInfo
//                     handleAddNewUser={this.handleAddNewUser} 
//                 />
//                 <br/> <br/>
//                 <DisplayInfo
//                     listUsers={this.state.listUsers}
//                 />

//             </div>
//         );    
//     }
// }
 
const MyComponent = (props) => {

    const [listUsers, setListUsers ] = useState(
        [
            {id: 1, name : "megumin", age: "14"},
            {id: 2, name : "aqua", age: "17"},
            {id: 3, name : "darkness", age: "18"},
        ]

    )

    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers])
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
   }
    return (
        <div>
                <AddUserInfo
                    handleAddNewUser={handleAddNewUser} 
                />
                <br/> <br/>
                <DisplayInfo
                    listUsers={listUsers}
                />
        </div>
    )
}

export default MyComponent;