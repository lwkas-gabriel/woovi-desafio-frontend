import { useState } from 'react';
import styles from "./PixPaymentComponent.module.css"

export function PixPaymentComponent(){
    const [isPixChecked, setIsPixChecked] = useState(false);
  
    function handleOnChangeOptionPix(){
      setIsPixChecked(!isPixChecked);
    }
    return (
        <div className={styles.paymentOptionsContainer}>
            <fieldset onChange={handleOnChangeOptionPix} className={isPixChecked ? styles.paymentOptionChecked : styles.paymentOptions}>
              <legend className={styles.pix}>Pix</legend>
              <div className={styles.optionPayment}>
                <label htmlFor="pix"><strong>1x</strong> R$ 30.500,00</label>
                <input type="radio" id="pix" name="drone" value="pix" />
              </div>
              <div className={styles.info}>
                <span className={styles['info-discount']}>Ganhe 3% de Cashback</span>
                <span className={styles['info-value']}>
                  🤑 <strong>R$ 300,00</strong> de volta no seu Pix na hora <div className='triangle'/>
                </span>
              </div>
            </fieldset>
        </div>
    )
}