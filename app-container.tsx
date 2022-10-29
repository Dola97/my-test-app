import { FC, PropsWithChildren } from "react";
import { AppShell, Divider, Group, Header, Title } from "@mantine/core";

const headerHeight = 60;

const Flex: FC<PropsWithChildren<{ center?: boolean }>> = ({
  children,
  center,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: center ? "center" : "flex-start",
      }}
    >
      {children}
    </div>
  );
};

export const AppContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppShell
      sx={{ backgroundColor: "#FBFBFB" }}
      styles={{
        body: { padding: "0", paddingTop: headerHeight + 1 },
        main: { padding: 0 },
      }}
      header={
        <Header height={headerHeight} px="lg">
          <Group position="apart" sx={{ height: "100%" }}>
            <Flex>
              <Title order={3}>Open Bonnet</Title>
              <Divider sx={{ marginLeft: 12 }} orientation="vertical" />
            </Flex>

            <Flex center>{/* <AdderResult /> */}</Flex>
            <Flex />
          </Group>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};
