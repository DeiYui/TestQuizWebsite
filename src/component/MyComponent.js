import React from 'react';
import UserInfo from './UserInfo';
import DisplayInfo from './DisplayInfo';

class MyComponent extends React.Component{

    state = {
        listUsers: [
            {id: 1, name : "megumin", age: "14"},
            {id: 2, name : "aqua", age: "17"},
            {id: 3, name : "darkness", age: "18"},
        ]
    }

 
    //JSX
    render() {

        return(
            <div>
                <UserInfo></UserInfo>
                <br/> <br/>
                <DisplayInfo
                listUsers={this.state.listUsers} />

            </div>
        );    
    }
}

export default MyComponent;