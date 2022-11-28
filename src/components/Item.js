import React from "react";
import PropTypes from "prop-types";

const Item = ({ list }) => {
  return (
    <>
      <div className="col-md-9 col-sm-12">
        <div className="row">
          {list.map((data) => {
            return (
              <>
                <div className="col-md-6 col-sm-12 col-lg-4 mb-4" key={data.id}>
                  <div className="card">
                    <div className="cards">
                      <img
                        src={data.img}
                        className="card-img-top"
                        alt="..."
                      ></img>
                    </div>
                    <div className="card-body">
                      <p className="card-text">{data.name}</p>
                      <span className="price">Rs.{data.price}</span>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
Item.propTypes = {
  list: PropTypes.string.isRequired
};
export default Item;
