'use client'

import { CafeItemVariantType } from '../../../types/cafe_item_types'
import '../cafe_items.css'
import  { formatCurrency } from '../../utils/number_utilities'

interface CafeItemVariantProps {
    variants: CafeItemVariantType[],
  }

export default function CafeItemsVariant({variants}: CafeItemVariantProps) { 
    return (
        <div className="individualItem"> 
 
            { variants.map((variant:CafeItemVariantType, i:number) => 
                <p>
                   {variant.variation} 
                   {variant.upcharge ? ` +${formatCurrency(variant.upcharge)}` : ""}
                   {i != variants.length - 1 ? `, ` : ""} 
                </p>
            )}
        </div>
    ) 
}