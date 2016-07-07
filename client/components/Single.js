import React from 'react';
import Photo from './Photo.js';
import Comments from './Comments.js';

const Single = React.createClass({
  render(){
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
    const post  = this.props.posts[i];
    return(
      <div className="single-photo">
        <Photo {...this.props} i={i} post={post} />
        <Comments />
      </div>
    )
  }
});

export default Single;
