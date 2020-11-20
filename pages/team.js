import React from 'react';
import { NextSeo } from 'next-seo';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
} from '@chakra-ui/core';

import Container from '../components/Container';
import PersonCard from '../components/PersonCard';

const url = 'https://localhost:3000/team';
const title = 'Team - CSCI 499';
const description =
  'The team that helped make this project a reality: Andrew Hariri, Leena Mathur,  Nicole Ng, Jae Shim';

const peopleInfo = [
  {
    name: "Leena Mathur",
    description: "Senior at USC studying Computer Science, Cognitive Science, and Linguistics",
    href: "https://www.linkedin.com/in/leena-mathur/",
    picURL: "/leena.jpeg"
  },
  {
    name: "Andrew Hariri",
    description: "Senior at USC studying Computer Science and Business",
    href: "https://www.linkedin.com/in/andrew-hariri/",
    picURL: "/andrew.jpeg"
  },
  {
    name: "Nicole Ng",
    description: "Senior at USC studying Computer Science",
    href: "https://www.linkedin.com/in/nicoleng-sy/",
    picURL: "/nicole.jpeg"
  },
  {
    name: "Jae Shim",
    description: "Junior at USC studying Computer Science",
    href: "https://www.linkedin.com/in/jae-shim/",
    picURL: "/jae.jpg"
  }
]

const MembersMap = peopleInfo.map(({ name, description, href, picURL }) => (
  <PersonCard 
    key={name}
    name={name}
    description={description}
    href={href}
    picURL={picURL}
  />
));

const Team = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          images: [
            {
              url: 'https://csci-499-education-funding-and-achievement.vercel.app/team',
              alt: description,
              width: 1280,
              height: 720
            }
          ]
        }}
      />
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              Team
            </Heading>
            <Text color={secondaryTextColor[colorMode]}>
              {description}
            </Text>
            
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <>
              { MembersMap }
            </>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Team;
