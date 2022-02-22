import React from "react";

export default function TeamForm(props) {
  const { value, update, submit } = props;

  const change = event => {
      const name = event.target.name
      const value = event.target.value
      update(name, value)
  }

  const onSubmit = event => {
      event.preventDefault();
      submit();
  }

  return (
    <form className='form card' onSubmit={onSubmit}>
      <label>
        Name
        <input
          placeholder="name"
          value={value.name}
          name="name"
          onChange={change}
        />
      </label>
      <label>
        Email
        <input
          placeholder="email"
          value={value.email}
          name="email"
          onChange={change}
        />
      </label>
      <label>
        Role
        <select value={value.role} name="role" onChange={change}>
          <option value="">-Select a Role-</option>
          <option value="Backend">Backend</option>
          <option value="FrontEnd">FrontEnd</option>
          <option value="Designer">Designer</option>
          <option value="Educator">Educator</option>
        </select>
      </label>
      {/* <input type="submit" className="submit"/> */}
      <div className='submit'>
          <button>submit</button>
        </div>
    </form>
  );
}
