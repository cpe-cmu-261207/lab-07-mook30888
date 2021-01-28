import { GRADES } from "../utils/grades";
import { CREDITS } from "../utils/credits";
import { useContext, useState } from "react";
import {TodosContext} from "../pages/Gpacalc"

const CourseForm = () => {
  const [inputData, setInputData] = useState({name: "",a:"",g:0,c:0});   
  const {dispatch } = useContext(TodosContext)
  return (
    <>
      <form onSubmit = {() => {
        dispatch({
          type: "ADD_TODO",
          payload: {
            id: Date.now(),
            name: inputData.name,
            a : inputData.a,
            g : inputData.g,
            c : inputData.c 
          }
        })
      }
      }>
        
      <div class = "divez">
        <table>
              <tr>
                  <th>ชื่อวิชา</th>
                  <th><input type = "text" placeholder = "ชื่อวิชา" onChange ={
                  (e) => {setInputData({...inputData,
                    name : e.currentTarget.value})}
                }/> </th>
                  
                
                
              </tr>
              <tr>
                <th>เกรด</th>
                <th><select name = "Grade" onChange ={
                  (e) => {setInputData({...inputData,
                    g : e.currentTarget.value,
                    a : e.currentTarget.options[e.currentTarget.selectedIndex].text})}}> <option> </option>{GRADES.map((item) =>{return (<option value={item.value}>{item.name}</option>)})}</select>
                 </th>
              </tr>
              <tr>
                <th>หน่วยกิต</th>
                <th><select name = "Credit" onChange ={
                  (e) => {setInputData({...inputData,
                    c : e.currentTarget.value})}}> <option> </option>{CREDITS.map((item) =>{return (<option value={item}>{item}</option>)})}</select></th>
                
              </tr>
              

              </table>
              
            <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
};

export default CourseForm;
