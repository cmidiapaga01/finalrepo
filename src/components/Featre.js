// 'use client' // Este comentário é específico para Next.js ou alguns setups específicos. Mantenha ou remova conforme necessário.

import React, { ReactElement } from 'react';
import { Box, SimpleGrid, Text, Stack, Flex, Image } from '@chakra-ui/react';
import image1 from '../assets/images/react.svg'
import image2 from '../assets/images/javascript.svg'
import image3 from '../assets/images/svg.svg'

interface FeatureProps {
  title: string;
  text: string;
  imageSrc: string; // Usaremos 'imageSrc' para passar o caminho da imagem
}

const Feature = ({ title, text, imageSrc }: FeatureProps) => {
  return (
    <Stack textAlign="center" align="center">
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        mb={1}>
        <Image src={imageSrc} boxSize="50px" alt={title} /> {/* Usando a imagem */}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumnsWithImages() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          imageSrc={image1} // Passando o caminho da imagem importada
          title={'Lifetime Support'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          imageSrc={image2}
          title={'Unlimited Donations'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          imageSrc={image3}
          title={'Instant Delivery'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
      </SimpleGrid>
    </Box>
  );
}
