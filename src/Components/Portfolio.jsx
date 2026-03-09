import React, { useMemo, useState } from 'react';
import "../../public/assets/Css/Portfolio.css";
import styles from "../../public/assets/Css/Heading.module.css";

function Portfolio() {
  
  const [filter, setFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(8);

const [selectedImage, setSelectedImage] = useState(null);
const [selectedTitle, setSelectedTitle] = useState("");
  const optimizeCloudinary = (url, width = 900) => {
    if (!url) return "";
    const cleanUrl = url.trim();

    if (cleanUrl.includes("/upload/")) {
      return cleanUrl.replace(
        "/upload/",
        `/upload/f_auto,q_auto,w_${width},c_limit/`
      );
    }

    return cleanUrl;
  };

  const events = useMemo(
    () => [
      {
        id: "thumb-1",
        category: "thumbnails",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765716762/1_bxcurw.png"),
        title: "Pak Water & Energy Expo",
        desc: "Pak Water & Energy Expo (PWE) focuses exclusively on Water and Energy sectors, gathering top industry leaders."
      },
      {
        id: "thumb-2",
        category: "thumbnails",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765716762/2_zeldtg.png"),
        title: "ICAP CFO Conference",
        desc: "Annual conference by ICAP, managed by Prime Event Management, connecting finance leaders nationwide."
      },
      {
        id: "thumb-3",
        category: "thumbnails",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765716762/3_ijhs1z.png"),
        title: "Sports Event",
        desc: "Experience thrilling sports competitions with top athletes and exciting matches."
      },
      {
        id: "thumb-4",
        category: "thumbnails",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765716763/4_p7g4ih.png"),
        title: "Sports Event",
        desc: "Experience thrilling sports competitions with top athletes and exciting matches."
      },
      {
        id: "thumb-5",
        category: "thumbnails",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765716762/5_towvyo.png"),
        title: "Sports Event",
        desc: "Experience thrilling sports competitions with top athletes and exciting matches."
      },
      {
        id: "thumb-6",
        category: "thumbnails",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765716762/6_ivmtnz.png"),
        title: "Sports Event",
        desc: "Experience thrilling sports competitions with top athletes and exciting matches."
      },
      {
        id: "thumb-7",
        category: "thumbnails",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765716763/7_jokp6y.png"),
        title: "Sports Event",
        desc: "Experience thrilling sports competitions with top athletes and exciting matches."
      },
      {
        id: "thumb-8",
        category: "thumbnails",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765716763/8_chyrvw.png"),
        title: "Sports Event",
        desc: "Experience thrilling sports competitions with top athletes and exciting matches."
      },
      {
        id: "thumb-9",
        category: "thumbnails",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765716764/9_jnuwrk.png"),
        title: "Sports Event",
        desc: "Experience thrilling sports competitions with top athletes and exciting matches."
      },

      {
        id: "photo-1",
        category: "photomanipulation",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720509/1_kk1vyq.jpg"),
        title: "Family Festival",
        desc: "Fun-filled day for families with games, food stalls, music, and special performances."
      },
      {
        id: "photo-2",
        category: "photomanipulation",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720512/2_aar8zr.jpg"),
        title: "Corporate Seminar",
        desc: "Exclusive corporate seminars focusing on growth strategies and leadership excellence."
      },
      {
        id: "photo-3",
        category: "photomanipulation",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720511/3_tl8kiz.jpg"),
        title: "Corporate Meet",
        desc: "Network with industry leaders and explore new business opportunities and collaborations."
      },
      {
        id: "photo-4",
        category: "photomanipulation",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720518/4_ka28iu.jpg"),
        title: "Business Summit",
        desc: "Top executives gathering to share insights on the future of global business and economy."
      },
      {
        id: "photo-5",
        category: "photomanipulation",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720512/5_aaw2yj.jpg"),
        title: "Business Summit",
        desc: "Top executives gathering to share insights on the future of global business and economy."
      },
      {
        id: "photo-6",
        category: "photomanipulation",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720518/6_fk0rtb.jpg"),
        title: "Business Summit",
        desc: "Top executives gathering to share insights on the future of global business and economy."
      },
      {
        id: "photo-7",
        category: "photomanipulation",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720515/7_lpcwpk.jpg"),
        title: "Business Summit",
        desc: "Top executives gathering to share insights on the future of global business and economy."
      },
      {
        id: "photo-8",
        category: "photomanipulation",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720514/8_aqw9h6.jpg"),
        title: "Business Summit",
        desc: "Top executives gathering to share insights on the future of global business and economy."
      },
      {
        id: "photo-9",
        category: "photomanipulation",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720515/9_maajfc.jpg"),
        title: "Business Summit",
        desc: "Top executives gathering to share insights on the future of global business and economy."
      },
      {
        id: "photo-10",
        category: "photomanipulation",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720515/10_vwpvq0.jpg"),
        title: "Business Summit",
        desc: "Top executives gathering to share insights on the future of global business and economy."
      },
      {
        id: "photo-11",
        category: "photomanipulation",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720516/11_kh2j4r.jpg"),
        title: "Business Summit",
        desc: "Top executives gathering to share insights on the future of global business and economy."
      },
      {
        id: "photo-12",
        category: "photomanipulation",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720519/12_mbxnzn.jpg"),
        title: "Business Summit",
        desc: "Top executives gathering to share insights on the future of global business and economy."
      },
      {
        id: "photo-13",
        category: "photomanipulation",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720516/13_dhpo6y.jpg"),
        title: "Business Summit",
        desc: "Top executives gathering to share insights on the future of global business and economy."
      },

      {
        id: "creative-1",
        category: "creativeads",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720389/1_llc1l8.jpg"),
        title: "Cultural Festival",
        desc: "Immerse yourself in vibrant cultures, traditions, food, and art exhibitions."
      },
      {
        id: "creative-2",
        category: "creativeads",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718927/2_kutude.png"),
        title: "Cultural Festival",
        desc: "Immerse yourself in vibrant cultures, traditions, food, and art exhibitions."
      },
      {
        id: "creative-3",
        category: "creativeads",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718950/3_zitpxk.jpg"),
        title: "Cultural Festival",
        desc: "Immerse yourself in vibrant cultures, traditions, food, and art exhibitions."
      },
      {
        id: "creative-4",
        category: "creativeads",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718926/4_qjbtv6.png"),
        title: "Cultural Festival",
        desc: "Immerse yourself in vibrant cultures, traditions, food, and art exhibitions."
      },
      {
        id: "creative-5",
        category: "creativeads",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718931/5_ck0mxa.jpg"),
        title: "Cultural Festival",
        desc: "Immerse yourself in vibrant cultures, traditions, food, and art exhibitions."
      },
      {
        id: "creative-6",
        category: "creativeads",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718947/6_mvy4gb.jpg"),
        title: "Cultural Festival",
        desc: "Immerse yourself in vibrant cultures, traditions, food, and art exhibitions."
      },
      {
        id: "creative-7",
        category: "creativeads",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718930/7_deqsyp.jpg"),
        title: "Cultural Festival",
        desc: "Immerse yourself in vibrant cultures, traditions, food, and art exhibitions."
      },
      {
        id: "creative-8",
        category: "creativeads",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718927/8_nza983.jpg"),
        title: "Cultural Festival",
        desc: "Immerse yourself in vibrant cultures, traditions, food, and art exhibitions."
      },
      {
        id: "creative-9",
        category: "creativeads",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718929/9_przfam.jpg"),
        title: "Cultural Festival",
        desc: "Immerse yourself in vibrant cultures, traditions, food, and art exhibitions."
      },
      {
        id: "creative-10",
        category: "creativeads",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718929/10_pkxszx.jpg"),
        title: "Cultural Festival",
        desc: "Immerse yourself in vibrant cultures, traditions, food, and art exhibitions."
      },
      {
        id: "creative-11",
        category: "creativeads",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718931/11_jkjj24.jpg"),
        title: "Cultural Festival",
        desc: "Immerse yourself in vibrant cultures, traditions, food, and art exhibitions."
      },
      {
        id: "creative-12",
        category: "creativeads",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718943/12_a7r37t.jpg"),
        title: "Cultural Festival",
        desc: "Immerse yourself in vibrant cultures, traditions, food, and art exhibitions."
      },
      {
        id: "creative-13",
        category: "creativeads",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718949/13_zb7vai.jpg"),
        title: "Cultural Festival",
        desc: "Immerse yourself in vibrant cultures, traditions, food, and art exhibitions."
      },
      {
        id: "creative-14",
        category: "creativeads",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718938/14_ww1xcv.jpg"),
        title: "Cultural Festival",
        desc: "Immerse yourself in vibrant cultures, traditions, food, and art exhibitions."
      },
      {
        id: "creative-15",
        category: "creativeads",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718934/15_hnenlk.jpg"),
        title: "Cultural Festival",
        desc: "Immerse yourself in vibrant cultures, traditions, food, and art exhibitions."
      },
      {
        id: "creative-16",
        category: "creativeads",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718937/16_pgeipz.png"),
        title: "Cultural Festival",
        desc: "Immerse yourself in vibrant cultures, traditions, food, and art exhibitions."
      },
      {
        id: "creative-17",
        category: "creativeads",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718941/17_zdznwo.jpg"),
        title: "Cultural Festival",
        desc: "Immerse yourself in vibrant cultures, traditions, food, and art exhibitions."
      },
      {
        id: "creative-18",
        category: "creativeads",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765718941/18_xkru3z.png"),
        title: "Cultural Festival",
        desc: "Immerse yourself in vibrant cultures, traditions, food, and art exhibitions."
      },

      {
        id: "ebook-1",
        category: "ebook",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720911/1_zsqri0.png"),
        title: "Concert Night",
        desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
      },
      {
        id: "ebook-2",
        category: "ebook",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720912/2_b6s4fw.png"),
        title: "Concert Night",
        desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
      },
      {
        id: "ebook-3",
        category: "ebook",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720913/3_euypje.png"),
        title: "Concert Night",
        desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
      },
      {
        id: "ebook-4",
        category: "ebook",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720913/4_mxpcvd.png"),
        title: "Concert Night",
        desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
      },
      {
        id: "ebook-5",
        category: "ebook",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720915/5_le5yfg.png"),
        title: "Concert Night",
        desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
      },
      {
        id: "ebook-6",
        category: "ebook",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720914/6_molecb.png"),
        title: "Concert Night",
        desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
      },
      {
        id: "ebook-7",
        category: "ebook",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720913/7_wdeyzf.png"),
        title: "Concert Night",
        desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
      },
      {
        id: "ebook-8",
        category: "ebook",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720915/8_wgylil.png"),
        title: "Concert Night",
        desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
      },
      {
        id: "ebook-9",
        category: "ebook",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720914/9_ad5zxn.png"),
        title: "Concert Night",
        desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
      },
      {
        id: "ebook-10",
        category: "ebook",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720915/10_yw81nh.png"),
        title: "Concert Night",
        desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
      },
      {
        id: "ebook-11",
        category: "ebook",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720918/11_hk07w7.png "),
        title: "Concert Night",
        desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
      },
      {
        id: "ebook-13",
        category: "ebook",
        img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1765720919/13_mud3wy.png"),
        title: "Concert Night",
        desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
      },
      {
  id: "performance-static-1",
  category: "Performance-Focused Static Ads",
  img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1773090971/1_ynkwsl.png"),
  title: "Concert Night",
  desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
},
{
  id: "performance-static-2",
  category: "Performance-Focused Static Ads",
  img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1773090968/2_a9bqvo.png"),
  title: "Concert Night",
  desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
},
{
  id: "performance-static-3",
  category: "Performance-Focused Static Ads",
  img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1773090967/3_huweoq.png"),
  title: "Concert Night",
  desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
},
{
  id: "performance-static-4",
  category: "Performance-Focused Static Ads",
  img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1773090965/4_f90gpo.png"),
  title: "Concert Night",
  desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
},
{
  id: "performance-static-5",
  category: "Performance-Focused Static Ads",
  img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1773090961/7_iticge.png"),
  title: "Concert Night",
  desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
},
{
  id: "performance-static-6",
  category: "Performance-Focused Static Ads",
  img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1773090964/5_aihyfm.png"),
  title: "Concert Night",
  desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
},
{
  id: "performance-static-7",
  category: "Performance-Focused Static Ads",
  img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1773090963/10_ogw8ue.png"),
  title: "Concert Night",
  desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
},
{
  id: "performance-static-8",
  category: "Performance-Focused Static Ads",
  img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1773090963/6_mcdyvw.png"),
  title: "Concert Night",
  desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
},
{
  id: "performance-static-9",
  category: "Performance-Focused Static Ads",
  img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1773090960/8_kd6xlc.png"),
  title: "Concert Night",
  desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
},
{
  id: "performance-static-10",
  category: "Performance-Focused Static Ads",
  img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1773090959/9_mfmyec.png"),
  title: "Concert Night",
  desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
},
{
  id: "performance-static-11",
  category: "Performance-Focused Static Ads",
  img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1773090959/11_zooimo.png"),
  title: "Concert Night",
  desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
},
{
  id: "performance-static-12",
  category: "Performance-Focused Static Ads",
  img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1773090958/13_i7t4vj.png"),
  title: "Concert Night",
  desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
},
{
  id: "performance-static-13",
  category: "Performance-Focused Static Ads",
  img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1773090957/16_racr29.png"),
  title: "Concert Night",
  desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
},
{
  id: "performance-static-14",
  category: "Performance-Focused Static Ads",
  img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1773090957/14_eq0nde.png"),
  title: "Concert Night",
  desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
},
{
  id: "performance-static-15",
  category: "Performance-Focused Static Ads",
  img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1773090957/12_sbgpl4.png"),
  title: "Concert Night",
  desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
},
{
  id: "performance-static-16",
  category: "Performance-Focused Static Ads",
  img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1773090952/23_jvyupz.png"),
  title: "Concert Night",
  desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
},
{
  id: "performance-static-17",
  category: "Performance-Focused Static Ads",
  img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1773090955/15_owmapo.png"),
  title: "Concert Night",
  desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
},
{
  id: "performance-static-18",
  category: "Performance-Focused Static Ads",
  img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1773090949/18_thiyjv.png"),
  title: "Concert Night",
  desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
},
{
  id: "performance-static-19",
  category: "Performance-Focused Static Ads",
  img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1773090949/21_bjwd88.png"),
  title: "Concert Night",
  desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
},
{
  id: "performance-static-20",
  category: "Performance-Focused Static Ads",
  img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1773090946/19_nnjhlw.png"),
  title: "Concert Night",
  desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
},
{
  id: "performance-static-21",
  category: "Performance-Focused Static Ads",
  img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1773090947/20_x3vxsr.png"),
  title: "Concert Night",
  desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
},
{
  id: "performance-static-22",
  category: "Performance-Focused Static Ads",
  img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1773090945/17_nvjeui.png"),
  title: "Concert Night",
  desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
},
{
  id: "performance-static-23",
  category: "Performance-Focused Static Ads",
  img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1773090941/22_ff3vk9.png"),
  title: "Concert Night",
  desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
},
{
  id: "performance-static-24",
  category: "Performance-Focused Static Ads",
  img: optimizeCloudinary("https://res.cloudinary.com/dsn5tn9kz/image/upload/v1773090939/24_mzrgen.png"),
  title: "Concert Night",
  desc: "Enjoy electrifying performances by your favorite artists at our mega concert event!"
},
    ],
    []
  );

  const categories = [
    { value: "all", label: "All" },
    { value: "thumbnails", label: "Thumbnails" },
    { value: "creativeads", label: "Creative Ads" },
    { value: "photomanipulation", label: "Photo Manipulation" },
    { value: "ebook", label: "Ebook" },
    { value: "Performance-Focused Static Ads", label: "Performance-Focused Static Ads" }
  ];

  const shuffledAllEvents = useMemo(() => {
    const arr = [...events];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor((i * 13 + 5) % arr.length);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [events]);

  const filteredEvents = useMemo(() => {
    if (filter === "all") return shuffledAllEvents;
    return events.filter((event) => event.category === filter);
  }, [filter, events, shuffledAllEvents]);

  const visibleItems = filteredEvents.slice(0, visibleCount);

  return (
    <section className="brand-section-tab" id="portfolio">
      <div className="container text-center">
        <div className="mb-4" data-aos="fade-up">
          <div className={styles.modernheading}>
            <h2>Portfolio</h2>
          </div>
        </div>

        <div className="filter-btns d-flex flex-wrap justify-content-center" data-aos="fade-up">
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={`btn filter-btn ${filter === cat.value ? "active" : ""}`}
              onClick={() => {
                setFilter(cat.value);
                setVisibleCount(8);
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="masonry-grid" data-aos="fade-up">
          {visibleItems.map((event, index) => (
            <div
              key={event.id}
              className={`portfolio-item ${event.category} show masonry-item`}
            >
              <div className="event-image">
               <img
  src={event.img}
  // alt={event.title}
  // title={event.title}
  loading={index < 4 ? "eager" : "lazy"}
  fetchPriority={index < 2 ? "high" : "auto"}
  decoding="async"
  onClick={() => {
    setSelectedImage(event.img);
    setSelectedTitle(event.title);
  }}
  className="preview-clickable"
/>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < filteredEvents.length && (
          <button
            className="btn allbutton mt-4"
            onClick={() => setVisibleCount(filteredEvents.length)}
          >
            See All
          </button>
        )}
      </div>
      {selectedImage && (
  <div
    className="image-preview-modal"
    onClick={() => {
      setSelectedImage(null);
      setSelectedTitle("");
    }}
  >
    <div
      className="image-preview-content"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="image-preview-close"
        onClick={() => {
          setSelectedImage(null);
          setSelectedTitle("");
        }}
      >
        ×
      </button>

      <img
        src={selectedImage}
        alt={selectedTitle}
        className="image-preview-full"
      />

      {/* <h4 className="image-preview-title">{selectedTitle}</h4> */}
    </div>
  </div>
)}
    </section>

    
  );
  
}

export default Portfolio;	