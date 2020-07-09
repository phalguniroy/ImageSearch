import React, { Component } from "react";

export default class SearchBar extends Component {

    state={
        term:''
    }

    onInputChange(event){
        console.log(event.target.value)
    }
    onFormSubmit =(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }
  render() {
    return (
      <div>
        <h1>Image Search</h1>
        <form onSubmit={this.onFormSubmit}>
        <div className="field">
          <div className="center">
          <div class="ui large icon input">
  <input type="text"  class='input' name="search" onChange={(e)=>this.setState({term:e.target.value})} placeholder="ex-car" />
  <i class="search icon"></i>
</div>
            
          </div>
        </div>
        </form>
        <h4>{this.state.term}</h4>
        
      </div>
    );
  }
}
