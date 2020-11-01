import React from 'react';
import {
  Flex,
  Link,
  Heading,
  Text,
  Stack,
  Icon,
  Image,
  useColorMode,
  Box
} from '@chakra-ui/core';

const PersonCard = ({ name, description, href, icon, picURL }) => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600'
  };
  const iconColor = {
    light: 'gray.1000',
    dark: 'white'
  };

  return (
    <Link
      mb={4}
      href={href}
      onClick={() => {}}
      title={name}
      isExternal
      _hover={{
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        textDecoration: 'none'
      }}
    >
      <Flex
        align="center"
        border="1px solid"
        borderColor={borderColor[colorMode]}
        borderRadius={4}
        p={4}
      >
        <Box paddingRight={4}>
          <Image 
            rounded="full"
            minWidth="100px"
            size="150px"
            objectFit="cover"
            src={picURL}
            alt={name}
          />
        </Box>
        <Stack>
          <Heading
            as="h4"
            size="md"
            fontWeight="bold"
            mb={4}
            letterSpacing="tighter"
          >
            {name}
          </Heading>
          <Text wordBreak="break-word" lineHeight="1.3">{description}</Text>
        </Stack>
      </Flex>
    </Link>
  );
};

export default PersonCard;
