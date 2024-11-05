import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import useWeather from "../../hooks/useWeather";

const WeatherWidget = () => {
  const { data, refetch, error, isLoading } = useWeather();
  console.log(data);
  console.log(data?.weather[0].icon);
  if (isLoading)
    return (
      <Text textAlign={"center"} fontSize={30}>
        Loading...
      </Text>
    );
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Card
        width={"600px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        alignSelf={"center"}
      >
        <CardHeader
          backgroundColor={"wheat"}
          width={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
          flexDir={"column"}
          overflow={"hidden"}
          borderRadius={10}
        >
          <Text as={"h1"} color={"ButtonFace"}>
            Location - {data?.name}{" "}
          </Text>
          <Avatar
            alignSelf={"center"}
            alignItems={"center"}
            size={"large"}
            src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
          />
          <Text
            color={"black"}
            fontSize={"xx-large"}
            textTransform={"uppercase"}
          >
            {data?.weather[0].description}
          </Text>
        </CardHeader>
        <CardBody>
          <VStack
            backgroundColor={"CaptionText"}
            color={"black"}
            marginBottom={4}
            borderRadius={10}
          >
            <Heading>Wind Parameters</Heading>
            <Text>Wind Direction - {data?.wind.deg}&deg;</Text>
            <Text>Wind Speed - {data?.wind.speed} m/s</Text>
          </VStack>
          <VStack backgroundColor={"ButtonFace"} padding={4} borderRadius={10}>
            <Heading color={"tomato"}>Weather Parameters</Heading>
            <Text>Avg Temp - {data?.main.temp}&deg;</Text>
            <Text>Feels Like - {data?.main.feels_like}&deg;</Text>
            <Text>Max Temp - {data?.main.temp_max}&deg;</Text>
            <Text>Min Temp - {data?.main.temp_min}&deg;</Text>
            <Text>Humidity - {data?.main.humidity}%</Text>
            <Text>Air Presssure - {data?.main.pressure} ATM</Text>
          </VStack>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </Box>
  );
};

export default WeatherWidget;
