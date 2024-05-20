import React from 'react';

class MyComponent extends React.Component{

    state = {
        name: 'megumin',
        address: 'axel',
        age: 14
    };

    handleClick(event) {
        console.log(">> click me ");
        this.setState({
            name: 'megumi',
            age: Math.floor((Math.random()*100) + 1)
        })

        // this.setState({
        //     age: Math.floor((Math.random()*100) + 1)
        // })
    }

    handleOnMouseOver(event) {
        // console.log(event)
    }
    //JSX
    render() {
        return(
            <div>

                My name is {this.state.name} and i'm {this.state.age}
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button> 
                <button onClick={(event) => {this.handleClick(event) }}>CLICKKKK</button>    
            </div>
        );    
    }
}

export default MyComponent;