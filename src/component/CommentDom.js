
import React from 'react';
import PostUnit from './PostUnit.js';

class CommentDom extends React.Component {

	render(){
		return(
				<div className="main-section">
			        <h2>All Post:</h2>
			        <div className="unit-wrap">
			        	{
			        		this.props.postArray.map((post) => {
			        			return <PostUnit post={post} />
			        		})
			        	}
			        </div>
			    </div>
			)
	}
}

export default CommentDom;