import React from "react";
import {
  ActionIcon,
  Badge,
  Box,
  Divider,
  Text,
  SimpleGrid,
  BackgroundImage,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  IconCircle,
  IconCalendarTime,
  IconArrowMoveRight,
} from "@tabler/icons";
export const ProductCard = ({ services, name, onClick, discount }: any) => {
  const matches = useMediaQuery("(min-width: 576px)");

  const Arrow = (
    <ActionIcon size="xs" color="gray" radius="xl" variant="transparent">
      <IconArrowMoveRight size={10} />
    </ActionIcon>
  );
  return (
    <>
      <Box
        onClick={onClick}
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          padding: 20,
          cursor: "pointer",
          ":hover": {
            backgroundColor: "whitesmoke",
          },
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
            {discount && (
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
                <Text color="orange">{`${discount} % discount`}</Text>
              </Badge>
            )}
          </BackgroundImage>
          <Box sx={{ paddingLeft: 10 }}>
            <Text>{name}</Text>
            <SimpleGrid spacing="xl" cols={2}>
              {services.slice(0, 6).map((item: any, key: any) => (
                <Box
                  sx={{
                    flexDirection: "row",
                    alignItems: "center",
                    display: "flex",
                  }}
                  key={`services_Products${key}`}
                >
                  <IconCircle />
                  <Text>{item}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "whitesmoke",
            flexDirection: matches ? "row" : "column",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 20,
            marginTop: 10,
          }}
        >
          <Box
            sx={{ display: "flex", alignItems: "center", flexDirection: "row" }}
          >
            <IconCalendarTime />
            <Text sx={{ paddingLeft: 10 }}>5 Hrs Taken</Text>
            <Text sx={{ paddingLeft: 20 }}>6</Text>
            <Text sx={{ paddingLeft: 5 }}>Workshop</Text>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", flexDirection: "row" }}
          >
            <Text sx={{ paddingRight: 20 }}>AED 20</Text>
            <Badge variant="filled" color="dark" size="lg" rightSection={Arrow}>
              Add to Cart
            </Badge>
          </Box>
        </Box>
        <Divider my="sm" color="gray" size="md" />
      </Box>
    </>
  );
};
