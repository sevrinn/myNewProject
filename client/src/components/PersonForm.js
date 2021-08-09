import React, { useState} from 'react'
import axios from 'axios';

//keep track of what is being typed via useState hook
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");

//handler when the form is submitted
const onSubmitHandler = e => {
  //prevent default behavior of the submit
  e.preventDefault();

  //make a post request to create a new person
  axios.post('http://localhost:8000/api/people', {
    firstName, //shortcut syntax for firstName: firstName
    lastName  //shortcut syntax for lastName: lastName
  })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  
}