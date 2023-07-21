import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postDog, getTemperaments } from "../../redux/actions";
import image from "../../img/perros-del-create.png";
import style from "./Create.module.css";
import validateText from "../../utils/validation";

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
  const [errors, setErrors] = useState({});

  // const [temperaments, setTemperaments] = useState([]);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const handleForm = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({
      ...form,
      [property]: value,
    });
    setErrors(validateText({
      ...form,
      [property]: value
    }));
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
    } else {
      alert("Select up to four temperaments");
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (Object.entries(errors).length === 0 && form.temperaments.length > 0) {
      dispatch(postDog(form))
      alert("The dog has been created")
    } else {
      alert("You must complete all the inputs and select at least one temperament to create your dog")
    }
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

  const handleButtonTemp = (event) => { 
    event.preventDefault();
    setForm({
      ...form,
      temperaments: form.temperaments.filter((temp)=> temp !== event.target.value),
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
              <br />
              <span className={style.error}>{errors.name}</span>
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
              <br />
              <span className={style.error}>{errors.heightMin}</span>
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
              <br />
              <span className={style.error}>{errors.heightMax}</span>
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
              <br />
              <span className={style.error}>{errors.weightMin}</span>
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
              <br />
              <span className={style.error}>{errors.weightMax}</span>
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
              <br />
              <span className={style.error}>{errors.life_span}</span>
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
                className={style.select}
              >
                <option>Select at least one</option>
                {tempsFromState?.map((temp) => (
                  <option value={temp.name} key={temp.id}>
                    {temp.name}
                  </option>
                ))}
              </select>
              <div className={style.currentTemps}>
                {form.temperaments?.map((temp) => (
                  <>
                    <button value={temp} className={style.currentTempsButton} onClick={handleButtonTemp}>{temp}</button>
                  </>
                ))}
              </div>
              {form.temperaments[0] ? (
                <p className={style.pEliminate}>Click on a temp to eliminate</p>
              ) : (
                <></>
              )}
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
