import React, { useState } from 'react';

// class AddUserInfo extends React.Component{

//     state = {
//         name: 'megumin',
//         address: 'axel',
//         age: 14
//     };

//     handleOnChangeInput = (event) => {
//         this.setState({
//             name: event.target.value
//         })

//     }

//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })

//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         this.props.handleAddNewUser({
//             name: this.state.name,
//             age: this.state.age
//         });
//     }

//     render(){
//         return(
//             <>
//                  My name is {this.state.name} and i'm {this.state.age} 
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}> 
//                     <label>Your name: </label> 
//                     <input
//                         value={this.state.name}
//                         type="text"
//                         onChange={(event) => this.handleOnChangeInput(event)}
//                     />

//                     <label>Your age: </label> 
//                     <input
//                         value={this.state.age}
//                         type="text"
//                         onChange={(event) => this.handleOnChangeAge(event)}
//                     />
//                     <button>Submit</button>
//                 </form>
//             </>
//         )
//     }
// }

const AddUserInfo = (props)  => {
    // state = {
    //     name: 'megumin',
    //     address: 'axel',
    //     age: 14
    // };

    const [name, setName] = useState('megumin');
    const [address, setAddress] = useState('axel');
    const [age, setAge] = useState('14');

    const handleOnChangeInput = (event) => {
        // this.setState({
        //     name: event.target.value
        // })
        setName(event.target.value)

    }

    const handleOnChangeAge = (event) => {
        // this.setState({
        //     age: event.target.value
        // })
        setAge(event.target.value)

    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            name: name,
            age: age
        });
    }
    return (
            <>
                 My name is {name} and i'm {age} 
                <form onSubmit={(event) => handleOnSubmit(event)}> 
                    <label>Your name: </label> 
                    <input
                        value={name}
                        type="text"
                        onChange={(event) => handleOnChangeInput(event)}
                    />

                    <label>Your age: </label> 
                    <input
                        value={age}
                        type="text"
                        onChange={(event) => handleOnChangeAge(event)}
                    />
                    <button>Submit</button>
                </form>
            </>
    )
}

export default AddUserInfo;