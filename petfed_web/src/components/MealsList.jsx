import React, { useContext } from 'react';
import { MealsContext } from './MealsContext';


export default function MealsList() {
    const { meals } = useContext(MealsContext);

    return (
        <ul style={styles.container}>
            {meals.map((item) => {
                return (
                    <li key={ item.id }>
                        <p>{item.name}</p>
                        <p>{item.type}</p>
                        <p>{item.quantity} {item.unit}</p>
                    </li>
                )
            })}
        </ul>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'horizontal',
    },

};
