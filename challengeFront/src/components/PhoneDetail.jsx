import PropTypes from 'prop-types'

function PhoneDetail({ phone }) {
  return (
    <div>
      <h2>{phone.name}</h2>
      <p>Manufacturer: {phone.manufacturer}</p>
      <p>Price: ${phone.price}</p>
    </div>
  )
}

PhoneDetail.propTypes = {
  phone: PropTypes.shape({
    name: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
}

export default PhoneDetail
