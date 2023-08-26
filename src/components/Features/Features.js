import React from 'react'
import './Features.css'
// import image from "../../img/feature.jpg";

const Section = () => {
    return (
        <div className="section">
            <div className="content-container">
                <h2>Features</h2>
                <div className="grid-container">
                    <div className='grid-card'>
                        <span></span>
                        <h3>Peer support group</h3>
                        <p>We provide peer support groups for users to connect with others experiencing similar issues.</p>
                    </div>
                    <div className='grid-card'>
                        <span></span>
                        <h3>Self assesment quizzes</h3>
                        <p>Self-assessment quizzes evaluate mental health through questions on mood, anxiety, and stress.</p>
                    </div>
                    <div className='grid-card'>
                        <span></span>
                        <h3>Blogs, Article and Videos</h3>
                        <p>We provides a collection of informational articles and resources to help users learn about mental health and suicide prevention</p>
                    </div>
                    <div className='grid-card'>
                        <span></span>
                        <h3>Confidential Crisis Reporting</h3>
                        <p>We allows individuals to report their concerns or crises anonymously, without fear of judgment or repercussion</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;
