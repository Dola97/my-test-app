import { Carousel } from "@mantine/carousel";
import { Text } from "@mantine/core";
import { IconMoodSilence } from "@tabler/icons";
import { CATEGOIRES } from "../mock/categories";
import React, { Fragment } from "react";
import { useAppState } from "../hooks/app-store";

export const CategoriesComponent = () => {
  const { selectedCategory, setCategory } = useAppState();
  const _handleSetCategorie = (item: any) => {
    setCategory(item);
  };
  return (
    <Carousel
      align="start"
      dragFree
      containScroll="trimSnaps"
      slideSize="15%"
      slideGap="md"
      sx={{ backgroundColor: "white", padding: 20 }}
      initialSlide={1}
    >
      {CATEGOIRES.map((item, key) => {
        const isSelected = selectedCategory?.name === item.name;
        return (
          <Fragment key={`id_of_categories${key}`}>
            <Carousel.Slide
              onClick={() => _handleSetCategorie(item)}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                cursor: "pointer",
                ":hover": {
                  backgroundColor: "#AECBD6",
                },
                backgroundColor: isSelected ? "#AECBD6" : "transparent",
                padding: 10,
              }}
            >
              <IconMoodSilence />
              <Text
                sx={{
                  textDecorationColor: "blue",
                  textDecorationLine: isSelected ? "underline" : undefined,
                }}
              >
                {item.name}
              </Text>
            </Carousel.Slide>
          </Fragment>
        );
      })}
    </Carousel>
  );
};
