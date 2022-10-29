import { CategoriesComponent } from "../components/categories";
import { ProductsSection, GarageSection } from "../sections";
import { Grid } from "@mantine/core";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Grid gutter={0}>
          <Grid.Col md={6} lg={7}>
            <CategoriesComponent />
            <ProductsSection />
          </Grid.Col>
          <Grid.Col md={6} lg={5}>
            <GarageSection />
          </Grid.Col>
        </Grid>
      </main>
    </div>
  );
}
