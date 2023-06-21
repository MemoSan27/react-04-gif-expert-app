import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

   
    const [ categories, setCategories] = useState(['friends']);
    
    const onAddCategory = ( newCategory ) => {
        if( categories.includes(newCategory) ) return;
        setCategories( [ newCategory, ...categories ] );
        
    }
 
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
