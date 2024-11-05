import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import useWeather from "../../hooks/useWeather";

const WeatherWidget = () => {
  const { data, refetch, error, isLoading } = useWeather();
  console.log(data);
  console.log(data?.weather[0].icon);

  return (
    <Card
      width={"600px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <CardHeader
        backgroundColor={"wheat"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        flexDir={"column"}
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
      </CardHeader>
      <CardBody>
        <Heading as={"h2"}>{`Temperature - ${data?.main.temp}`}&deg;</Heading>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default WeatherWidget;
