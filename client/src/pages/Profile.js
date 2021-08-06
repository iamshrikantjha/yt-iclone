import React from "react";

const SinglePost = () => {
  return (
    <div className="flex flex-shrink-0 w-6/12 md:w-4/12 p-2">
      <div className="flex flex-1">
        <img
          alt="default image"
          className="rounded-md object-cover h-36"
          src="https://media.comicbook.com/2017/12/batman-best-friend-ace-the-bat-hound-1067056.jpg"
        />
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="section px-0 mx-0">
      <div className="w-full md:w-6/12 mx-auto flex flex-row flex-wrap bg-purple- p-1 md:p-6">
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <>
      <div className="section w-full shadow-md">
        <div className="flex w-full md:w-6/12 flex-col md:flex-row justify-between mx-auto	">
          {/* IMAGE */}
          <figure className="image is-128x128 self-center">
            <img
              alt="default image"
              className="is-rounded"
              src="https://images-na.ssl-images-amazon.com/images/I/71Ey4LmF0TL._SY300_.jpg"
            />
          </figure>

          {/* TEXT */}
          <div className="flex mx-2	md:mx-6 w-11/12 md:w-5/12 bg-red-">
            <div className="flex flex-col justify-evenly flex-1">
              <div className="has-text-weight-semibold is-size-5 self-center my-4 md:my-0">
                Batman: The Greatest Detective
              </div>

              {/* INFO */}
              <div className="flex flex-row justify-between">
                <div>40 Posts</div>
                <div>40 Following</div>
                <div>40 Followers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Gallery />
    </>
  );
};

export default Profile;
