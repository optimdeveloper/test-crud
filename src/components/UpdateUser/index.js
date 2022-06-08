import React, { useState, useEffect } from "react";
import PlaceholderImg from "../../img/placeholder-user.jpg";
const UpdateUser = props => {
  const [user, setUser] = useState(props.currentUser);
  const [image, setImage] = React.useState(user.image ? process.env.REACT_APP_IMAGE+'/public/Image/'+user.image : null);
  const [imageFile, setImageFile] = React.useState(null);

  const onInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value,image: image==='' ? user.image: image });
  };

  const cancel = event => {
    event.preventDefault();
    props.setActiveModal({ active: false });
  };

  useEffect(() => {
   setUser(props.currentUser)
  }, []);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImageFile(event.target.files[0])
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result)
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        setUser({ ...user});
        props.updateUser(user.id, user, imageFile);
      }}
    >
       <img style={avatar}
             src={image ? image : PlaceholderImg}
                  />
            <div style={upload}>
              <label style={{color:"white",cursor:"pointer"}} onChange={onImageChange} htmlFor="formId">Select Image
                <input name="" type="file" id="formId" hidden />
              </label>
            </div>
      <div className="form-group">
        <label>Price</label>
        <input
          type="text"
          name="price"
          value={user.price}
          onChange={onInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={user.title}
          onChange={onInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={user.description}
          onChange={onInputChange}
          required
        />
      </div>
      <div className="form-group form-group--actions">
        <button className="primary-btn">Update</button>
        <button className="cancel-btn" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};
const upload ={
  border: "1px solid",
  borderRadius: 25,
  padding: 10,
  background: "#342bbe",
  width:"fit-content",
  marginBottom:10
}
const avatar ={
  height:90,
  marginBottom:10
}
export default UpdateUser;
