import React, { useState } from 'react';
import "../../public/assets/Css/Portfolio.css";
import styles from "../../public/assets/Css/Heading.module.css";


function Portfolio() {
  const [filter, setFilter] = useState('all');       // Current filter
  const [visibleCount, setVisibleCount] = useState(8); // Default 9 items

  const events = [
    {
      category: 'thumbnails',
      img: 'assets/img/Thumbnails/1.png',
      title: 'Pak Water & Energy Expo',
      desc: 'Pak Water & Energy Expo (PWE) focuses exclusively on Water and Energy sectors, gathering top industry leaders.'
    },
    {
      category: 'thumbnails',
      img: 'assets/img/Thumbnails/2.png',
      title: 'ICAP CFO Conference',
      desc: 'Annual conference by ICAP, managed by Prime Event Management, connecting finance leaders nationwide.'
    },
    {
      category: 'thumbnails',
      img: 'assets/img/Thumbnails/3.png',
      title: 'Sports Event',
      desc: 'Experience thrilling sports competitions with top athletes and exciting matches.'
    },
    {
      category: 'thumbnails',
      img: 'assets/img/Thumbnails/4.png',
      title: 'Sports Event',
      desc: 'Experience thrilling sports competitions with top athletes and exciting matches.'
    },
    {
      category: 'thumbnails',
      img: 'assets/img/Thumbnails/5.png',
      title: 'Sports Event',
      desc: 'Experience thrilling sports competitions with top athletes and exciting matches.'
    },
    {
      category: 'thumbnails',
      img: 'assets/img/Thumbnails/6.png',
      title: 'Sports Event',
      desc: 'Experience thrilling sports competitions with top athletes and exciting matches.'
    },
    {
      category: 'thumbnails',
      img: 'assets/img/Thumbnails/7.png',
      title: 'Sports Event',
      desc: 'Experience thrilling sports competitions with top athletes and exciting matches.'
    },
    {
      category: 'thumbnails',
      img: 'assets/img/Thumbnails/8.png',
      title: 'Sports Event',
      desc: 'Experience thrilling sports competitions with top athletes and exciting matches.'
    },
   
    {
      category: 'thumbnails',
      img: 'assets/img/Thumbnails/9.png',
      title: 'Sports Event',
      desc: 'Experience thrilling sports competitions with top athletes and exciting matches.'
    },
    
  
    {
      category: 'photomanipulation',
      img: 'assets/img/PhotoManipulation/1.jpg',
      title: 'Family Festival',
      desc: 'Fun-filled day for families with games, food stalls, music, and special performances.'
    },
    {
      category: 'photomanipulation',
      img: 'assets/img/PhotoManipulation/2.jpg',
      title: 'Corporate Seminar',
      desc: 'Exclusive corporate seminars focusing on growth strategies and leadership excellence.'
    },
    {
      category: 'photomanipulation',
      img: 'assets/img/PhotoManipulation/3.jpg',
      title: 'Corporate Meet',
      desc: 'Network with industry leaders and explore new business opportunities and collaborations.'
    },
    {
      category: 'photomanipulation',
      img: 'assets/img/PhotoManipulation/4.jpg',
      title: 'Business Summit',
      desc: 'Top executives gathering to share insights on the future of global business and economy.'
    },
    {
      category: 'photomanipulation',
      img: 'assets/img/PhotoManipulation/5.jpg',
      title: 'Business Summit',
      desc: 'Top executives gathering to share insights on the future of global business and economy.'
    },
    {
      category: 'photomanipulation',
      img: 'assets/img/PhotoManipulation/6.jpg',
      title: 'Business Summit',
      desc: 'Top executives gathering to share insights on the future of global business and economy.'
    },
    {
      category: 'photomanipulation',
      img: 'assets/img/PhotoManipulation/7.jpg',
      title: 'Business Summit',
      desc: 'Top executives gathering to share insights on the future of global business and economy.'
    },
    {
      category: 'photomanipulation',
      img: 'assets/img/PhotoManipulation/8.jpg',
      title: 'Business Summit',
      desc: 'Top executives gathering to share insights on the future of global business and economy.'
    },
    {
      category: 'photomanipulation',
      img: 'assets/img/PhotoManipulation/9.jpg',
      title: 'Business Summit',
      desc: 'Top executives gathering to share insights on the future of global business and economy.'
    },
    {
      category: 'photomanipulation',
      img: 'assets/img/PhotoManipulation/10.jpg',
      title: 'Business Summit',
      desc: 'Top executives gathering to share insights on the future of global business and economy.'
    },
    {
      category: 'photomanipulation',
      img: 'assets/img/PhotoManipulation/11.jpg',
      title: 'Business Summit',
      desc: 'Top executives gathering to share insights on the future of global business and economy.'
    },
    {
      category: 'photomanipulation',
      img: 'assets/img/PhotoManipulation/12.jpg',
      title: 'Business Summit',
      desc: 'Top executives gathering to share insights on the future of global business and economy.'
    },
    {
      category: 'photomanipulation',
      img: 'assets/img/PhotoManipulation/13.jpg',
      title: 'Business Summit',
      desc: 'Top executives gathering to share insights on the future of global business and economy.'
    },
     {
      category: 'creativeads',
      img: 'assets/img/CreativeAds/1.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'assets/img/CreativeAds/2.png',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'assets/img/CreativeAds/3.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'assets/img/CreativeAds/4.png',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'assets/img/CreativeAds/5.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'assets/img/CreativeAds/6.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'assets/img/CreativeAds/7.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'assets/img/CreativeAds/8.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'assets/img/CreativeAds/9.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'assets/img/CreativeAds/10.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'assets/img/CreativeAds/11.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'assets/img/CreativeAds/12.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'assets/img/CreativeAds/13.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'assets/img/CreativeAds/14.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'assets/img/CreativeAds/15.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'assets/img/CreativeAds/16.png',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'assets/img/CreativeAds/17.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'assets/img/CreativeAds/18.png',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
    
  
    {
      category: 'creativeads',
      img: 'assets/img/CreativeAds/1.jpg',
      title: 'Concert Night',
      desc: 'Enjoy electrifying performances by your favorite artists at our mega concert event!'
    },
    {
      category: 'ebook',
      img: 'assets/img/Ebook/1.png',
      title: 'Concert Night',
      desc: 'Enjoy electrifying performances by your favorite artists at our mega concert event!'
    },
    {
      category: 'ebook',
      img: 'assets/img/Ebook/2.png',
      title: 'Concert Night',
      desc: 'Enjoy electrifying performances by your favorite artists at our mega concert event!'
    },
    {
      category: 'ebook',
      img: 'assets/img/Ebook/3.png',
      title: 'Concert Night',
      desc: 'Enjoy electrifying performances by your favorite artists at our mega concert event!'
    },
    {
      category: 'ebook',
      img: 'assets/img/Ebook/4.png',
      title: 'Concert Night',
      desc: 'Enjoy electrifying performances by your favorite artists at our mega concert event!'
    },
    {
      category: 'ebook',
      img: 'assets/img/Ebook/5.png',
      title: 'Concert Night',
      desc: 'Enjoy electrifying performances by your favorite artists at our mega concert event!'
    },
    {
      category: 'ebook',
      img: 'assets/img/Ebook/6.png',
      title: 'Concert Night',
      desc: 'Enjoy electrifying performances by your favorite artists at our mega concert event!'
    },
    {
      category: 'ebook',
      img: 'assets/img/Ebook/7.png',
      title: 'Concert Night',
      desc: 'Enjoy electrifying performances by your favorite artists at our mega concert event!'
    },
    {
      category: 'ebook',
      img: 'assets/img/Ebook/8.png',
      title: 'Concert Night',
      desc: 'Enjoy electrifying performances by your favorite artists at our mega concert event!'
    },
    {
      category: 'ebook',
      img: 'assets/img/Ebook/9.png',
      title: 'Concert Night',
      desc: 'Enjoy electrifying performances by your favorite artists at our mega concert event!'
    },
    {
      category: 'ebook',
      img: 'assets/img/Ebook/10.png',
      title: 'Concert Night',
      desc: 'Enjoy electrifying performances by your favorite artists at our mega concert event!'
    },
    {
      category: 'ebook',
      img: 'assets/img/Ebook/11.png',
      title: 'Concert Night',
      desc: 'Enjoy electrifying performances by your favorite artists at our mega concert event!'
    },

    {
      category: 'ebook',
      img: 'assets/img/Ebook/13.png',
      title: 'Concert Night',
      desc: 'Enjoy electrifying performances by your favorite artists at our mega concert event!'
    },
    {
      category: 'ebook',
      img: 'assets/img/Ebook/13.png',
      title: 'Concert Night',
      desc: 'Enjoy electrifying performances by your favorite artists at our mega concert event!'
    },
  ];

  // Filtered events according to current filter
const filteredEvents =
  filter === 'all'
    ? [...events].sort(() => Math.random() - 0.5)
    : events.filter(e => e.category === filter);

  // Only show visibleCount items
  const visibleItems = filteredEvents.slice(0, visibleCount);

  return (
  <section className="brand-section-tab" id="portfolio">
  <div className="container text-center">

    {/* Heading */}
    <div className="mb-4"  data-aos="fade-up">
      <div className={styles.modernheading}>
        <h2>Portfolio</h2>
      </div>
    </div>

    {/* Filter Buttons */}
    <div className="filter-btns d-flex flex-wrap justify-content-center"  data-aos="fade-up">
      {['all', 'thumbnails', 'creativeads', 'photomanipulation', 'ebook'].map(cat => (
        <button
          key={cat}
          className={`btn filter-btn ${filter === cat ? 'active' : ''}`}
          onClick={() => {
            setFilter(cat);
            setVisibleCount(8);
          }}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>

    {/* Masonry Grid */}
    <div className="masonry-grid"  data-aos="fade-up">
      {visibleItems.map((event, index) => (
        <div
          key={index}
          className={`portfolio-item ${event.category} show masonry-item`}
        >
          <div className="event-image">
            <img
              src={event.img}
              alt={event.title}
              loading="lazy"
              decoding="async"
            />

            {/* Overlay */}
            {/* <div className="event-overlay">
              <h3>{event.title}</h3>
              <p>{event.category}</p>
            </div> */}
          </div>
        </div>
      ))}
    </div>

    {/* See All Button */}
    {visibleCount < filteredEvents.length && (
      <button
        className="btn allbutton mt-4"
        onClick={() => setVisibleCount(filteredEvents.length)}
       data-aos="fade-up">
        See All
      </button>
    )}
  </div>
</section>

  );
}

export default Portfolio;
