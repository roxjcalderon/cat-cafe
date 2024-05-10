import type { Metadata } from "next";
import CafeItems from './components/cafe_items'
import './cafe_items.css'

export const metadata: Metadata = {
    title: 'Menu',
    description: 'Kitty Cafe Menu',
}

export default function Menu() { 
    
    return (
        <div className="menuPage">
            <div className="menu">
                <h1 className="menuTitle">Menu</h1>
                <CafeItems /> 
            </div> 
        </div>
    )
}
