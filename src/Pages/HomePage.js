import React from 'react'
import { Features, BlogCarousel, VideosCarousel, Header } from '../components'

const HomePage = () => {
    return (
        <div>
            <Header />
            <Features />
            <BlogCarousel />
            <VideosCarousel />
        </div>
    )
}

export default HomePage