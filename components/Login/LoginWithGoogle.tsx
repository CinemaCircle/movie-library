import { Avatar, Button, Group, Text, UnstyledButton } from "@mantine/core";
import { signIn, useSession } from "next-auth/react";
import { BrandGoogle } from "tabler-icons-react";

export default function LoginWithGoogle() {
  const { data: session } = useSession();

  return (
    <>
      {session && session.user ? (
        <Group position="center">
          <UnstyledButton
            sx={(theme) => ({
              display: "block",
              width: "100%",
              padding: theme.spacing.md,
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[0]
                  : theme.black,

              "&:hover": {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
              },
            })}
          >
            <Group>
              <Avatar radius="xl" src={session.user.image} alt="it's me" />

              <div style={{ flex: 1 }}>
                <Text size="sm" weight={500}>
                  {session.user.name}
                </Text>
                <Text color="dimmed" size="xs">
                  {session.user.email}
                </Text>
              </div>
            </Group>
          </UnstyledButton>
        </Group>
      ) : (
        <Button
          component="a"
          href="#"
          variant="outline"
          leftIcon={<BrandGoogle size={14} />}
          color="red"
          onClick={() => signIn("google")}
        >
          Login
        </Button>
      )}
    </>
  );
}
