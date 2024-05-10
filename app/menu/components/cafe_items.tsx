'use client'

import { useState, useEffect } from 'react';
import { CafeItemCategoryType, CafeItemType } from '../../../types/cafe_item_types'
import '../cafe_items.css'
import  CafeItemsVariant from './cafe_item_variant'
import  CafeItemsValue from './cafe_item_value'


export default function CafeItems() { 
    const [cafeItems, setCafeItems] = useState({});
  
    useEffect(() => {
        get_cafe_items();
    }, []);
    
    async function get_cafe_items() {
        const url_base = `/api/cafe_items/`;
        
        const result =  await fetch(url_base, {
            method: "GET"
        }).then(response => {
          return response.json();
        }).catch((error) => {
            throw new Error("Something went wrong");
        });
        
        setCafeItems(result as CafeItemCategoryType)
    }
    
    function build_items(items:CafeItemType[]) {
        return (
            <> 
                { items.map((item, i) => 
                   <div> 
                    <div className="itemDescription"> 
                        {item.item_description} 
                        { item.size_type && ` (in ${item.size_type})`}
                    </div>

                    { 
                        item.values && item.values.length !== 0 && 
                        <CafeItemsValue values={item.values}/>
                    }

                    { 
                        item.variations && item.variations.length !== 0 && 
                        <CafeItemsVariant variants={item.variations}/>
                    }
                    </div>
                )}
            </>
        ) 
    }
    
    return (
        <div className="menu">
         { cafeItems &&  Object.entries(cafeItems).map(([key,value],i:number) => 
                    <div className="categories">
                        <h2>{key}</h2>
                        { build_items(value as CafeItemType[]) }
                    </div>
         )}
        </div>
    )
}