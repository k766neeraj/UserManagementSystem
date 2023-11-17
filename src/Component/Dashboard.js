import React from 'react'
import { Link } from 'react-router-dom'


function Dashboard() {
    return (
        <>
            <div className='Main-Box'>
                <div className='container'>
                    <div className="usertab tab1">
                        <span className="material-symbols-outlined" style={{ fontSize: '45px' }}>
                            settings_account_box
                        </span>
                        <Link to="/usermanage" className='tab'>User Manage</Link>
                    </div>
                    <div className="createtab tab1">
                        <span className="material-symbols-outlined" style={{ fontSize: '45px' }}>
                            person_add
                        </span>
                        <Link to="/createaccount" className='tab'>Account Create</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
