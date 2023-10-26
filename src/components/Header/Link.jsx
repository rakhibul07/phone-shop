import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const Link = ({ link }) => {
  const { name, path } = link;
  return (
    <div>
      <li className="text-xl my-4 md:my-0 font-semibold">
        <NavLink
          to={path}
          className={({isActive}) =>`${isActive ? "text-gray-400": "text-gray-800"}`
          }
        >
          {name}
        </NavLink>
      </li>
    </div>
  );
};

Link.propTypes = {
  link: PropTypes.object,
};

export default Link;
