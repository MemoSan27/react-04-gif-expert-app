import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //value = ['One Punch', 'Dragon Ball']
    const [ categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
    
    const onAddCategory = ( newCategory ) => {

        if( categories.includes(newCategory) ) return;
        // categories.push('Valorant');
        setCategories( [ newCategory, ...categories ] );
        //setCategories( cat => [ ...cat, 'Valorant' ]);
    }

    
 
    console.log(categories);
 
  return (
    <>
        <h1>GifExpertApp</h1>
       
        <AddCategory 
            onNewCategory={ value => onAddCategory(value) }
        />
           
       
        { categories.map( category =>  (//Como solo es un return, no se necesitan las llaves ni el return
              <GifGrid 
              key={ category } 
              category={ category } />
            )) 
        }
   
            
    </>
  )
}
