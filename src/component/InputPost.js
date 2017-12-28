
import React from 'react';
import CommentDom from './CommentDom.js';
import Close from './Close.js';


class InputPost extends React.Component {
	constructor(){
		super();

		this.inputValueFn = this.inputValueFn.bind(this);
		this.textareaValueFn = this.textareaValueFn.bind(this);
		this.fetchDetails= this.fetchDetails.bind(this);

		this.state = {
			inputValue: '',
			textareaValue: '',
			
			postArray: []
		}
	}

	inputValueFn(e){
		var input = e.target.value;

		this.setState({
			inputValue: input
		});
	}

	textareaValueFn(e){
		var textarea = e.target.value;

		this.setState({
			textareaValue: textarea
		})
	}

	fetchDetails(){
		var postArray = this.state.postArray;

		postArray.push({
			inputValue: this.state.inputValue,
			textareaValue: this.state.textareaValue
		})


		this.setState({
			postArray,
			inputValue: '',
			textareaValue: ''
		})
	}

	render (){
		return(
				<div>
					<div className="post-block">
			            <h2>Add a new Post</h2>
			            <input className="input-title" type="text" onChange={this.inputValueFn} value={this.state.inputValue} placeholder="Enter title"/>
			            <textarea className="textarea-msg" type="text" onChange={this.textareaValueFn} value={this.state.textareaValue} placeholder=""></textarea>
			            <button className="post" onClick={this.fetchDetails}>Post</button>
			        </div>

			        <Close />
			        <CommentDom  postArray = {this.state.postArray}/>
		        </div>
			)
	}

}

export default InputPost;