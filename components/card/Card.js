import react from "react";
import styles from "./Card.module.css"
import Image from "next/image";

export default function Card(props){

    function displayData(){
        console.log("Titre : "  + props.title);
        console.log("Image source : "  + props.srcImg);
        console.log(props.description);
        console.log("Prix : "  + props.price);
    }

    return(
        <div className= {styles.cards}>
            <h1 className= {styles.cardTitle}>{props.title}</h1>
            <Image className={styles.cardImage} src = {props.srcImg} alt = "img" width="200px" height="200px"/>
            <div className={styles.cardsDescription}>
                <p>{props.description}</p>
                <div className={styles.cardsFooter}>
                    <p>{props.price} <span className={styles.priceCardSpan}>BNB</span></p>
                    <button onClick={() => displayData()} className={styles.buttonInfo}>Info</button>
                </div>
                
            </div>
        </div>
    )
}