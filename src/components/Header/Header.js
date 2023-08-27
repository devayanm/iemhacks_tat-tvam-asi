import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header className="header-container">
            <div className='header-row-1'>
                <div className="header-content-1">
                    <h2>Your Journey to Wellness</h2>
                    <p>"Your mental health matters."</p>
                </div>
            </div>
            <div className='header-row-2'>
                <div className="header-content-2">
                    <p>At EmpathConnect, we're not just a website — we're your partners in your journey towards wellness.
                        Our dedicated community, guided by a team of experts, is here to provide the resources, support, and
                        information you need. We encourage individuals to take that crucial first step towards a happier,
                        healthier life by joining us.</p>
                    <p>We're on a mission to shatter the stigma that surrounds mental health. Together, we're creating a world
                        where everyone can thrive, no matter what challenges they face. Let's embark on this journey together,
                        because you're never alone.</p>
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
