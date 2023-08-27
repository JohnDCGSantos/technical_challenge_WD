const router = require('express').Router()
const fs = require('fs') // Import the Node.js File System module
const path = require('path') // Import the Node.js Path module

const phonesDataPath = path.join(__dirname, '../data/phones.json')
const imagesFolderPath = path.join(__dirname, '../images') // Specify the path to your images folder

// Create a function to read the JSON data
function readPhonesData() {
  try {
    const data = fs.readFileSync(phonesDataPath, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading phones data:', error)
    return []
  }
}

// Get the phones data
const phones = readPhonesData()

router.get('/phones', (req, res, next) => {
  res.json(phones)
})

router.get('/phones/:id', (req, res) => {
  const { id } = req.params
  const phone = phones.find(p => p.id === parseInt(id))
  if (!phone) {
    return res.status(404).json({ message: 'Phone not found' })
  }
  res.json(phone)
})
router.get('/images/:imageFileName', (req, res) => {
  const { imageFileName } = req.params
  const imagePath = path.join(imagesFolderPath, imageFileName)
  res.sendFile(imagePath)
})

module.exports = router
