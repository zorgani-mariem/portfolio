import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BlogPost = ({ title, category, date, image, description }) => {
  const navigate=useNavigate()
  return (
    <li className="blog-post-item" onClick={()=>{
      navigate("/blogs/details", {
        state: { title, category, date, image, description }
      })}}>
      {/* <Link 
        to={{
          pathname: "/blogs/details",
          state: { title, category, date, image, description }
        }}
      > */}
        <figure className="blog-banner-box">
          <img src={image} alt={title} loading="lazy"/>
        </figure>
        <div className="blog-content">
          <div className="blog-meta">
            <p className="blog-category">{category}</p>
            <span className="dot"></span>
            <time dateTime={date}>{date}</time>
          </div>
          <h3 className="h3 blog-item-title">{title}</h3>
          <p className="blog-text">{description}</p>
        </div>
 
    </li>
  );
}

export default BlogPost;
