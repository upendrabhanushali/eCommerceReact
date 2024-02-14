import React from 'react'
import styles from './detailPage.module.css'
import SizeSelectorRadio from '../basicComponents/SizeSelectorButtons.js/SizeSelectorRadio'
import QuantityComponent from '../basicComponents/SizeSelectorButtons.js/QuantityComponent'
import Ratings from '../basicComponents/SizeSelectorButtons.js/Ratings'
const DetailPage = () => {
  return (
    <>
    <h2 className={styles.mainName}>Main Heading</h2>
    <div className={styles.container}>
        <div className={styles.imageHolder}></div>
        <div className={styles.productNums}>  
            <div><em>prize</em></div>
            <strong style={{fontSize:"40px"}}>5.5$</strong>
            <div style={{paddingTop:"5px"}}><em>Ratings</em></div>
            <Ratings rating={{rate:4.2,count:500}}/>
            <div><em>size</em></div>
            <SizeSelectorRadio sizes={['s','m','l','xl']}/>
            <div style={{clear:"both"}}><em>quantity</em></div>
            <QuantityComponent/>
        </div>
        <div className={styles.description}>
            <em><h4>Description</h4></em>
            <section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
            recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
            minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
            </section>
        </div>
        <div >
            <button className={styles.addCartButtons}>Add to Cart</button>
            <button className={styles.addCartButtons}>Buy Now</button>
        </div>
    </div>
    </>
  )
}

export default DetailPage