import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header className="header-container">
            <div className='header-row-1'>
                <div className="header-image-1"></div>
                <div className="header-content-1">
                    <h1>Empowering Mental Health and Wellness.</h1>
                </div>
            </div>
            <div className='header-row-2'>
                <div className="header-image-2"></div>
                <div className="header-content-2">
                    <p>Our platform is dedicated to providing access to resources, support, and a safe space for people to talk about their mental health experiences. We understand the importance of mental health and strive to provide evidence-based information and tools to help manage symptoms of anxiety, depression, trauma, and other challenges.
                    </p>
                    <p>We are here to support you on your journey to wellness. Our community is guided by a team of experts and we encourage individuals to take the first step towards a happier and healthier life by joining us. We are committed to breaking the stigma surrounding mental health and creating a world where everyone can thrive.<br />
                    </p>
                </div>
            </div>
            <div className='header-row-4'>
                <h1>Crisis Helpline</h1>
                <p>For <span className='emergency'> emergency situations</span>, call onto the designated emergency phone number.</p>
                <span className='phone'>1800-233-330</span>
            </div>
        </header>
    )
}

export default Header