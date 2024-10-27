import PropTypes from 'prop-types'; 
import { IoIosCheckmark } from "react-icons/io";

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center'><IoIosCheckmark className='mr-4'></IoIosCheckmark>{feature}</p>
        </div>
    );
};


Feature.propTypes = {
    feature:PropTypes.string
}

export default Feature;