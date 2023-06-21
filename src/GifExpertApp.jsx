import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    //value = ['One Punch', 'Dragon Ball']
    const [ categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
    
    const onAddCategory = () => {
        // categories.push('Valorant');
        setCategories( [ 'Valorant', ...categories ] );
        //setCategories( cat => [ ...cat, 'Valorant' ]);
    }

    
 
    console.log(categories);
 
  return (
    <>
        {/*Titulo*/}
        <h1>GifExpertApp</h1>

        {/*Input*/}
        <AddCategory addNewCat={ setCategories } />

        {/*Listado de gifs*/}
       
        <ol>
             { categories.map( category => {
                return <li key={ category }>
                               { category } 
                       </li>
                }) 
             }
             {/* <li>ABC</li> */}
         
        </ol>

        
            {/*Gif Item*/}
    </>
  )
}
