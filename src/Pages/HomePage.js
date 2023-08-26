import React from 'react'
import { Header, Features, BlogCarousel, VideosCarousel, ArticleCarousel } from '../components'

const HomePage = () => {
    return (
        <div>
            <Header />
            <Features />
            <BlogCarousel />
            <VideosCarousel />
            <ArticleCarousel />
        </div>
    )
}

export default HomePage
