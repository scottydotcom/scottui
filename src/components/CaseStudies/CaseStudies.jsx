import { Box, Heading, Flex, Text, Tag, Link } from "@chakra-ui/react";
import { caseStudies } from "../../data/caseStudies";

const CaseStudies = () => {
  return (
    <Box id="case-studies">
      <Heading size="md" mb={6} color="accent">
        Case Studies
      </Heading>

      <Flex direction="column" gap={6}>
        {caseStudies.map((study, i) => (
          <Box
            key={i}
            p={6}
            borderBottom="1px solid"
            borderColor="surface"
            transition="0.2s ease"
            _hover={{ bg: "surface" }}
          >
            <Heading size="md" color="text">
              {study.title}
            </Heading>

            <Text color="muted" mt={2} mb={4}>
              {study.summary}
            </Text>

            <Flex gap={2} wrap="wrap">
              {study.tags.map((tag, idx) => (
                <Tag key={idx} bg="olive.700" color="olive.100">
                  {tag}
                </Tag>
              ))}
            </Flex>

            <Link
              href={study.link}
              color="accent"
              mt={4}
              display="inline-block"
            >
              Read Case Study →
            </Link>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default CaseStudies;
