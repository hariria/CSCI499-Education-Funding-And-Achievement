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
    picURL: "https://media-exp1.licdn.com/dms/image/C4E03AQHequWuSuDpVg/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=bWyjyOa0D03ZnQ7cIjyk6s98qRoEOIbhf5nd9VcE4u0"
  },
  {
    name: "Andrew Hariri",
    description: "Senior at USC studying Computer Science and Business",
    href: "https://www.linkedin.com/in/andrew-hariri/",
    picURL: "https://media-exp1.licdn.com/dms/image/C4E03AQFgQ-3X67wFUw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=c2fP1esntOGsWyDuew94-3uEgDZ4lha7gnIAo1sWZwU"
  },
  {
    name: "Nicole Ng",
    description: "Senior at USC studying Computer Science",
    href: "https://www.linkedin.com/in/nicoleng-sy/",
    picURL: "https://media-exp1.licdn.com/dms/image/C5603AQHB7yyNJ41RKg/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=tdV1I8s_V1m7HS9Ee3YCOyrMwRep_dZFrJ0fGV-vHSw"
  },
  {
    name: "Jae Shim",
    description: "Junior at USC studying Computer Science",
    href: "https://www.linkedin.com/in/jae-shim/",
    picURL: "https://media-exp1.licdn.com/dms/image/C4E35AQEIVkoUWgLFvw/profile-framedphoto-shrink_200_200/0?e=1604354400&v=beta&t=D_C7IwjwnWGXKJhV0-dzAItr9a308IEHbhl4pVjwVLI"
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
              url: 'https://leerob.io/static/images/dashboard.jpg',
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
