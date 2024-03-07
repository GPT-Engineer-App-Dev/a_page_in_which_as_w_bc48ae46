import React, { useState } from "react";
import { Box, Container, Select, Text, VStack } from "@chakra-ui/react";

const data = {
  USA: {
    currency: "USD",
    states: {
      California: ["Los Angeles", "San Francisco"],
      "New York": ["New York City", "Buffalo"],
    },
  },
  India: {
    currency: "INR",
    states: {
      Delhi: ["New Delhi"],
      Maharashtra: ["Mumbai", "Pune"],
    },
  },
  // Add more countries, states, and cities as needed
};

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [currency, setCurrency] = useState("");

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setSelectedState("");
    setSelectedCity("");
    setCurrency(data[country].currency);
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedCity("");
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <Container>
      <VStack spacing={4} align="stretch">
        <Box>
          <Text>Select a country:</Text>
          <Select placeholder="Select country" onChange={handleCountryChange}>
            {Object.keys(data).map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </Select>
        </Box>

        {selectedCountry && (
          <Box>
            <Text>Currency: {currency}</Text>
          </Box>
        )}

        {selectedCountry && (
          <Box>
            <Text>Select a state:</Text>
            <Select placeholder="Select state" value={selectedState} onChange={handleStateChange}>
              {Object.keys(data[selectedCountry].states).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </Select>
          </Box>
        )}

        {selectedState && (
          <Box>
            <Text>Select a city:</Text>
            <Select placeholder="Select city" value={selectedCity} onChange={handleCityChange}>
              {data[selectedCountry].states[selectedState].map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </Select>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
