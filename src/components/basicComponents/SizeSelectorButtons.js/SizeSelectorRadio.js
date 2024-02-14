import React,{useState} from 'react'
import styles from "./sizeSelector.module.css"

const SizeSelectorRadio = ({sizes}) => {
    const [value,setValue]=useState()
    const sizeOptions=sizes.map((size)=>{
        return (<li>
        <input type="radio" name='size' value={size} onChange={()=>{setValue(size)}}/>
        <label for={size}>{size}</label>
        </li>)
    })
  return (
    <>
    <ul className={styles.donateNow}>
        {sizeOptions}
    </ul>
    {value}
    </>
 
  )
}

export default SizeSelectorRadio