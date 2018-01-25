import React, {Component} from 'react';

class CreateCar extends Component {
    state = {
        make: '',
        model: '',
        year: '',
        mileage: ''
    }
    onChangeHandler = (e) => {
        switch(e.target.id){
            case 'make':
                this.setState({make: e.target.value})
                break
            case 'model':
                this.setState({model: e.target.value})            
                break
            case 'year':
                this.setState({year: Number(e.target.value)})
                break
            case 'mileage':
                this.setState({mileage: Number(e.target.value)})
                break                    
            default: 
                throw Error('Invalid ID')
        }
    }
    
    onClickHandler = () => {
        //TODO: POST TO API
        console.log("SHOULD POST:", this.state)
    }


    componentDidUpdate() {
        console.log(this.state)
    }

    render() {
        return(
            <div>
                <div>
                    Make: <input id='make' type='text' onChange = {this.onChangeHandler} />
                </div>
                <div>
                    Model: <input id='model' type='text' onChange = {this.onChangeHandler} />
                </div>
                <div>
                    Year: <input id='year' type='text' onChange = {this.onChangeHandler} />
                </div>
                <div>
                    Mileage: <input id='mileage' type='text' onChange = {this.onChangeHandler} />
                </div>
                <button onClick = {this.onClickHandler} > Create </button>
            </div>
        )
    }
}


export default CreateCar;