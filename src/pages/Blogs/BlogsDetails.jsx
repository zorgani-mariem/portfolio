import React from 'react';
import {  Link, useLocation } from 'react-router-dom';

const BlogsDetails = () => {
  const location = useLocation();
  console.log(location)
  const { title, category, date, image, description } = location.state || {};

  if (!location.state) {
    return (
      <div>
        <h2 className="h2 article-title">Blog</h2>
        <p className="h2 article-title">Aucun détail de blog disponible. Veuillez retourner à la page des blogs.</p>
        <div className='sidebar-info'>
            <Link to="/blogs">
              <button className='info_more-btn22'>Back To Blogs</button>
            </Link>
          </div>

      </div>
    );
  }

  return (
    <section className="blog" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>
      <li className="blog-post-item">
        <figure className="blog-banner-box">
          <img src={image} alt={title} loading="lazy" />
        </figure>
        <div className="blog-content">
          <div className="blog-meta">
            <p className="blog-category">{category}</p>
            <span className="dot"></span>
            <time dateTime={date}>{date}</time>
          </div>
          <h3 className="h3 blog-item-title">{title}</h3>
          <p className="blog-text">{description}</p>
          <div className='sidebar-info'>
            <Link to="/blogs">
              <button className='info_more-btn22'>Back To Blogs</button>
            </Link>
          </div>
        </div>
      </li>
    </section>
  );
};

export default BlogsDetails;
