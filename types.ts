// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Band information object
interface BandInfo extends CosmicObject {
  type: 'band-info';
  metadata: {
    bio?: string;
    formed_year?: string;
    genre?: string;
    members?: Member[];
    spotify_artist_id?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    social_links?: {
      spotify?: string;
      instagram?: string;
      twitter?: string;
      youtube?: string;
    };
  };
}

// Band member interface
interface Member extends CosmicObject {
  type: 'members';
  metadata: {
    role?: string;
    instrument?: string;
    bio?: string;
    image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Album interface
interface Album extends CosmicObject {
  type: 'albums';
  metadata: {
    release_date?: string;
    spotify_album_id?: string;
    cover_art?: {
      url: string;
      imgix_url: string;
    };
    description?: string;
    tracks?: Track[];
    genre?: string;
  };
}

// Track interface
interface Track extends CosmicObject {
  type: 'tracks';
  metadata: {
    duration?: string;
    spotify_track_id?: string;
    album?: Album;
    track_number?: number;
    lyrics?: string;
  };
}

// API response types
interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards for runtime validation
function isBandInfo(obj: CosmicObject): obj is BandInfo {
  return obj.type === 'band-info';
}

function isAlbum(obj: CosmicObject): obj is Album {
  return obj.type === 'albums';
}

// Export all types
export type {
  CosmicObject,
  BandInfo,
  Member,
  Album,
  Track,
  CosmicResponse
};

export {
  isBandInfo,
  isAlbum
};