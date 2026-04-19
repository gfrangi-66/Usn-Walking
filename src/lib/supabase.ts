import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Instructor = {
  id: string;
  name: string;
  photo_url: string;
  discipline: string;
  region: string;
  province: string;
  city: string;
  qualification: string;
  email: string;
  phone: string;
  bio: string;
  latitude: number;
  longitude: number;
  created_at: string;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  image_url: string;
  author: string;
  published_at: string;
  created_at: string;
};

export type Course = {
  id: string;
  title: string;
  level: string;
  discipline: string;
  description: string;
  requirements: string;
  duration_hours: number;
  start_date: string;
  end_date: string;
  location: string;
  max_participants: number;
  price: number;
  created_at: string;
};
