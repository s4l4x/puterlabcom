import { Center, Image, Stack, Text } from '@mantine/core';

export default function HomePage() {
  return (
    <>
      <Stack h="100vh" justify="space-around">
        <Center>
          <Image
            src="puterlab-horizontal-01.png"
            alt="puterlab horizontal logo"
            width={200}
            // height={600}
          />
        </Center>
        <Center>
          <Text>Welcome to PUTERLAB.COM. Makers of things.</Text>
        </Center>
      </Stack>
    </>
  );
}
