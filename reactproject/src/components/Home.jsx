import React, { useState } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import './Home.css'

const Home = () => {

    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('ALL')

    return (
        <div>

            <Header
                search={search}
                setSearch={setSearch}
                setCategory={setCategory}
            />

            <Body
                search={search}
                category={category}
            />

            <Footer />

        </div>
    )
}

export default Home