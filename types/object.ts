interface Geo {
  lat: number;
  lng: number;
}

export interface Customer {
  name: string;
  address: string;
  geo: Geo;
  phone: number;
}
