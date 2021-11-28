import React from 'react'
import style from '../../styles/Dashboard.module.css'
const BottomNav = ({search}) => {
    return (
        <div>
            {search &&
                <div style={{textAlign:'center', height: '80px', padding: '20px 0'}}>
                    <p style={{fontSize: '14px', color: 'rgb(102,102,102)'}}>Your search results for</p>
                    <p style={{color: '#060F41', fontSize: '22px', padding: '5px 0'}}>“{search}”</p>
                </div>
            }
            
            <div className={style.dropCont}>
                <CustomDropdown placeholder='Sort By'/>
                <CustomDropdown placeholder='Gender'/>
                <CustomDropdown placeholder='Size'/>
                <CustomDropdown placeholder='Color'/>
                <CustomDropdown placeholder='Price Range'/>
            </div>

        </div>
    )
}

export default BottomNav
const CustomDropdown = ({placeholder}) => {
    return (
         <select type="text" className={style.customDrop}>
             <option>{placeholder}</option>
         </select>
    )
}