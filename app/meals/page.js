import styles from "./page.module.css";
import Link from 'next/link'; 
import MealGrid from "../_component/meals/meals_grid";
import { getMeals } from '@/lib/meals';
import { Suspense } from "react";

async function Meals(){
  const meals = await getMeals();

  return         <MealGrid meals={meals}></MealGrid>


}

export default  function MealPage() {


  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meal, created <span className={styles.highlight}>by you</span>
        </h1>
        <p>얌얌 너무맛있는 레시피 너가 요리해봐라 그건 간단하고 재밋음</p>
        <p className={styles.cta}>
          <Link href="/meals/share">너의 최애 레시피 공유</Link>
        </p>
      </header>
      <main className={styles.main}>
      <Suspense fallback={<p className={styles.loading}>로딩중</p>}>
  <Meals></Meals>
</Suspense>



      </main>
    </>
  );
}
