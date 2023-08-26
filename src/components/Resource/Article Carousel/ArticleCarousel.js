import React from 'react'
import './ArticleCarousel.css'

const ArticleCarousel = () => {
    const data = [
        { id: 1, title: "Item 1", image: "image-1.jpg" },
        { id: 2, title: "Item 2", image: "image-2.jpg" },
        { id: 3, title: "Item 3", image: "image-3.jpg" },
        { id: 4, title: "Item 4", image: "image-4.jpg" },
    ];

    return (
        <div className="carousel-grid-container">
            {data.map((item) => (
                <div className="carousel-grid-item" key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default ArticleCarousel