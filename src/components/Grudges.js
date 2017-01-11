import React from 'react';
import { map } from 'lodash';
import { Link } from 'react-router';

  const Grudges = ({ people }) => {
    let persons = map(people, (person, index) => {
	     return <Link className='link' to={`/Grudge/${person.id}`} key={index}>
                <li>
                  {person.name}
                </li>
              </Link>
    })
    if (people.length > 0) {
      return (
        <section className='culprits'>
          <h1>All Culprits</h1>
          <ul className='All-Grudges'>
            {persons}
          </ul>
        </section>
      )
    } else {
      return (
        <section className='culprits'>
          <h1>You Have No Grudges 🤗</h1>
        </section>
      )
    }
  }

export default Grudges;
