import React from 'react'
import blogOne from '../images/blog-1.jpg'
import blogTwo from '../images/blog-2.jpg'
import blogThree from '../images/blog-3.jpg'
import { IoCalendarNumberOutline, IoPersonOutline, IoArrowForward} from 'react-icons/io5'


function Blog() {
  return (
    <section className="section section-divider white blog" id="blog">
        <div className="container">

          <p className="section-subtitle">Latest Blog Posts</p>

          <h2 className="h2 section-title">
            This Is All About <span class="span">Foods</span>
          </h2>

          <p className="section-text">
            Food is any substance consumed to provide nutritional support for an organism.
          </p>

          <ul className="blog-list">

            <li>
              <div className="blog-card">

                <div className="card-banner">
                  <img src={blogOne} width="600" height="390" loading="lazy"
                    alt="What Do You Think About Cheese Pizza Recipes?" className="w-100"/>

                  <div className="badge">Pizza</div>
                </div>

                <div className="card-content">

                  <div className="card-meta-wrapper">

                    <a href="#" className="card-meta-link">
                      <IoCalendarNumberOutline className='icon' />

                      <time className="meta-info" datetime="2023-01-01">Jan 01 2023</time>
                    </a>

                    <a href="#" className="card-meta-link">
                      <IoPersonOutline className='icon' />

                      <p className="meta-info">Jonathan Smith</p>
                    </a>

                  </div>

                  <h3 className="h3">
                    <a href="#" className="card-title">What Do You Think About Cheese Pizza Recipes?</a>
                  </h3>

                  <p className="card-text">
                    Financial experts support or help you to to find out which way you can raise your funds more...
                  </p>

                  <a href="#" className="btn-link">
                    <span>Read More</span>

                    <IoArrowForward className='icon' />
                  </a>

                </div>

              </div>
            </li>

            <li>
              <div className="blog-card">

                <div className="card-banner">
                  <img src={blogTwo} width="600" height="390" loading="lazy"
                    alt="Making Chicken Strips With New Delicious Ingridents." className="w-100"/>

                  <div className="badge">Burger</div>
                </div>

                <div className="card-content">

                  <div className="card-meta-wrapper">

                    <a href="#" className="card-meta-link">
                      <IoCalendarNumberOutline className='icon' />

                      <time className="meta-info" datetime="2023-01-01">Jan 01 2023</time>
                    </a>

                    <a href="#" className="card-meta-link">
                      <IoPersonOutline className='icon' />

                      <p className="meta-info">Jonathan Smith</p>
                    </a>

                  </div>

                  <h3 className="h3">
                    <a href="#" className="card-title">Making Chicken Strips With New Delicious Ingridents.</a>
                  </h3>

                  <p className="card-text">
                    Financial experts support or help you to to find out which way you can raise your funds more...
                  </p>

                  <a href="#" className="btn-link">
                    <span>Read More</span>

                    <IoArrowForward className='icon' />
                  </a>

                </div>

              </div>
            </li>

            <li>
              <div className="blog-card">

                <div className="card-banner">
                  <img src={ blogThree } width="600" height="390" loading="lazy"
                    alt="Innovative Hot Chessyraw Pasta Make Creator Fact." className="w-100" />

                  <div className="badge">Chicken</div>
                </div>

                <div className="card-content">

                  <div className="card-meta-wrapper">

                    <a href="#" className="card-meta-link">
                      <IoCalendarNumberOutline className='icon' />

                      <time className="meta-info" datetime="2023-01-01">Jan 01 2023</time>
                    </a>

                    <a href="#" className="card-meta-link">
                      <IoPersonOutline className='icon' />

                      <p className="meta-info">Jonathan Smith</p>
                    </a>

                  </div>

                  <h3 className="h3">
                    <a href="#" className="card-title">Innovative Hot Chessyraw Pasta Make Creator Fact.</a>
                  </h3>

                  <p className="card-text">
                    Financial experts support or help you to to find out which way you can raise your funds more...
                  </p>

                  <a href="#" className="btn-link">
                    <span>Read More</span>

                    <IoArrowForward className='icon' />
                  </a>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
  )
}

export default Blog