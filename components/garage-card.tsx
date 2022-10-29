import {
  Box,
  Divider,
  Text,
  Rating,
  Group,
  Badge,
  ActionIcon,
  BackgroundImage,
} from "@mantine/core";
import React from "react";
import { IconX } from "@tabler/icons";

export const GarageCard = ({
  name,
  rate,
  location,
  isOpen,
  services,
  type,
}: any) => {
  const removeButton = (
    <ActionIcon size="xs" color="dark" radius="xl" variant="transparent">
      <IconX size={10} />
    </ActionIcon>
  );
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          padding: 20,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <BackgroundImage
            sx={{ width: 150, height: 150 }}
            radius="lg"
            src="https://source.unsplash.com/random"
          >
            <Badge
              sx={{
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                boxShadow: "1px 2px 9px #000",
                backgroundColor: "white",
              }}
              variant="filled"
            >
              <Text color="orange">kdsds</Text>
            </Badge>
          </BackgroundImage>
          <Box sx={{ paddingLeft: 10 }}>
            <Text>{name}</Text>
            <Text>{location}</Text>
            <Group>
              <Rating value={rate} fractions={2} readOnly />
              <Text sx={{ color: isOpen ? "green" : "red" }}>
                {isOpen ? "Open Now" : "Closed"}
              </Text>
            </Group>
            {services?.map((item: any, key: any) => (
              <Badge
                key={`key_of_badges${key}`}
                sx={{
                  paddingLeft: 0,
                  marginLeft: 10,
                }}
                size="xs"
                color="dark"
                radius="xl"
                variant="outline"
                leftSection={removeButton}
              >
                {item}
              </Badge>
            ))}
          </Box>
          <Badge
            size="md"
            color={type === "sponser" ? "dark" : "blue"}
            radius="xl"
            variant={type === "sponser" ? "outline" : "filled"}
          >
            {type}
          </Badge>
        </Box>
        <Divider my="sm" />
      </Box>
    </>
  );
};
