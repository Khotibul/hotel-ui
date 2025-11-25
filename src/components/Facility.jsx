import { BsArrowsFullscreen, BsPeople } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Facility = ({ facility }) => {

  const { id, name, image, size, maxPerson, description, price } = facility ?? {};

  return (
    <div className='bg-white shadow-2xl min-h-[500px] group'>

      <div className='overflow-hidden'>
        <img src={image} alt="img" className='group-hover:scale-110 transition-all duration-300 w-full' />
      </div>


      <div className='bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base'>

        <div className='flex justify-between w-[80%]'>

          <div className='flex items-center gap-x-2'>
            <div className='text-accent'>
            </div>
          </div>


        </div>

      </div>


      {/* name and description */}
      <div className='text-center'>
        <Link to={`/facility/${id}`}>
          <h3 className="h3">{name}</h3>
        </Link>

        <p className='max-w-[300px] mx-auto mb-3 lg:mb-6'>{description.slice(0, 56)}..</p>
      </div>


      {/* button */}
      <Link
        to={`/facility/${id}`}
        className="btn btn-secondary btn-sm max-w-[240px] mx-auto duration-300"
      >
        Rp.{price}K/Night 
      </Link>

    </div>
  );

};

export default Facility;
