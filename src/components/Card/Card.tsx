'use client'

import React, {useState} from 'react';
import s from "../../styles/Card.module.scss"
import classNames from 'classnames';

const Card = () => {

    const [flipped, setFlipped] = useState(false)

    const handleClick = () => {
        setFlipped(!flipped)
    }

    return (
        <div className={s.card} onClick={handleClick}>
            <div className={classNames(s.card__inner, flipped ? s.flipped : {})}>
                <div className={s.card__inner_front}>
                    <h2>Открытка</h2>
                    <p className={s.text}>Нажмите, чтобы открыть</p>
                </div>
                <div className={s.card__inner_back}>
                    <h2>Замечательные, милые девочки, поздравляю вас с 8 Марта! </h2>
                    <p className={s.text}>
                        Желаю каждой из вас всегда
                        оставаться королевой красоты, иконой стиля, примером великолепия и неподражаемости.
                        Пусть каждый день вам дарит свою сказку и доброе чудо, пусть будет жизнь полна
                        счастливых мгновений и весёлых затей!
                    </p>
                    <p className={s.author}>
                        С любовью и уважением, Кирилл :)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;