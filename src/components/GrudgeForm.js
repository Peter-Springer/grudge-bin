import React from 'react';

const GrudgeForm = ({createGrudge}) => {
  return (
    <div>
      <form id='form' onSubmit={createGrudge}>
      <input id='name' name='name' placeholder='name'/>
      <input id='grudge' name='grudge' placeholder='wrong commited'/>
      <input type='submit'/>
      </form>
    </div>
  )
}

export default GrudgeForm;
