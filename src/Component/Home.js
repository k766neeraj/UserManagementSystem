import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='Home-Box'>
            <div className='heading'>
                <h1>
                    <Link to="/" className='home'>
                        <span class="material-symbols-outlined" style={{paddingRight:'16px'}}>
                            arrow_back
                        </span></Link>
                    Dashboard
                </h1>
            </div>
        </div>
    )
}

export default Home
