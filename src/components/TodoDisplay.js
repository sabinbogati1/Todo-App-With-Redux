import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {clearAllData} from "./../actions";

class TodoDisplay extends Component{

    displayList(){
        console.log("value: ", this.props.todo);

       return this.props.todo.map( (list,index)=>{
           return <li key={index}> {list} </li>
        })
    }

    render(){
        return(
            <div>

                <h3> To do List: </h3>
                <button onClick={this.props.clearAllData}> CLEAR ALL DATA </button>

                    <ul>
                        {this.displayList()}
                    </ul>



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
    return bindActionCreators({clearAllData},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoDisplay)  ;