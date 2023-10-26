import { useEffect, useState } from "react";

import PhoneDetails from "../../components/Phones/PhoneDetails";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));
    if (favoriteItems) {
      setFavorites(favoriteItems);
      const totalPrice = favoriteItems.reduce(
        (preValue, currentItem) => preValue + currentItem.price,
        0
      );
      setTotal(totalPrice);
    } else {
      setNoDataFound("No Data Found");
    }
  }, []);
  const handleRemove = () => {
    localStorage.clear();
    setFavorites("");
    setNoDataFound("No Data Found");
  };
  const handleBack = () => {
    navigate(-3);
  };

  return (
    <div className="mt-20">
      {noDataFound ? (
        <p className="flex justify-center h-screen items-center text-3xl">
          {noDataFound}
        </p>
      ) : (
        <div>
          <div>
            <h1 className="text-center text-xl font-medium py-6">
              Total Price: {total.toFixed(2)}
            </h1>
            <div className="flex justify-center">
              {favorites.length > 0 && (
                <div>
                  <button
                    onClick={handleRemove}
                    className="bg-green-400 text-semibold px-4 py-2 rounded-md shadow-md text-white "
                  >
                    Delete All
                  </button>
                  <button
                    onClick={handleBack}
                    className="bg-green-400 text-semibold px-4 py-2 rounded-md shadow-md text-white ml-4 "
                  >
                    Add More
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {isShow
              ? favorites.map((phone) => (
                  <PhoneDetails key={phone.id} phone={phone}></PhoneDetails>
                ))
              : favorites
                  .slice(0, 2)
                  .map((phone) => (
                    <PhoneDetails key={phone.id} phone={phone}></PhoneDetails>
                  ))}
          </div>
          {favorites.length > 2 && (
            <div className="flex justify-center ">
              <button
                onClick={() => setIsShow(!isShow)}
                className="bg-green-400 text-semibold px-4 py-2 rounded-md shadow-md text-white ml-4 "
              >
                {isShow ? "See Less" : "See More"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Favorites;
