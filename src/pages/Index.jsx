import React from "react";
import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import { FaRunning } from "react-icons/fa";

const Index = () => {
  return (
    <Box maxW="800px" mx="auto" mt={8} p={6}>
      <Heading as="h1" size="2xl" textAlign="center" mb={8}>
        <Flex align="center" justify="center">
          <FaRunning />
          <Text ml={3}>Jogging Adventures</Text>
        </Flex>
      </Heading>

      <Image src="https://images.unsplash.com/photo-1590646299329-ac2652afd477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0d28lMjBmcmllbmRzJTIwam9nZ2luZyUyMGluJTIwbmF0dXJlfGVufDB8fHx8MTcxMTk2OTU0N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Friends jogging" mb={6} />

      <Heading as="h2" size="xl" mb={4}>
        Weekend Jog in the Mountains
      </Heading>

      <Text mb={6}>Last weekend, my best friend Sarah and I decided to go for a long jog in the nearby mountains. We love exploring new trails and immersing ourselves in nature. It's a great way to catch up, get some exercise, and have mini adventures together.</Text>

      <Image src="https://images.unsplash.com/photo-1444351274028-b348e6da5f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHRyYWlsfGVufDB8fHx8MTcxMTk2OTU0N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Mountain trail" mb={6} />

      <Text mb={6}>The crisp morning air felt invigorating as we started up the winding dirt path, tall evergreen trees lining both sides. About two miles in, we were treated to a breathtaking view of the valley below when the trail opened up onto a rocky overlook. We paused for a few minutes to take in the peaceful scenery before continuing on.</Text>

      <Image src="https://images.unsplash.com/photo-1502657414526-9d601ab7ba5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqb2dnaW5nJTIwYnklMjBhJTIwc3RyZWFtfGVufDB8fHx8MTcxMTk2OTU0OHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Jogging by a stream" mb={6} />

      <Text mb={6}>The trail then led us down to a bubbling stream. We stopped to splash some cool water on our faces and watch a few birds flitting between the branches overhanging the water. Feeling refreshed, we crossed a small wooden bridge and tackled the next incline, our breathing and footsteps falling into a steady rhythm.</Text>

      <Text mb={6}>After winding our way through the woods for a few more miles, we looped back to where we had started, feeling energized from our morning workout in nature. Sarah and I agreed it was the perfect way to start the weekend. We're already planning our next jogging adventure for next week - maybe we'll discover a new waterfall or scenic view to enjoy!</Text>
    </Box>
  );
};

export default Index;
