const validateText = (form) => {
  const err = {};

  if (!form.name) err.name = "Write a breed*";
  else if (!isNaN(form.name)) err.name = "Should be letters*";
  else if (form.name.length < 3) err.name = "write at least 3 letters*";
  else if (form.name.length > 40) err.name = "write up to 40 letters*";

  if (!form.heightMin) err.heightMin = "Write the min height*";
  else if (form.heightMin < 8) err.heightMin = "Should be taller than 8cm*";
  else if (isNaN(form.heightMin)) err.heightMin = "Should be a number*";

  if (!form.heightMax) err.heightMax = "Write the max height*";
  else if (form.heightMax > 150) err.heightMax = "Should be smaller than 1,50m*";
  else if (isNaN(form.heightMax)) err.heightMax = "Should be a number*";

  if (
    form.heightMin &&
    form.heightMax &&
    parseInt(form.heightMin) >= parseInt(form.heightMax)
  )
    err.heightMax = "Max height should be bigger than the min height*";

  if (!form.weightMin) err.weightMin = "Write the min weight*";
  else if (form.weightMin < 1) err.weightMin = "Should be heavier than 1kg*";
  else if (isNaN(form.weightMin)) err.weightMin = "Should be a number*";

  if (!form.weightMax) err.weightMax = "Write the max weight*";
  else if (form.weightMax > 100)
    err.weightMax = "Should be less heavy than 100kg*";
  else if (isNaN(form.weightMax)) err.weightMax = "Should be a number*";

  if (
    form.weightMin &&
    form.weightMax &&
    parseInt(form.weightMin) >= parseInt(form.weightMax)
  )
    err.weightMax = "Max weight should be bigger than min weight*";

  if (!form.life_span) err.life_span = "Write an approximated life span*";
  if (form.life_span && (form.life_span < 5 || form.life_span > 25))
    err.life_span = "The life span should be between 5 and 25 years*";
  else if (form.life_span && isNaN(form.life_span))
    err.life_span = "Should be a number*";

  return err;
};

export default validateText;