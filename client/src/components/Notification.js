import React from "react";

const Notification = (props) => {
  return (
    <>
      <div className="flex relative w-full z-50 mx-auto bg-red-600">
        <div className="absolute top-0 right-0 notification is-dark w-3/12 m-3">
          <button className="delete" onClick={props.close}></button>
            {props.message}
        </div>
      </div>
    </>
  );
};

export default Notification;
