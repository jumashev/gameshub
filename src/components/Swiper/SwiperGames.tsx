import React from 'react'
import styles from './SwiperGames.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "swiper/css";
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Loader } from '../Loader/Loader';

const games = [
  {
    id:1,
    name:"DARK SOULS™ II: Scholar of the First Sin",
    images:"https://steamcdn-a.akamaihd.net/steam/apps/335300/header.jpg?t=1579637578",
    price:301
  },
  {
    id:2,
    name:"PLAYERUNKNOWN'S BATTLEGROUNDS",
    images:"https://steamcdn-a.akamaihd.net/steam/apps/578080/header.jpg?t=1580431695",
    price:945
  },
  {
    id:3,
    name:"DARK SOULS™ III",
    images:"https://steamcdn-a.akamaihd.net/steam/apps/374320/header.jpg?t=1580261002",
    price:535
  },
  {
    id:4,
    name:"Terraria",
    images:"https://steamcdn-a.akamaihd.net/steam/apps/105600/header.jpg?t=1580749807",
    price:163
  },
  {
    id:5,
    name:"Stellaris - Galaxy Edition",
    images:"https://fanatical.imgix.net/product/original/1f7570df-234b-4d11-9650-ce088d6529c4.jpg?auto=compress,format&w=400&fit=crop&h=",
    price:215
  },
  {
    id:6,
    name:"Fallout 4",
    images:"https://steamcdn-a.akamaihd.net/steam/apps/377160/header.jpg?t=1580261004",
    price:295
  },
  {
    id:7,
    name:"Pop it, Please!",
    images:"https://cdn.akamai.steamstatic.com/steam/apps/1684900/header.jpg?t=1627025725",
    price:3
  },
]


export const SwiperGames:React.FC = ():JSX.Element => {
  const loaded = useTypedSelector(state => state.loaded.loaded)

  return (
    <div>
      {loaded ? (
        <div className={styles.loader}>
        {games.map((item) => (
          <div key={item.id} className={styles.loader__block}>
            <Loader/>
          </div>
        ))}
        </div>
      ) : 
      <Swiper 
        navigation={true}
        modules={[Navigation]}
        slidesPerView={5}
        spaceBetween={17}
        pagination={{
          clickable: true,
        }}
        className={styles['games-slider']}
      >
      {games.map(item => (
        <SwiperSlide key={item.id}>
          <img width={294} height={125} src={item.images} alt="" />
          <div className={styles['games-slider__info']}>
            <h5 className={styles['games-slider__title']}>{item.name}</h5>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>}
    </div>
  )
}