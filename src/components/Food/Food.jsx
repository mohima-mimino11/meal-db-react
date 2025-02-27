import PropTypes from 'prop-types'

const Food = ({food}) => {
  const {image, name, description} = food;
  return (
    <div className='mt-12'>

      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <button className="btn btn-warning">Show Details</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

Food.propTypes = {
    food: PropTypes.object
}

export default Food
