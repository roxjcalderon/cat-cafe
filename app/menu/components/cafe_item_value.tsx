'use client'

import { CafeItemValueType } from '../../../types/cafe_item_types'
import '../cafe_items.css'
import  { formatCurrency } from '../../utils/number_utilities'

interface CafeItemValueProps {
    values: CafeItemValueType[],
  }

export default function CafeItemValues({values}: CafeItemValueProps) { 
    return (
        <div className="individualItem"> 
            { values.map((variant:CafeItemValueType, i:number) => 
                <p className="variant">
                    {variant.size_value ? `${variant.size_value} - ` : ""}  
                    {formatCurrency(variant.price)}  
                </p>
            )}
        </div>
    ) 
}