import React from 'react';
import { map } from 'lodash';
import { Link } from 'react-router';

  const Grudges = ({ people }) => {
    let persons = map(people, (person, index) => {
	     return <Link to={'/Grudge'} key={index}><li>
                {person.name}
              </li></Link>
    })
    if (people.length > 0) {
      return (
        <ul>
          {persons}
        </ul>
      )
    } else {
      return (
        <h1>Hello</h1>
      )
    }
  }

export default Grudges;
