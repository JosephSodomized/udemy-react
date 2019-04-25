import React from 'react';
import Persons from './Person/Person';

const persons = props => {
    
    console.log('[Persons.js] rendering ...');
    return props.persons.map( (person, index) => {
            return ( 
                <Persons 
                    click={() => props.clicked(index)}
                    name={person.name} 
                    age={person.age}   
                    key={person.id}           
                    changed={(event) => props.changed(event, person.id)}
                />
            );
            
        });
};


export default persons;