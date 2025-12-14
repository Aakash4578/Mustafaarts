import React, { useState } from 'react';
import "../../public/assets/Css/Portfolio.css";
import styles from "../../public/assets/Css/Heading.module.css";


function Portfolio() {
  const [filter, setFilter] = useState('all');       // Current filter
  const [visibleCount, setVisibleCount] = useState(8); // Default 9 items

  const events = [
    {
      category: 'thumbnails',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765716762/1_bxcurw.png',
      title: 'Pak Water & Energy Expo',
      desc: 'Pak Water & Energy Expo (PWE) focuses exclusively on Water and Energy sectors, gathering top industry leaders.'
    },
    {
      category: 'thumbnails',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765716762/2_zeldtg.png',
      title: 'ICAP CFO Conference',
      desc: 'Annual conference by ICAP, managed by Prime Event Management, connecting finance leaders nationwide.'
    },
    {
      category: 'thumbnails',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765716762/3_ijhs1z.png',
      title: 'Sports Event',
      desc: 'Experience thrilling sports competitions with top athletes and exciting matches.'
    },
    {
      category: 'thumbnails',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765716763/4_p7g4ih.png',
      title: 'Sports Event',
      desc: 'Experience thrilling sports competitions with top athletes and exciting matches.'
    },
    {
      category: 'thumbnails',
      img: 'assets/img/https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765716762/5_towvyo.png',
      title: 'Sports Event',
      desc: 'Experience thrilling sports competitions with top athletes and exciting matches.'
    },
    {
      category: 'thumbnails',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765716762/6_ivmtnz.png',
      title: 'Sports Event',
      desc: 'Experience thrilling sports competitions with top athletes and exciting matches.'
    },
    {
      category: 'thumbnails',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765716763/7_jokp6y.png',
      title: 'Sports Event',
      desc: 'Experience thrilling sports competitions with top athletes and exciting matches.'
    },
    {
      category: 'thumbnails',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765716763/8_chyrvw.png',
      title: 'Sports Event',
      desc: 'Experience thrilling sports competitions with top athletes and exciting matches.'
    },
   
    {
      category: 'thumbnails',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765716764/9_jnuwrk.png',
      title: 'Sports Event',
      desc: 'Experience thrilling sports competitions with top athletes and exciting matches.'
    },
    
  
    {
      category: 'photomanipulation',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720509/1_kk1vyq.jpg',
      title: 'Family Festival',
      desc: 'Fun-filled day for families with games, food stalls, music, and special performances.'
    },
    {
      category: 'photomanipulation',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720512/2_aar8zr.jpg',
      title: 'Corporate Seminar',
      desc: 'Exclusive corporate seminars focusing on growth strategies and leadership excellence.'
    },
    {
      category: 'photomanipulation',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720511/3_tl8kiz.jpg',
      title: 'Corporate Meet',
      desc: 'Network with industry leaders and explore new business opportunities and collaborations.'
    },
    {
      category: 'photomanipulation',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720518/4_ka28iu.jpg',
      title: 'Business Summit',
      desc: 'Top executives gathering to share insights on the future of global business and economy.'
    },
    {
      category: 'photomanipulation',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720512/5_aaw2yj.jpg',
      title: 'Business Summit',
      desc: 'Top executives gathering to share insights on the future of global business and economy.'
    },
    {
      category: 'photomanipulation',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720518/6_fk0rtb.jpg',
      title: 'Business Summit',
      desc: 'Top executives gathering to share insights on the future of global business and economy.'
    },
    {
      category: 'photomanipulation',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720515/7_lpcwpk.jpg',
      title: 'Business Summit',
      desc: 'Top executives gathering to share insights on the future of global business and economy.'
    },
    {
      category: 'photomanipulation',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720514/8_aqw9h6.jpg',
      title: 'Business Summit',
      desc: 'Top executives gathering to share insights on the future of global business and economy.'
    },
    {
      category: 'photomanipulation',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720515/9_maajfc.jpg',
      title: 'Business Summit',
      desc: 'Top executives gathering to share insights on the future of global business and economy.'
    },
    {
      category: 'photomanipulation',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720515/10_vwpvq0.jpg',
      title: 'Business Summit',
      desc: 'Top executives gathering to share insights on the future of global business and economy.'
    },
    {
      category: 'photomanipulation',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720516/11_kh2j4r.jpg',
      title: 'Business Summit',
      desc: 'Top executives gathering to share insights on the future of global business and economy.'
    },
    {
      category: 'photomanipulation',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720519/12_mbxnzn.jpg',
      title: 'Business Summit',
      desc: 'Top executives gathering to share insights on the future of global business and economy.'
    },
    {
      category: 'photomanipulation',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720516/13_dhpo6y.jpg',
      title: 'Business Summit',
      desc: 'Top executives gathering to share insights on the future of global business and economy.'
    },
     {
      category: 'creativeads',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720389/1_llc1l8.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718927/2_kutude.png',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718950/3_zitpxk.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718926/4_qjbtv6.png',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718931/5_ck0mxa.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718947/6_mvy4gb.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718930/7_deqsyp.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718927/8_nza983.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718929/9_przfam.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718929/10_pkxszx.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718931/11_jkjj24.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718943/12_a7r37t.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718949/13_zb7vai.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718938/14_ww1xcv.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718934/15_hnenlk.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718937/16_pgeipz.png',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718941/17_zdznwo.jpg',
      title: 'Cultural Festival',
      desc: 'Immerse yourself in vibrant cultures, traditions, food, and art exhibitions.'
    },
     {
      category: 'creativeads',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718941/18_xkru3z.png',
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
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720911/1_zsqri0.png',
      title: 'Concert Night',
      desc: 'Enjoy electrifying performances by your favorite artists at our mega concert event!'
    },
    {
      category: 'ebook',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720912/2_b6s4fw.png',
      title: 'Concert Night',
      desc: 'Enjoy electrifying performances by your favorite artists at our mega concert event!'
    },
    {
      category: 'ebook',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720913/3_euypje.png',
      title: 'Concert Night',
      desc: 'Enjoy electrifying performances by your favorite artists at our mega concert event!'
    },
    {
      category: 'ebook',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720913/4_mxpcvd.png',
      title: 'Concert Night',
      desc: 'Enjoy electrifying performances by your favorite artists at our mega concert event!'
    },
    {
      category: 'ebook',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720915/5_le5yfg.png',
      title: 'Concert Night',
      desc: 'Enjoy electrifying performances by your favorite artists at our mega concert event!'
    },
    {
      category: 'ebook',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720914/6_molecb.png',
      title: 'Concert Night',
      desc: 'Enjoy electrifying performances by your favorite artists at our mega concert event!'
    },
    {
      category: 'ebook',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720913/7_wdeyzf.png',
      title: 'Concert Night',
      desc: 'Enjoy electrifying performances by your favorite artists at our mega concert event!'
    },
    {
      category: 'ebook',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720915/8_wgylil.png',
      title: 'Concert Night',
      desc: 'Enjoy electrifying performances by your favorite artists at our mega concert event!'
    },
    {
      category: 'ebook',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720914/9_ad5zxn.png',
      title: 'Concert Night',
      desc: 'Enjoy electrifying performances by your favorite artists at our mega concert event!'
    },
    {
      category: 'ebook',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720915/10_yw81nh.png',
      title: 'Concert Night',
      desc: 'Enjoy electrifying performances by your favorite artists at our mega concert event!'
    },
    {
      category: 'ebook',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720918/11_hk07w7.png ',
      title: 'Concert Night',
      desc: 'Enjoy electrifying performances by your favorite artists at our mega concert event!'
    },

    {
      category: 'ebook',
      img: 'https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720919/13_mud3wy.png',
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
