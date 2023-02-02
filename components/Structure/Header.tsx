import { ActionIcon, Card, Grid, Group } from "@mantine/core";

import { signOut, useSession } from "next-auth/react";
import { Logout } from "tabler-icons-react";
import LoginWithGoogle from "../Login/LoginWithGoogle";
import { ColorSchemeToggle } from "../ToggleScheme/ColorSchemeToggle";
import Logo from "./Logo";

export default function Header() {
  const { data: session } = useSession();

  return (
    <Card
      shadow="lg"
      p="md"
      radius="md"
      sx={{ marginTop: 25, marginBottom: 30 }}
    >
      <Grid>
        <Grid.Col span={8}>
          <Logo />
        </Grid.Col>
        <Grid.Col
          span={4}
          sx={{
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
          }}
        >
          <Group align="center">
            <LoginWithGoogle />
            <ColorSchemeToggle />
            {session && session.user ? (
              <ActionIcon
                size="xl"
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[6]
                      : theme.colors.gray[0],
                  color:
                    theme.colorScheme === "dark"
                      ? theme.colors.yellow[4]
                      : theme.colors.blue[6],
                })}
                onClick={() => signOut()}
              >
                <Logout size={20} />
              </ActionIcon>
            ) : (
              ""
            )}
          </Group>
        </Grid.Col>
      </Grid>
    </Card>
  );
}
