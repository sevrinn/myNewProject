import React, { useState} from 'react'
import axios from 'axios';

//keep track of what is being typed via useState hook
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");