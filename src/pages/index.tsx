import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { SearchBar } from "@/components/SearchBar";
import { InfoPanel } from "@/components/InfoPanel";
import { Map } from "@/components/Map";
import type { IPAddressData } from "@/types";

const HeaderBackground = styled(Box)(({ theme }) => ({
  background: 'url("/pattern-bg.png") no-repeat center center',
  backgroundSize: "cover",
  height: "300px",
  padding: theme.spacing(3),
  position: "relative",
}));

const MapContainer = styled(Box)({
  height: "calc(100vh - 300px)",
  width: "100%",
  position: "relative",
  zIndex: 1,
});

const InfoContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  bottom: "-70px",
  width: "100%",
  maxWidth: "1110px",
  zIndex: 2,
  padding: theme.spacing(0, 2),
}));

const LoadingContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  backgroundColor: "white",
  borderRadius: "15px",
  minHeight: "150px",
});

const defaultIPData: IPAddressData = {
  ip: "",
  location: {
    country: "",
    region: "",
    city: "",
    lat: 51.505,
    lng: -0.09,
    timezone: "",
  },
  isp: "",
};

// Fetch function
const fetchIPData = async (searchTerm: string): Promise<IPAddressData> => {
  if (!searchTerm) return defaultIPData;

  const response = await fetch(`/api/ipAddress?searchTerm=${searchTerm}`);
  if (!response.ok) {
    throw new Error("Failed to fetch IP data");
  }
  return response.json();
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data, isLoading, error } = useQuery<IPAddressData>({
    queryKey: ["ipAddress", searchTerm],
    queryFn: () => fetchIPData(searchTerm),
    initialData: defaultIPData,
    enabled: true,
  });

  const handleSearch = (formData: { ip: string }) => {
    setSearchTerm(formData.ip);
  };

  return (
    <Box>
      <HeaderBackground>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            color="white"
            textAlign="center"
            gutterBottom
            fontWeight={500}>
            IP Address Tracker
          </Typography>
          <SearchBar onSearch={handleSearch} />
          <InfoContainer>
            {isLoading ? (
              <LoadingContainer>
                <CircularProgress />
              </LoadingContainer>
            ) : error ? (
              <LoadingContainer>
                <Typography color="error">
                  Failed to load IP data. Please try again.
                </Typography>
              </LoadingContainer>
            ) : (
              <InfoPanel data={data} />
            )}
          </InfoContainer>
        </Container>
      </HeaderBackground>
      <MapContainer>
        <Map
          center={[
            data?.location?.lat || defaultIPData.location.lat,
            data?.location?.lng || defaultIPData.location.lng,
          ]}
        />
      </MapContainer>
    </Box>
  );
}
