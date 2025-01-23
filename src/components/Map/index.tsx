import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { styled } from "@mui/material/styles";
import type { MapProps } from "@/types";

const MapContainer = styled("div")({
  width: "100%",
  height: "100%",
  position: "relative",
});

const StyledMap = styled("div")({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
});

export const Map = ({ center }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<maplibregl.Map | null>(null);
  const marker = useRef<maplibregl.Marker | null>(null);

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || mapInstance.current) return;

    try {
      mapInstance.current = new maplibregl.Map({
        container: mapContainer.current,
        style: "https://demotiles.maplibre.org/style.json",
        center: center,
        zoom: 13,
        attributionControl: false,
      });

      // Add navigation control
      mapInstance.current.addControl(
        new maplibregl.NavigationControl(),
        "top-right"
      );

      // Add marker
      marker.current = new maplibregl.Marker()
        .setLngLat(center)
        .addTo(mapInstance.current);

      // Cleanup on unmount
      return () => {
        if (marker.current) {
          marker.current.remove();
          marker.current = null;
        }
        if (mapInstance.current) {
          mapInstance.current.remove();
          mapInstance.current = null;
        }
      };
    } catch (error) {
      console.error("Map initialization error:", error);
    }
  }, []);

  // Update center when it changes
  useEffect(() => {
    if (!mapInstance.current || !marker.current) return;

    mapInstance.current.setCenter(center);
    marker.current.setLngLat(center);
  }, [center]);

  return (
    <MapContainer>
      <StyledMap ref={mapContainer} />
    </MapContainer>
  );
};
