import { createBucketClient } from '@cosmicjs/sdk'
import type { BandInfo, Album } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch band information
export async function getBandInfo(): Promise<BandInfo | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'band-info',
      slug: 'angels-and-airwaves'
    }).depth(1);
    
    const bandInfo = response.object as BandInfo;
    
    if (!bandInfo || !bandInfo.title) {
      return null;
    }
    
    return bandInfo;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    console.error('Error fetching band info:', error);
    throw new Error('Failed to fetch band information');
  }
}

// Fetch albums/discography
export async function getAlbums(): Promise<Album[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'albums' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const albums = response.objects as Album[];
    
    // Sort by release date (newest first)
    return albums.sort((a, b) => {
      const dateA = new Date(a.metadata?.release_date || '').getTime();
      const dateB = new Date(b.metadata?.release_date || '').getTime();
      return dateB - dateA;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching albums:', error);
    throw new Error('Failed to fetch albums');
  }
}