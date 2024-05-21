import React from 'react';
import UserInfo from './UserInfo';
import DisplayInfo from './DisplayInfo';

class MyComponent extends React.Component{

 
    //JSX
    render() {
        const myInfo = ['a', 'b', 'c']
        return(
            <div>
                <UserInfo></UserInfo>
                <br/> <br/>
                <DisplayInfo name="Aqua" age="18" />
                <DisplayInfo name="Megumin" age={14} myInfo={myInfo} />

            </div>
        );    
    }
}

export default MyComponent;