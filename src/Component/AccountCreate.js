import React, { useRef, useState } from 'react'


function AccountCreate() {
    const [userdata, setuserdata] = useState({ name: '', email: '', phonenumber: '', password: '', id: '' })
    const handleClick = async (e) => {
        e.preventDefault()
        console.log('Added')
        const url = 'http://localhost:5007/api/user/adduser';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: userdata.name, email: userdata.email, phonenumber: userdata.phonenumber, password: userdata.password, id: userdata.id })
        });
        const json = await response.json()
        setuserdata({ name: '', email: '', phonenumber: '', password: '', id: '' })
    }
    const onChange = (e) => {
        setuserdata({ ...userdata, [e.target.name]: e.target.value })
    }
    const boxRef = useRef(null);

    const toggleBox = () => {
        const boxElement = boxRef.current;
        if (boxElement) {
            boxElement.style.display = boxElement.style.display === 'none' ? 'block' : 'none';
        }
    };
    return (
        <>
            <button onClick={toggleBox} style={{ display: 'none' }}>
                Toggle Box
            </button>
            <div ref={boxRef} style={{ display: 'none' }}>
                {/* Content of the box */}
                <p>This is the content of the box.</p>
            </div>
            <div className='accountBox'>
                <div className='headaccount'>Create Account</div>
                <form onSubmit={handleClick} className='forms'>
                    <div className='user details1'>
                        <label htmlFor='name'>Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter Name" value={userdata.name} onChange={onChange} />
                    </div>
                    <div className='user details2'>
                        <label htmlFor='email'>Email</label>
                        <input type="email" name="email" id="email" placeholder='Enter Email' value={userdata.email} onChange={onChange} />
                    </div>
                    <div className='user details3'>
                        <label htmlFor='phonenumber'>Phone Number</label>
                        <input type="number" name="phonenumber" id="phonenumber" placeholder='Enter Phone Number' value={userdata.phonenumber} onChange={onChange} />
                    </div>
                    <div className='user details4'>
                        <label htmlFor='password'>Password</label>
                        <input type="password" name="password" id="password" placeholder='Enter Password' value={userdata.password} onChange={onChange} />
                    </div>
                    <div className='user details5'>
                        <label htmlFor='id'>ID</label>
                        <input type="number" name="id" id="id" placeholder='Enter ID' value={userdata.id} onChange={onChange} />
                    </div>
                    <button type="submit" className="btnsubmit" >Submit</button>
                </form>

            </div>
        </>
    )
}

export default AccountCreate
