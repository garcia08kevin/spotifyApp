// Generated by https://quicktype.io

export interface ArtistAlbum {
  href:     string;
  limit:    number;
  next:     string;
  offset:   number;
  previous: string;
  total:    number;
  items:    Item[];
}

export interface Item {
  album_type:             string;
  total_tracks:           number;
  available_markets:      string[];
  external_urls:          ExternalUrls;
  href:                   string;
  id:                     string;
  images:                 Image[];
  name:                   string;
  release_date:           string;
  release_date_precision: string;
  restrictions:           Restrictions;
  type:                   string;
  uri:                    string;
  copyrights:             Copyright[];
  external_ids:           ExternalIDS;
  genres:                 string[];
  label:                  string;
  popularity:             number;
  album_group:            string;
  artists:                Artist[];
}

export interface Artist {
  external_urls: ExternalUrls;
  href:          string;
  id:            string;
  name:          string;
  type:          string;
  uri:           string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Copyright {
  text: string;
  type: string;
}

export interface ExternalIDS {
  isrc: string;
  ean:  string;
  upc:  string;
}

export interface Image {
  url:    string;
  height: number;
  width:  number;
}

export interface Restrictions {
  reason: string;
}