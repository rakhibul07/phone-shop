import swal from 'sweetalert';
import PropTypes from 'prop-types';
const PhoneDetails = ({phone}) => {
    const { id,phone_name, brand_name,image } = phone || {}
    const handleAddToFavorites = () =>{
     const AddedFavoriteArray = [];
     const favoriteItems  = JSON.parse(localStorage.getItem('favorites'));
     if(!favoriteItems){
      AddedFavoriteArray.push(phone);
      localStorage.setItem('favorites', JSON.stringify(AddedFavoriteArray))
      swal("Good job!", "Successfully Added!", "success");
     }
     else{
      const isExist = favoriteItems.find(phone => phone.id === id)
      if(!isExist){
        AddedFavoriteArray.push(...favoriteItems,phone)
        localStorage.setItem('favorites', JSON.stringify(AddedFavoriteArray))
        swal("Good job!", "Successfully Added!", "success");
      }
      else{
        swal("Error!", "No Duplicate!", "error");
      }
     
     }
      
    }
    return (
        <div className='flex justify-center items-center my-8  '>
        
             <div className="relative md:flex w-[600px] rounded-xl dark:bg-slate-800 bg-white bg-clip-border text-gray-700 shadow-md mx-7 md:mx-0">
        <div className="relative m-0  w-3/5 md:w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={image}
            className="h-full w-full  object-cover"
          />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {phone_name}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
           {brand_name}
          </h4>
         
          <a className="inline-block" href="#">
            <button onClick={handleAddToFavorites}
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Add to Favorite
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
            
          </a>
        </div>
      </div>
        </div>
    );
};
PhoneDetails.propTypes = {
    phone:PropTypes.object
};
export default PhoneDetails;