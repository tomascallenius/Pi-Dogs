import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postDog, getTemperaments } from "../../redux/actions";
import image from "../../img/perros-para-el-create-removebg-preview.png";
import style from "./Create.module.css";
const Create = () => {
  const dispatch = useDispatch();
  const tempsFromState = useSelector((state) => state.temperaments);
  
  const [form, setForm] = useState({
    name: "",
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax: "",
    life_span: "",
    temperaments: [],
  });

  // const [temperaments, setTemperaments] = useState([]);
  
  useEffect(() => {
    // setTemperaments(tempsFromState);
    dispatch(getTemperaments());
  }, [dispatch]);
  
  // console.log(temperaments);

  const handleForm = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({
      ...form,
      [property]: value,
    });
  };
  
  const handleTemperament = (event) => {
    let nextTemp = event.target.value;
    if (form.temperaments.length < 4) {
      if (!form.temperaments.includes(nextTemp)) {
        setForm({
          ...form,
          temperaments: [...form.temperaments, event.target.value],
        });
      }
    }else{alert("Select up to four temperaments")}
    };
    
  console.log(form);
  
  const handleClick = (event) => {
    event.preventDefault();
    dispatch(postDog(form));
  };

  const handleClickReset = (event) => {
    event.preventDefault();
    setForm({
      name: "",
      heightMin: "",
      heightMax: "",
      weightMin: "",
      weightMax: "",
      life_span: "",
      temperaments: [],
    });
  };

  return (
    <div className={style.divAll}>
      <div className={style.divContainer}>
        <div className={style.divSubInfo}>
          <h1>
            Create the dog <br /> you want
          </h1>

          <img src={image} alt="" className={style.image} />
        </div>
        <div className={style.divSubForm}>
          <form action="" type="submit" className={style.form}>
            <div>
              <label htmlFor="" name="name">
                Breed name:
              </label>
              <input
                type="text"
                onChange={handleForm}
                name="name"
                value={form.name}
                autoFocus
              />
            </div>
            <div>
              <label htmlFor="" name="heightMin">
                Min height:
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
                Max height:
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
                Min weight:
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
                Max weight:
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
                Life span:
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
                Temperaments:
              </label>
              <select
                id="temperaments"
                name="temperaments"
                value={form.temperaments}
                onChange={handleTemperament}
              >
                <option>Select up to four</option>
                {tempsFromState?.map((temp) => (
                  <option value={temp.name} key={temp.id}>
                    {temp.name}
                  </option>
                ))}
              </select>
              <div className={style.currentTemps}>
                {form.temperaments?.map((temp) => (
                  <>
                    <button className={style.currentTempsButton}>{temp}</button>
                  </>
                ))}
              </div>
              {form.temperaments[0] ? <p className={style.pEliminate}>Click on a temp to eliminate</p> : <></>}
            </div>
            <div>
              <button
                type="submit"
                onClick={handleClickReset}
                className={style.buttonCreate}
              >
                Reset info
              </button>
              <button
                type="submit"
                onClick={handleClick}
                className={style.buttonCreate}
              >
                Create Dog
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;

//onSubmit={(event) => handleSubmit(event)}
