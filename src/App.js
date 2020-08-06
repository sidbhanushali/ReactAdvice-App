import React from 'react'

import './App.css'

class App extends React.Component {

state = {
    advice : ''
}

//this lifecycle method only executes on the first render of the component
componentDidMount(){
    //use this keyword for calling class methods
    //thanks to JS interpreter Hoisting all variables and functions to the top of the current scope
    this.getAdvice();
}

//we dont need a const to declare the arrow function because this is inside a JS class and so to use custom fuctions one must declare a class method 
getAdvice = async() => {
    await fetch('https://api.adviceslip.com/advice')
    .then(res=>res.json())
    .then(data=>{
            //  destructuring shortens data.slip.advice to advice
            const {advice} = data.slip
            this.setState({advice})
    })
    .catch(
        this.setState({advice: `😰 Something Went Wrong 😰`})
    )
}



    render(){
        const {advice} = this.state
        return(
            <div className='app'>
                <div className='card'>
                    <h1 className='heading'> {advice} </h1>
                    <button onClick={this.getAdvice} className='button'> <span>Get Advice! Wait✋🏽 at least 5 seconds⏳ </span> </button>
                    <br/>
                    <p> <a href='https://github.com/sidbhanushali/'>Siddharth Bhanushali © </a> </p>
                </div>
             </div>
        )
    }
}

export default App