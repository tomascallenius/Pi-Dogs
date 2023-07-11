import { useState } from "react";
import { useDispatch } from "react-redux";
import { postDog } from "../../redux/actions";
import image from "../../img/perros-para-el-create-removebg-preview.png";
import style from "./Create.module.css";
const Create = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax: "",
    life_span: "",
    temperaments: [],
  });

  const handleForm = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({
      ...form,
      [property]: value,
    });
    console.log(form);
  };
  const handleClick = (event) => {
    console.log(form);
    event.preventDefault();
    dispatch(postDog(form));
  };

  return (
    <div className={style.divAll}>
      <div>
        <h1>Create the dog you want</h1>
        <img src={image} alt="" />
      </div>
      <div>
        <form action="" type="submit" className={style.form}>
          <div>
            <label htmlFor="" name="name">
              Breed name
            </label>
            <input
              type="text"
              onChange={handleForm}
              name="name"
              value={form.name}
            />
          </div>
          <div>
            <label htmlFor="" name="heightMin">
              Min height
            </label>
            <input
              type="text"
              onChange={handleForm}
              name="heightMin"
              value={form.heightMin}
            />
          </div>
          <div>
            <label htmlFor="" name="heightMax">
              Max height
            </label>
            <input
              type="text"
              onChange={handleForm}
              name="heightMax"
              min="1"
              max="5"
              value={form.heightMax}
            />
          </div>
          <div>
            <label htmlFor="" name="weightMin">
              Min weight
            </label>
            <input
              type="text"
              onChange={handleForm}
              name="weightMin"
              value={form.weightMin}
            />
          </div>
          <div>
            <label htmlFor="" name="weightMax">
              Max weight
            </label>
            <input
              type="text"
              onChange={handleForm}
              name="weightMax"
              value={form.weightMax}
            />
          </div>
          <div>
            <label htmlFor="" name="life_span">
              Life span
            </label>
            <input
              type="text"
              onChange={handleForm}
              name="life_span"
              value={form.life_span}
            />
          </div>
          <div>
            <label htmlFor="" name="temperaments">
              Temperaments
            </label>
            {/* <select
              id="temperaments"
              name="temperaments"
              value={form.temperaments}
              // onChange={}
              multiple
            >
              <option value="1"></option>
              <option value="2"></option>
              <option value="3"></option>
              <option value="4"></option>
            </select> */}
          </div>
          <div>
            <button type="submit" onClick={handleClick}>
              Create Dog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;

//onSubmit={(event) => handleSubmit(event)}
