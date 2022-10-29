import { Paper } from "@mantine/core";
import { GarageCard } from "../components/garage-card";
import React, { Fragment } from "react";
import { useAppState } from "../hooks/app-store";

export const GarageSection = () => {
  const { selectedGarage } = useAppState();
  return (
    <section>
      <Paper shadow="xl" radius={0} sx={{ backgroundColor: "white" }}>
        {selectedGarage?.map((item: any, key: any) => {
          return (
            <Fragment key={`grage_card${key}`}>
              <GarageCard
                isOpen={item.isOpen}
                rate={item.rate}
                type={item.type}
                location={item.location}
                services={item.services}
                name={item.name}
              />
            </Fragment>
          );
        })}
      </Paper>
    </section>
  );
};
