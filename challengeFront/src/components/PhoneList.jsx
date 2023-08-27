import { useState, useEffect } from 'react'
import axios from 'axios'
import '../app.css'

function PhoneList() {
  const [phones, setPhones] = useState([])
  const [selectedPhone, setSelectedPhone] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5005/phones/phones')
        setPhones(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data: ', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handlePhoneClick = phone => {
    if (selectedPhone && selectedPhone.id === phone.id) {
      setSelectedPhone(null)
    } else {
      setSelectedPhone(phone)
    }
  }

  return (
    <div>
      <h1>Phone List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='phone-list'>
          <ul>
            {phones.map(phone => (
              <li key={phone.id}>
                <div className='phone-item'>
                  <img
                    src={`http://localhost:5005/phones/images/${phone.imageFileName}`}
                    alt={phone.name}
                  />
                  <div className='phone-details'>
                    <p>{phone.name}</p>
                    <p>{phone.brand}</p>
                    <p>${phone.price}</p>
                    <button
                      onClick={() => handlePhoneClick(phone)}
                      className={
                        selectedPhone && selectedPhone.id === phone.id ? 'selected-phone' : ''
                      }
                    >
                      Show Details
                    </button>
                  </div>
                </div>
                {selectedPhone && selectedPhone.id === phone.id && (
                  <div className='phone-details'>
                    <div className='tittle'>
                      <h2>Selected Phone Details</h2>
                    </div>
                    <div className='Details'>
                      <p>Name: {selectedPhone.name}</p>
                      <p>Brand: {selectedPhone.manufacturer}</p>
                      <p>Price: {selectedPhone.price} $</p>
                      <p>Screen: {selectedPhone.screen}</p>
                      <p>Processor: {selectedPhone.processor}</p>
                      <p>Ram: {selectedPhone.ram}</p>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default PhoneList
