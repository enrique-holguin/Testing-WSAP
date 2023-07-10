interface Geo {
  lat: number;
  lng: number;
}

export interface UserData {
  name: string;
  phone: number;
  address: string;
  geo: Geo;
}
