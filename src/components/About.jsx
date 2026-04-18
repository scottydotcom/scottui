import {
  Box,
  Heading,
  Text,
  Link,
  Flex,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { skills } from "../data/skills";
import { hobbies } from "../data/hobbies";

const About = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box id="about">
      <Heading size="md" mb={4} color="accent">
        About Me
      </Heading>

      <Text color="muted" maxW="600px">
        Write a short blurb about who you are, what you do, and what drives your work.
        Keep it warm, human, and focused on your strengths.
      </Text>

      {/* Skills Section */}
      <Box mt={2}>
        <Heading size="sm" color="accent" mb={3}>
          Skills I Use
        </Heading>

        <Flex wrap="wrap" gap={2}>
          {skills.map((skill) => (
            <Box
              key={skill}
              px={3}
              py={1}
              borderRadius="md"
              bg="surface"
              color="highlight"
              fontSize="sm"
              border="1px solid"
              borderColor="surface"
            >
              {skill}
            </Box>
          ))}
        </Flex>
      </Box>

      <Link onClick={onOpen} color="accent" cursor="pointer" display="inline-block" mt={2}>
        Read More →
      </Link>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />

        <ModalContent
          bg="bg"
          color="text"
          border="1px solid"
          borderColor="surface"
          transform={{
            base: "translateX(0)",
            md: "translateX(-380px)",
          }}
        >
          <ModalHeader>About Me</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Text color="muted" mb={4}>
              I’m a frontend engineer who focuses on building clean, accessible, and thoughtful digital experiences. I
              care deeply about visual harmony, component‑driven architecture, and creating interfaces that feel
              intuitive and emotionally warm. My work blends modern engineering practices with a strong sense of
              aesthetic polish.
            </Text>

            <Text color="muted" mb={4}>
              I enjoy working with React, Chakra UI, Vite, and design systems. I’m passionate about workflow
              optimization, theme design, and crafting digital environments that feel premium and intentional.
            </Text>

            <Text color="muted" mb={4}>
              Outside of coding, I love exploring color palettes, customizing digital tools, and building small creative
              projects that help me refine my craft.
            </Text>
            <Text color="muted" mb={6}>
              Outside of coding, here are a few things that inspire me and keep me balanced:
            </Text>

            {/* ⭐ 3×3 Grid of Hobbies */}
            <SimpleGrid columns={[2, 3]} spacing={6} mb={6}>
              {hobbies.map((item) => (
                <Flex key={item.text} direction="column" align="center" justify="center" gap={2} color="muted">
                  <Box fontSize="2xl" color="highlight">
                    <item.icon />
                  </Box>
                  <Text fontSize="md">{item.text}</Text>
                </Flex>
              ))}
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default About;
