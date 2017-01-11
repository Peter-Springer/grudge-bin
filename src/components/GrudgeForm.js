import React from 'react';

const GrudgeForm = ({createGrudge}) => {
  return (
    <section className='grudgeForm-Container'>
      <form id='form' onSubmit={createGrudge}>
      <input id='name' name='name' placeholder='Culprit'/>
      <input id='grudge' name='grudge' placeholder='Wrong Committed'/>
      <input id='submit' type='submit'/>
      </form>
    </section>
  )
}

export default GrudgeForm;
