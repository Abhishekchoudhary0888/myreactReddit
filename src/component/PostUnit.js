
import React from 'react';
import CommentUnit from './CommentUnit.js'

class PostUnit extends React.Component {
	constructor(props){
		super(props);

		this.voteCounter= this.voteCounter.bind(this);
		this.commentTextBoxFn= this.commentTextBoxFn.bind(this);
		this.commentSave = this.commentSave.bind(this);

		this.commentTextBox = '';
		this.state={
			vote: 0,
			commentTextBox: '',
			commentArray: []
		}
	}

	voteCounter(count){
		var vote= this.state.vote;

		this.setState({
			vote: vote + count
		})
	}

	commentTextBoxFn(e){
		var textareaValue= e.target.value;
		
		this.setState({
			commentTextBox: textareaValue
		})
	}

	commentSave(){

		var commentArray= this.state.commentArray;
		
		commentArray.push({
			commentTextBox: this.state.commentTextBox,
			repliesArray: null
		})

		this.setState({
			commentArray,
			commentTextBox: ''
		})
	}

	render(){
		return(
					<div className="unit" data-id="">
					    <div className="vote-block">
					        <span className="upvote" onClick={ ()=> {this.voteCounter(1)}}></span>
					        <span className="vote">{this.state.vote}</span>
					        <span className="downvote" onClick={ ()=> {this.voteCounter(-1)}}></span>
					    </div>
					    <div className="vote-msg">
					        <p className="title">{this.props.post.inputValue}</p>
					        <p className="description">{this.props.post.textareaValue}</p>
					        <div className="comment-txt">Comment section below</div>
					        
					        <textarea className="comment-box" value={this.state.commentTextBox} onChange={this.commentTextBoxFn}></textarea>
					        <span className="save-btn" onClick={this.commentSave}>Save</span>
					        <div className="all-comments">
					        	{
					        		this.state.commentArray.map((comment, index)=>{
					        			return <CommentUnit commentArray = {comment} />
					        		})
					        	}
					        </div>
					    </div>
					</div>
				
			)
	}
}

export default PostUnit;