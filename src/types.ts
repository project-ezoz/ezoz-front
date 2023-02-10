export interface MarkerType {
  title: string;
  latlan: string;
  contents: string;
}

export interface CenterMarkerType {
  lat: number;
  lng: number;
}

export interface PlaceType {
  id: number;
  title: string;
  lat: string;
  lng: string;
  content: string;
}

export interface MarkerPostType {
  address: string;
  content: string;
  latitude: string;
  longitude: string;
  markerImageKeys: string[];
  title: string;
}

export interface BoundsType {
  ne: CenterMarkerType;
  nw: CenterMarkerType;
  se: CenterMarkerType;
  sw: CenterMarkerType;
}
