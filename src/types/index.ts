export interface Location {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  timezone: string;
}

export interface IPAddressData {
  ip: string;
  location: Location;
  isp: string;
}

export interface SearchBarProps {
  onSearch: (data: { ip: string }) => void;
}

export interface InfoPanelProps {
  data: IPAddressData;
}

export interface MapProps {
  center: [number, number];
}
