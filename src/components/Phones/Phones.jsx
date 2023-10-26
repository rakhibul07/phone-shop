
import PropTypes from 'prop-types';
import PhoneCard from './PhoneCard';
const Phones = ({phones}) => {
    return (
        <div className="py-9">
            <h2 className="text-center font-semibold text-2xl">All Categories Phones</h2>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 mx-7 md:mx-0 '>
           {
                phones ?.map(phone =><PhoneCard key={phone.id} phone={phone}></PhoneCard>)
            }
           </div>
        </div>
    );
};
Phones.propTypes = {
    phones:PropTypes.array
};

export default Phones;