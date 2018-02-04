import React, { Component } from 'react';
import {addToDo} from "./../actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class TodoInput extends Component{

    constructor(props){
            super(props);
            this.state={
                inputValue:""
            }
    }

    handleonChangeInput(e){
        this.setState({
            inputValue:e.target.value
        })

    }

    handleOnClick(){
     //   console.log("The value is : " , this.state.inputValue );
     let value=this.state.inputValue;
     this.setState({
        inputValue:""
    })
    this.props.addToDo(value);



    }


 render(){

        return(
            <div>



                    <input type="text" onChange={this.handleonChangeInput.bind(this)} value={this.state.inputValue} />
                    <button onClick={this.handleOnClick.bind(this)} > SUBMIT </button>

            </div>

        )

    }


}

function mapStateToProps(state){
    return {
        todo:state.todoValue
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addToDo},dispatch);

}

export default connect(mapStateToProps,mapDispatchToProps)(TodoInput) ;