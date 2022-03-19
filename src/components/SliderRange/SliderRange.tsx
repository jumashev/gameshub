import React from 'react'
import styles from './SliderRange.module.scss'

type TypeChangePrice = {
  value:string | number
  onChangePrice: (value:React.ChangeEvent<HTMLInputElement>) => void
}

export const SliderRange:React.FC<TypeChangePrice> = ({value, onChangePrice}):JSX.Element => {
  return (
    <div className='mb-3'>
      <h4 className={styles.slider__title}>Цена</h4>
      <form>
        {/* <input
          max={2470}
          min={3}
          value={value} 
          onChange={onChangePrice} 
          className={styles.slider__range}
          type='range' 
        /> */}
      </form>
      <div className={styles['slider-number']}>
        <input  
          onChange={onChangePrice} 
          value={value} 
          className={styles['slider-number__input']} 
          type="number" 
          placeholder='0'
        />
      </div>
    </div>
  )
}