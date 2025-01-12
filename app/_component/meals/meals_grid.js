import styles from './meal_grid.module.css'
import MealItem from './meal_item'

export default function MealGrid({meals}){
    return <ul className={styles.meals}>
        {meals.map(meal => <li key={meal.id}>
            <MealItem {...meal}/>
        </li>)}
    </ul>
}
