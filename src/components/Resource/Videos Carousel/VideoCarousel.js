import React from 'react'
import './VideoCarousel.css'

const VideoCarousel = () => {
  const data = [
    { id: 1, title: "motivation to live", image: "https://i.ytimg.com/vi/9Z2DFhF6ICE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1SrKHDQpSxDh2V9XavOYsfe2fqw" , link: "https://www.youtube.com/watch?v=9Z2DFhF6ICE"},
    { id: 2, title: "TEDX video for motivation", image: "https://i.ytimg.com/vi/MiOVX7qKQ24/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBWXpqhu2ITVYsR23WnaP4sjLoIlw" , link: "https://www.youtube.com/watch?v=MiOVX7qKQ24"},
    { id: 3, title: "Message from suicidal survivor", image: "https://i.ytimg.com/vi/qVv_LlS3EiE/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLASr9FW2-pahUW39Zac9yFtgUTA3A" , link: "https://www.youtube.com/watch?v=qVv_LlS3EiE"},
    { id: 4, title: "How to manage your mental health", image: "https://i.ytimg.com/vi/rkZl2gsLUp4/hq720.jpg?sqp=-oaymwExCNAFEJQDSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYZSBaKEswDw==&rs=AOn4CLCD5NDLm4h1t6t7tiSd7Aup3DzmJA" , link: "https://youtu.be/rkZl2gsLUp4"},
  ];

  return (
    <div className="carousel-grid-container">
      {data.map((item) => (
        <div className="carousel-grid-item" key={item.id}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <a href={item.link}>Watch</a>
        </div>
      ))}
    </div>
  );
};

export default VideoCarousel