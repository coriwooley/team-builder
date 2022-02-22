import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TeamForm from './components/forms';
import './App.css';

const initialFormValues = {
  name:'',
  email:'',
  role:'',
}

export default function App() {
  const [teamMember, setTeamMember] = useState([])
  const [formValue, setFormValue] = useState(initialFormValues)

  const formUpdate = (inputName, inputValue) => {
    setFormValue({...formValue, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      name: formValue.name.trim(),
      email: formValue.email.trim(),
      role: formValue.role
    }
    
    axios.post("fakeapi.com", newMember)
      .then(res => {
        console.log(res.data);
        setTeamMember([res.data, ...teamMember]);
        setFormValue(initialFormValues);
      }).catch(err => console.error(err))
  }
  useEffect(() => {
    axios.get('fakeapi.com').then(res => setTeamMember(res.data))
  }, [])

  return (
    <div className="App">
     <h1>Team Builder</h1>
     <TeamForm
        // 🔥 STEP 2 - The form component needs its props.
        //  Check implementation of FriendForm
        //  to see what props it expects.
        value={formValue}
        update={formUpdate}
        submit={submitForm}
      />
    </div>
  );
}


