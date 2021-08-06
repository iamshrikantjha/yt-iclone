import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const CreatePost = () => {
 const history = useHistory();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(false)

  const [url, setUrl] = useState("")

  React.useEffect(() => {
    if (url) {
       // PHASE 2
       fetch("http://127.0.0.1:5000/createpost", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("jwt")
        },
        body: JSON.stringify({
          title,
          body,
          photo: url
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Data rec ", data);
         //  props.open();
          if (data.error) {
           //  props.setText(data.error);
           // console.log('SOME ISSUE' ,data.error);
           // props.setText('Some Issue Occurred')
            setLoading(false);
            return
          } else {
           // props.setText('Successfully Posted');
            setLoading(false);
            console.log('Created Post', data);
           //  localStorage.setItem("token", data.token)
           //  localStorage.getItem("token")
            history.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return () => {
      
    }
  }, [url])


  const postDetails = async(e) => {
    e.preventDefault()
    setLoading(true)
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "yt-iclone");
    data.append("cloud_name", "yt-iclone");

    await fetch("https://api.cloudinary.com/v1_1/yt-iclone/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUrl(data.url)
      })
      .catch((err) => {
        console.log(err);
      });
      setLoading(false);

     
  };

  return (
    <>
      <div className="columns is-centered">
        <div className="column is-4">
          <form className="box m-5 ">
            <div className="field">
              <label className="label has-text-centered is-size-4	">
                Create Post
              </label>
            </div>

            <div className="field">
              <label className="label">Title</label>
              <div className="control">
                <input
                  className="input"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Funny Flops"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Body</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="e.g. It all started with a joke"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div className="file has-name is-fullwidth block">
              <label className="file-label">
                <input
                  className="file-input"
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  name="resume"
                />
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload"></i>
                  </span>
                  <span className="file-label">Choose a file…</span>
                </span>
                <span className="file-name">
                  Screen Shot 2017-07-29 at 15.54.25.png
                </span>
              </label>
            </div>

            <button className={`button is-dark has-text-bold is-fullwidth ${loading === true ? 'is-loading' : ''}`}
              onClick={(e) => postDetails(e)}
            > 
              Submit Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
