import React, { useEffect, useState } from 'react'
import ViewUser from './ViewUser';

function UserManage() {
  const [data, setdata] = useState([])
  const getData = async () => {

    console.log('Added')
    const url = 'http://localhost:5007/api/user/getdata';
    const response = await fetch(url, {

      headers: {
        'Content-Type': 'application/json'
      },
    });
    const json = await response.json()
    console.log('Fetched all data', json)
    setdata(json)
  }
  useEffect(() => {
    getData()
  }, [])
  const [report, setreport] = useState({ ename: '', eemail: '', ephonenumber: '', eid: '' })
  const userreport = (use) => {
    let ename = use.name;
    let eemail = use.email;
    let ephonenumber = use.phonenumber
    let eid = use.id
    setreport({ ename, eemail, ephonenumber, eid })
    console.log('report', ename, eemail)
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    setTimeout(() => {
      modal.style.display="none"
    }, 5000);
  }
 
  
  return (
    <>

      <button id="myBtn" style={{display:'none'}}>Open Modal</button>


      <div id="myModal" class="modal">


        <div class="modal-content">
          <div className="modald">
          <h1 className='usemodal'>{report.ename}</h1>
          <h3 className='usemodal'>{report.eid}</h3>
          <h3 className='usemodal'>{report.eemail}</h3>
          <h3 className='usemodal'>{report.ephonenumber}</h3>
          </div>
        <div className="bottom">Automatically shut in 5 seconds</div>
        </div>
      </div>

      <div className='display'>
        <div className='headaccount'>Create Account</div>
        {data.length === 0 && "No Data To Display"}
        {data.map((note) => {
          return <ViewUser note={note} userreport={userreport} />
        })
        }
      </div>
    </>
  )
}

export default UserManage
