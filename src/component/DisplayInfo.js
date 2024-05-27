import React from 'react'

class DisplayInfo extends React.Component {

    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render () {
        //destructuring array/object
        const { listUsers } = this.props;
        //props
        return(
            <div>
                <div>
                    <span onClick={() => {this.handleShowHide() }}> 
                        {this.state.isShowListUser === true ? "Hide list users" : "Show list users"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                {listUsers.map((user) => {
                     return (
                        <div key={user.id} className={+user.age > 16 ? "green" : "red"}>
                            <div>My name is {user.name}</div>
                            <div>My age is {user.age}</div>
                            <hr/>
                        </div>
                     )
                })}
                    </div>
                }      
            </div>
        )
    }

}


export default DisplayInfo;