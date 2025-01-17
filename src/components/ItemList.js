import { CDN_ULR } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-yellow-600 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-semibold">{item.card.info.name}</span>
              <span className="font-extrabold">
                -₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-3">
            <img
              src={CDN_ULR + item.card.info.imageId}
              className="w-full rounded-lg"
            />
            <div className="relative -top-9  left-5">
              <button className=" p-2  bg-orange-800 text-white  shadow-2xl shadow-gray-900  border border-solid border-black rounded-xl ">
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
