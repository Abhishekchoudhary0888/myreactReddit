
import React from 'react';
import CommentReply from './CommentReply.js'

class CommentUnit extends React.Component {

	constructor(props){
		super(props);
		
		this.replyClick= this.replyClick.bind(this);

		this.state={
			flag: false
		}
	}

	replyClick(){
		this.setState({
			flag: !this.state.flag
		})
	}


	render(){
		return(
				<div className="comment-unit">
					{this.props.commentArray.commentTextBox}
					
					{ !this.state.flag ? <span className="reply-comment" onClick={this.replyClick}>Reply</span>: ''}
				    { this.state.flag ? <CommentReply />: ''}
				</div>
			)
	}
}

export default CommentUnit;