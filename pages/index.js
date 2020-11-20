import React from 'react';
import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/core';

import Container from '../components/Container';
import ProjectCard from '../components/ProjectCard';


const maxWidth = "700px";

const Index = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <Container>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth={maxWidth}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth={maxWidth}
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            Exploring the Relationship Between Achievement and Funding in K-12 California Public Schools
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>
            Pervasive and persistent achievement gaps exist across K-12 schools in California. School performance data on state-wide standardized tests shows that these achievement gaps are often correlated with demographic, socioeconomic, geographic, and school-related characteristics. Furthermore, large variations in annual expenses per pupil, adjusted for cost of living, exist from state to state and from school district to school district. Property taxes and the housing prices in a given district significantly impact funding for public K-12 schools in that area. While some education policy researchers have theorized that school funding is a strong determinant of school performance, the educational research community still debates the significance of school funding in relation to academic achievement. The goal of our project is to (1) analyze financial, geographic, and demographic factors that correlate with K-12 student and school achievement gaps in California, (2) develop ML approaches for predicting student performance in California K-12 schools based on certain financial, geographic, and regional socioeconomic factors, and (3) leverage insights from ML to develop optimization strategies for allocating school funding to maximize student performance in California K-12 schools. This report provides an update on the progress of our project and the specific work planned for the future.  
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth={maxWidth}
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Paper
          </Heading>
          <ProjectCard
            title="CSCI 499 Project Paper"
            description="Exploring the Relationship Between Achievement and Funding in K-12 California Public Schools"
            href="/CSCI499_Fall2020_ProjectReport.pdf"
            icon="react2025"
          />
        </Flex>
      </Stack>
    </Container>
  );
};

export default Index;
