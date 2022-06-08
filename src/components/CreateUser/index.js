import React, { useState } from "react";
import PlaceholderImg from "../../img/placeholder-user.jpg";
const CreateUser = (props) => {
  const initialData = {
    image: PlaceholderImg,
    price: "",
    description: "",
    title: "",
  };
  const [user, setUser] = useState(initialData);
  const [image, setImage] = React.useState(PlaceholderImg);
  const [imageFile, setImageFile] = React.useState(null);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value, image });
  };

  const cancel = (event) => {
    event.preventDefault();
    props.setActiveModal({ active: false });
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
     setImageFile(event.target.files[0])
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.createUser(user,imageFile);
      }}
    >
      <img style={avatar} src={image} />
      <div style={upload}>
        <label
          style={{ color: "white", cursor: "pointer" }}
          onChange={onImageChange}
          htmlFor="formId"
        >
          Select Image
          <input name="" type="file" id="formId" hidden />
        </label>
      </div>
      <div className="form-group">
        <label className="form-group">Price</label>
        <div className="col-xs-5 selectContainer">
          <input
            type="text"
            name="price"
            value={user.price}
            onChange={onInputChange}
            required
          />
        </div>
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
        <button className="primary-btn">Create</button>
        <button className="cancel-btn" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};
const upload = {
  border: "1px solid",
  borderRadius: 25,
  padding: 10,
  background: "#342bbe",
  width: "fit-content",
  marginBottom: 10,
};
const avatar = {
  height: 90,
  marginBottom: 10,
};
export default CreateUser;
