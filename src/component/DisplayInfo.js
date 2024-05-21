import React from 'react'

class DisplayInfo extends React.Component {
    render () {
        //destructuring array/object
        const { age, name } = this.props;
        //props
        return(
            <div>
                <div>My name is {name}</div>
                <div>My age is {age}</div>
            </div>
        )
    }

}


export default DisplayInfo;