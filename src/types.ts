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
  markerId: number;
  latitude: number;
  longitude: number;
}

export interface MarkerPostType {
  address: string;
  content: string;
  latitude: number;
  longitude: number;
  markerImageKeys: string[];
  title: string;
}

export interface BoundsType {
  ne: CenterMarkerType;
  nw: CenterMarkerType;
  se: CenterMarkerType;
  sw: CenterMarkerType;
}
