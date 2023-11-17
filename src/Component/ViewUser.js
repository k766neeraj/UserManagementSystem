import React from 'react'

function ViewUser(props) {
    const {note,userreport} = props

    
  return (
    <>
    <div className='viewbox'>
        <div className="userd">
            <div className="viewd username">{note.name}</div>
            <div className="viewd useremail">{note.email}</div>
            <div className="viewd userphonenumber">{note.phonenumber}</div>
            <div className="viewd userid">{note.id}</div>
            <div className="viewd userdate">{note.date}</div>
            <div className="viewd userresult" onClick={()=>{userreport(note)}}>Report</div>
        </div>
    </div>
    
    </>
  )
}

export default ViewUser
