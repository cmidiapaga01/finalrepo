import React from 'react';
import { Box, Button, Text, useColorModeValue, VStack, Image } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import image1 from '../assets/images/react.svg'

// Criando versões animadas dos componentes do Chakra UI
const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionImage = motion(Image);
const MotionButton = motion(Button);

export default function Hero() {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      bg={useColorModeValue('gray.100', 'gray.700')}
      px={8}
      py={20}
      textAlign="center"
    >
      <VStack spacing={5}>
        <MotionText
          fontSize="5xl"
          fontWeight="bold"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Bem-vindo ao Futuro
        </MotionText>
        <MotionText
          fontSize="xl"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Explore um mundo de inovação.
        </MotionText>
        <MotionImage
          src= {image1}// Substitua pelo URL da sua imagem
          borderRadius="full"
          boxSize="150px"
          objectFit="cover"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        />
        <MotionButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          colorScheme="teal"
          size="lg"
        >
          Descubra Mais
        </MotionButton>
      </VStack>
    </MotionBox>
  );
}
