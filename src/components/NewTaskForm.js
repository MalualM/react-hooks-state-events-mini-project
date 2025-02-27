import React from "react";
import React,{useState} from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {
  const [newItemFields, setNewItemFields]=useState({
    text:'',
    category:'Code'
  })

  function handleFields(e){
    const{name,value}=e.target
    setNewItemFields({...newItemFields,[name]:value})

  }

function NewTaskForm() {
  return (
    <form className="new-task-form">
    <form className="new-task-form"  onSubmit={(e)=>{
      e.preventDefault()
      onTaskFormSubmit(newItemFields)}}>
      <label>
        Details
        <input type="text" name="text" />
        <input type="text" name="text" value={newItemFields.text} onChange={handleFields} />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
        <select name="category"  value={newItemFields.category} onChange={handleFields}>
          {categories.map((category, index) => (
            <option key={index}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;