import React from 'react';
import { Flex, Link, IconButton } from '@chakra-ui/core';


const Footer = () => (
  <Flex align="center" mb={4} direction="column">
    <div>
      <Link href="https://github.com/hariria" title="GitHub" isExternal>
        <IconButton
          aria-label="GitHub"
          icon="github"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/andrew-hariri/"
        title="LinkedIn"
        isExternal
      >
        <IconButton
          aria-label="LinkedIn"
          icon="linkedin"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href="mailto:hariria@usc.edu" title="Email" isExternal>
        <IconButton
          aria-label="Email"
          icon="mail"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
    </div>
    <div>
      <span>Copyright © 2020</span>
    </div>
  </Flex>
);

export default Footer;
