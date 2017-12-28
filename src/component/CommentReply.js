

import React from 'react';

class CommentReply extends React.Component{

	render(){
		return(
				<div className="reply-comment-box">
				    <textarea></textarea>
				    <span className="save-comment">Save</span>
				    <span className="cancel-comment">Cancel</span>
				</div>
			)
	}
}

export default CommentReply;
