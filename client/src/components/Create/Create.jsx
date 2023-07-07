import { useState } from "react";
import { useDispatch } from "react-redux";
import { postDog } from "../../redux/actions";
const Create = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minweight: "",
    maxweight: "",
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
  };
  const handleClick = (event, form) => {
    event.preventDefault();
    dispatch(postDog(form));
  };

  return (
    <div>
      <form action="" type="submit">
        <label htmlFor="" name="name">
          Breed name
        </label>
        <input
          type="text"
          onChange={handleForm}
          name="name"
          value={form.name}
        />

        <label htmlFor="" name="minHeight">
          Min height
        </label>
        <input
          type="text"
          onChange={handleForm}
          name="minHeight"
          value={form.minHeight}
        />

        <label htmlFor="" name="maxHeight">
          Max height
        </label>
        <input
          type="text"
          placeholder=" 1 to 5"
          onChange={handleForm}
          name="maxHeight"
          min="1"
          max="5"
          value={form.maxHeight}
        />

        <label htmlFor="" name="minWeight">
          Min weight
        </label>
        <input
          type="text"
          onChange={handleForm}
          name="minWeight"
          value={form.minWeight}
        />

        <label htmlFor="" name="maxWeight">
          Max weight
        </label>
        <input
          type="text"
          placeholder=" take it from internet"
          onChange={handleForm}
          name="maxWeight"
          value={form.maxWeight}
        />

        <label htmlFor="" name="life_span">
          Life span
        </label>
        <input
          type="text"
          placeholder=" take it from internet"
          onChange={handleForm}
          name="life_span"
          value={form.life_span}
        />

        <label htmlFor="" name="temperaments">
          Associated Temperaments
        </label>
        <select
          id="temperaments"
          name="temperaments"
          value={form.temperaments}
          // onChange={}
          multiple
        >
          <option value="1">fdsdf</option>
          <option value="2">Saab</option>
          <option value="3">Fiat</option>
          <option value="4">Audi</option>
        </select>

        <button type="submit" onClick={handleClick}>
          Create Dog
        </button>
      </form>
    </div>
  );
};

export default Create;
