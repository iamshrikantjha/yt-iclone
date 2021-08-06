import React from "react";

const SingleItem = () => {
  return (
    <div className="box p-0 w-full md:w-6/12 mx-auto bg-red- my-8 flex flex-col md:flex-row">
      {/* IMAGE */}
      <div className=" md:w-7/12 bg-green- p-3">
        <img
          alt="default image"
          className="rounded-lg object-cover"
          src="https://media.comicbook.com/2017/12/batman-best-friend-ace-the-bat-hound-1067056.jpg"
        />
      </div>

      {/* DETAILS */}
      <div className="p-3 md:w-5/12 flex flex-col justify-between">
        <div>
          {/* UPPER */}
          <div className="has-text-weight-semibold">Selina Kyle</div>
          <div className="has-text-weight-normal">
            Catwoman is a character created by Bill Finger and Bob Kane who
            appears in American comic books published by DC Comics, commonly in
            association with Batman.
          </div>
        </div>
        {/* LOWER */}
        <span className="icon text-red-600">
          <i className="fas fa-heart text-2xl"></i>
          {/* <i className="far fa-heart text-2xl"></i> */}
        </span>
        <input className="px-3 py-1 text-sm border-b-2 border-grey-700 outline-none	" type="text" placeholder="Comment.." />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <div className="w-full">
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
      </div>
    </>
  );
};

export default Home;
