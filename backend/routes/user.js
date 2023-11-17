const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/getdata',(req,res)=>{
  try {
    const jsondata = fs.readFileSync('data.json')
    const data = JSON.parse(jsondata)
    console.log('gatdata',data)
    res.json(data).status(200)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
  
})

router.post('/adduser', async (req, res) => {
  try {
    // Read the existing data from the JSON file

    const data = fs.readFileSync('data.json')

    const { name, email, phonenumber, password, id } = req.body
    const udate = new Date()
    const date = `${udate.toDateString()}`
    const existingData = JSON.parse(data);
    // Add new data to the existing data
    existingData.push(
      { name, email, phonenumber, password, id, date }
    );
    const jsonString = JSON.stringify(existingData);
    console.log('sd', jsonString)
    // Write the updated data back to the JSON file
    fs.writeFileSync('data.json', jsonString, 'utf-8', (err) => {
      if (err) throw err;
      console.log('Data added to file');
    });
    res.status(200).json({ message: 'Data added successfully', req: req.body });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

module.exports = router