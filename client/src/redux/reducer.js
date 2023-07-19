import {
  GET_ALL_DOGS,
  GET_DOG_BY_ID,
  GET_DOG_BY_NAME,
  GET_TEMPERAMENTS,
  POST_DOG,
  SORT_BY_NAME,
  SORT_BY_WEIGHT,
  FILTER_BY_TEMPERTAMENTS,
  FILTER_BY_SOURCE,
  // CLEAN_DETAIL,
} from "./actions-types";

const initialState = {
  dogs: [],
  detail: [],
  temperaments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        dogs: action.payload,
      };
    case GET_DOG_BY_ID:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_DOG_BY_NAME:
      return {
        ...state,
        dogs: action.payload,
      };
    case POST_DOG:
      return {
        ...state,
        dogs: action.payload,
        //falta: falta?,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case SORT_BY_NAME:
      // if (state.dogs === "Dog not found :(") return { ...state }; //para q la app no se rompa al intentar ordenar el string dog not found
      const orderedByName =
        action.payload === "1"
          ? state.dogs.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            })
          : state.dogs.sort((a, b) => {
              if (a.name > b.name) return -1;
              if (a.name < b.name) return 1;
              return 0;
            });
      return {
        ...state,
        dogs: orderedByName,
      };
    case SORT_BY_WEIGHT:
      // if (state.dogs === "Dog not found :(") return { ...state }; //para q la app no se rompa al intentar ordenar el string dog not found
      const orderByWeight =
        action.payload === "3"
          ? state.dogs.sort((a, b) => {
              if (parseInt(a.weightMin) > parseInt(b.weightMin)) return 1;
              if (parseInt(a.weightMin) < parseInt(b.weightMin)) return -1;
              return 0;
            })
          : state.dogs.sort((a, b) => {
              if (parseInt(a.weightMax) > parseInt(b.weightMax)) return -1;
              if (parseInt(a.weightMax) < parseInt(b.weightMax)) return 1;
              return 0;
            });
      return {
        ...state,
        dogs: orderByWeight,
      };
    case FILTER_BY_TEMPERTAMENTS:
      const temp = action.payload;

      const filteredDogs = state.dogs.filter((dog) => {
        return dog.temperament.includes(temp);
      });
      return {
        ...state,
        dogs: filteredDogs,
      };
    case FILTER_BY_SOURCE:
      const orderBySource = action.payload === "DB" ?
        state.dogs.filter((dog) => {
          return dog.createdInDb;
        }) : state.dogs.filter((dog) => {
          return !dog.createdInDb;
        })
      
        return {
          ...state,
          dogs: orderBySource,
        };
        // case CLEAN_DETAIL:
        //   return {
        //     ...state,
        //     detail: action.payload,
        //   }
    default:
      return {
        ...state,
      };
  };
};
export default reducer;
