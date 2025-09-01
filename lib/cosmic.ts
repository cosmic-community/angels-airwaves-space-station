import { createBucketClient } from '@cosmicjs/sdk'
import type { BandInfo, NewsPost, Album, TourDate } from '@/types'

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

// Fetch latest news posts
export async function getLatestNews(limit: number = 6): Promise<NewsPost[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'news' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const posts = response.objects as NewsPost[];
    
    // Sort by date (newest first) and limit results
    return posts
      .sort((a, b) => {
        const dateA = new Date(a.metadata?.date || '').getTime();
        const dateB = new Date(b.metadata?.date || '').getTime();
        return dateB - dateA;
      })
      .slice(0, limit);
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching news posts:', error);
    throw new Error('Failed to fetch news posts');
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

// Fetch upcoming tour dates
export async function getTourDates(): Promise<TourDate[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'tour-dates' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const tourDates = response.objects as TourDate[];
    
    // Filter for upcoming dates and sort by date
    const now = new Date();
    return tourDates
      .filter(date => {
        const eventDate = new Date(date.metadata?.date || '');
        return eventDate >= now;
      })
      .sort((a, b) => {
        const dateA = new Date(a.metadata?.date || '').getTime();
        const dateB = new Date(b.metadata?.date || '').getTime();
        return dateA - dateB;
      });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching tour dates:', error);
    throw new Error('Failed to fetch tour dates');
  }
}

// Fetch a single news post by slug
export async function getNewsPost(slug: string): Promise<NewsPost | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'news',
      slug
    }).depth(1);
    
    const post = response.object as NewsPost;
    
    if (!post || !post.metadata?.content) {
      return null;
    }
    
    return post;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    console.error('Error fetching news post:', error);
    throw new Error('Failed to fetch news post');
  }
}