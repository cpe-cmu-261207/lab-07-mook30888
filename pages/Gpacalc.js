import { createContext, useReducer , useEffect , useState} from "react";
//import CourseCard from "../components/CourseCard";
import dynamic from'next/dynamic'
const CourseCard = dynamic(() => import("../components/CourseCard"))
//import CourseForm from "../components/CourseForm";
const CourseForm = dynamic(() => import("../components/CourseForm"))
export const TodosContext = createContext({});

function Gpacalc() {
  
  const initialState = {myTodos: [],};
  const [GPA, setGPA] = useState(4.0);



  function calculateGPA() {
    // TODO
    let gr = 0.00
    let cr = 0
    state.myTodos.forEach(obj => {
      if(obj.a !== "W"){
        gr += Number(obj.g) * Number(obj.c)
        cr += Number(obj.c)
      }
    })
    gr  = Number(gr) / Number(cr)
    if(Number(gr) >= 0)
      setGPA(Number(gr.toPrecision(3)))
    else setGPA(0.00)

  }


  function reducer(state, action) {
    switch (action.type) {
      case "ADD_TODO":
        return {
          ...state,
          myTodos: [...state.myTodos, action.payload],
        };
      case "SET_TODO":
        return {
          ...state,
          myTodos: action.payload,
        };
      case "DELETE_TODO":
        return {
          ...state,
          myTodos: state.myTodos.filter((todo) => todo.id !== action.payload),
        };
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  //fetch todos from localstroage
  function fetchTodos() {
    const localTodos = localStorage.getItem("myTodos");
    if (localTodos) {
      dispatch({
        type: "SET_TODO",
        payload: JSON.parse(localTodos),
      });
      
    }
    
  }

  //use function fetchTodos() when page refresh and rendered
  useEffect(fetchTodos, []);

  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(state.myTodos));
    calculateGPA();
  }, [state.myTodos]); //run when state.myTodos change
  return (
    <TodosContext.Provider value={{ state, dispatch }}>
    <div>
    <h1>GPA CALCULATOR</h1>

      <CourseCard todos={state.myTodos} />
      
      <p>
        GPA = {GPA.toFixed(2)}
      </p>

      <CourseForm />

    </div>
  </TodosContext.Provider>
  );
  
}

export default Gpacalc;