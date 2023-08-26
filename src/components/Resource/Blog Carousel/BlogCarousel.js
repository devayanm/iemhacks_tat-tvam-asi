import React from 'react'
import './BlogCarousel.css'
const BlogCarousel = () => {
    const data = [
        { id: 1, title: "suicide prevention", image: "https://www.helpguide.org/wp-content/uploads/2023/02/Suicide-Prevention.jpeg", link: "https://www.helpguide.org/articles/suicide-prevention/suicide-prevention.htm" },
        { id: 2, title: "never giveup on yourself", image: "https://www.success.com/wp-content/uploads/2017/04/15-Quotes-About-Never-Giving-Up.jpg", link: "https://www.success.com/15-inspiring-quotes-about-never-giving-up/" },
        { id: 3, title: "tips for mental health", image: "https://mhanational.org/sites/default/files/styles/hero_16_9_extra_extra_large_1800x1013/public/2023-02/Black-dreams-Black-joy.jpg.webp?itok=K5YjcYw7", link: "https://www.mhanational.org/31-tips-boost-your-mental-health" },
        { id: 4, title: "reasons to keep living", image: "https://i0.wp.com/post.psychcentral.com/wp-content/uploads/sites/4/2022/01/mature-asian-woman-eyes-closed-outdoors-meditating-732x549-thumbnail-732x549.jpg?w=1092", link: "https://psychcentral.com/health/reasons-to-stay-alive" },
    ];

    return (
        <div className="carousel-grid-container">
            {data.map((item) => (
                <div className="carousel-grid-item" key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                    <a href={item.link}>Read</a>
                </div>
            ))}
        </div>
    );
};

export default BlogCarousel