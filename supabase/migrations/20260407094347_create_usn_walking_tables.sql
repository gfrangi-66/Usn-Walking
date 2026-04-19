/*
  # USN Walking Database Schema

  1. New Tables
    - `instructors`
      - `id` (uuid, primary key)
      - `name` (text) - Instructor full name
      - `photo_url` (text) - Profile photo URL
      - `discipline` (text) - Nordic Walking, Fit Walking, Trekking Sportivo, or Walking Adattato
      - `region` (text) - Italian region
      - `province` (text) - Province within region
      - `city` (text) - City location
      - `qualification` (text) - Certification level (Istruttore Base, Avanzato, Maestro)
      - `email` (text) - Contact email
      - `phone` (text) - Contact phone
      - `bio` (text) - Short biography
      - `latitude` (decimal) - Map coordinates
      - `longitude` (decimal) - Map coordinates
      - `created_at` (timestamptz)
      
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text) - Post title
      - `slug` (text) - URL-friendly slug
      - `excerpt` (text) - Short description
      - `content` (text) - Full article content
      - `category` (text) - Post category (Salute, Tecnica, Eventi, etc.)
      - `image_url` (text) - Featured image
      - `author` (text) - Author name
      - `published_at` (timestamptz)
      - `created_at` (timestamptz)
      
    - `courses`
      - `id` (uuid, primary key)
      - `title` (text) - Course name
      - `level` (text) - Base, Avanzato, or Maestro
      - `discipline` (text) - Which walking discipline
      - `description` (text) - Course description
      - `requirements` (text) - Prerequisites
      - `duration_hours` (integer) - Total hours
      - `start_date` (date) - Course start date
      - `end_date` (date) - Course end date
      - `location` (text) - Where course is held
      - `max_participants` (integer)
      - `price` (decimal)
      - `created_at` (timestamptz)
      
  2. Security
    - Enable RLS on all tables
    - Add policies for public read access (data is public on website)
    - Add policies for authenticated users to manage content
*/

-- Create instructors table
CREATE TABLE IF NOT EXISTS instructors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  photo_url text DEFAULT '',
  discipline text NOT NULL,
  region text NOT NULL,
  province text DEFAULT '',
  city text DEFAULT '',
  qualification text NOT NULL,
  email text DEFAULT '',
  phone text DEFAULT '',
  bio text DEFAULT '',
  latitude decimal(10, 8),
  longitude decimal(11, 8),
  created_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text DEFAULT '',
  content text DEFAULT '',
  category text NOT NULL,
  image_url text DEFAULT '',
  author text DEFAULT 'USN Walking',
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Create courses table
CREATE TABLE IF NOT EXISTS courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  level text NOT NULL,
  discipline text NOT NULL,
  description text DEFAULT '',
  requirements text DEFAULT '',
  duration_hours integer DEFAULT 0,
  start_date date,
  end_date date,
  location text DEFAULT '',
  max_participants integer DEFAULT 20,
  price decimal(10, 2) DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE instructors ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "Anyone can view instructors"
  ON instructors FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can view courses"
  ON courses FOR SELECT
  TO anon, authenticated
  USING (true);

-- Authenticated users can manage content
CREATE POLICY "Authenticated users can insert instructors"
  ON instructors FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update instructors"
  ON instructors FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete instructors"
  ON instructors FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert blog posts"
  ON blog_posts FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update blog posts"
  ON blog_posts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete blog posts"
  ON blog_posts FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert courses"
  ON courses FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update courses"
  ON courses FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete courses"
  ON courses FOR DELETE
  TO authenticated
  USING (true);

-- Insert sample data for instructors
INSERT INTO instructors (name, photo_url, discipline, region, province, city, qualification, email, phone, bio, latitude, longitude)
VALUES
  ('Marco Bianchi', 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400', 'Nordic Walking', 'Lombardia', 'Milano', 'Milano', 'Maestro', 'marco.bianchi@usnwalking.it', '+39 333 1234567', 'Istruttore certificato con 10 anni di esperienza nel Nordic Walking.', 45.4642, 9.1900),
  ('Giulia Rossi', 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400', 'Fit Walking', 'Lazio', 'Roma', 'Roma', 'Istruttore Avanzato', 'giulia.rossi@usnwalking.it', '+39 333 2345678', 'Specializzata in fit walking per principianti e terza età.', 41.9028, 12.4964),
  ('Luca Verdi', 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400', 'Trekking Sportivo', 'Veneto', 'Verona', 'Verona', 'Istruttore Avanzato', 'luca.verdi@usnwalking.it', '+39 333 3456789', 'Appassionato di montagna e trekking sportivo ad alta quota.', 45.4384, 10.9916),
  ('Sofia Neri', 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400', 'Walking Adattato', 'Toscana', 'Firenze', 'Firenze', 'Maestro', 'sofia.neri@usnwalking.it', '+39 333 4567890', 'Specializzata in walking adattato per persone con disabilità.', 43.7696, 11.2558),
  ('Andrea Ferrari', 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400', 'Nordic Walking', 'Piemonte', 'Torino', 'Torino', 'Istruttore Avanzato', 'andrea.ferrari@usnwalking.it', '+39 333 5678901', 'Istruttore di Nordic Walking per tutti i livelli.', 45.0703, 7.6869),
  ('Elena Colombo', 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400', 'Fit Walking', 'Emilia-Romagna', 'Bologna', 'Bologna', 'Istruttore Base', 'elena.colombo@usnwalking.it', '+39 333 6789012', 'Nuova istruttrice di fit walking con grande passione.', 44.4949, 11.3426);

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, category, image_url, author)
VALUES
  ('I Benefici del Nordic Walking per la Salute Cardiovascolare', 'benefici-nordic-walking-cardiovascolare', 'Scopri come il Nordic Walking può migliorare la salute del tuo cuore e del sistema circolatorio.', 'Il Nordic Walking è uno sport completo che coinvolge oltre l''85% dei muscoli del corpo...', 'Salute', 'https://images.pexels.com/photos/7432/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800', 'Dr. Giuseppe Marini'),
  ('Tecnica Corretta nel Fit Walking: Guida Completa', 'tecnica-fit-walking-guida', 'Una guida passo dopo passo per migliorare la tua tecnica di fit walking.', 'Il fit walking è accessibile a tutti, ma una tecnica corretta può fare la differenza...', 'Tecnica', 'https://images.pexels.com/photos/221210/pexels-photo-221210.jpeg?auto=compress&cs=tinysrgb&w=800', 'Marco Bianchi'),
  ('Walking Adattato: Inclusione e Benessere per Tutti', 'walking-adattato-inclusione', 'Il walking adattato rende lo sport accessibile a persone con diverse abilità.', 'L''inclusione nello sport è un valore fondamentale. Il walking adattato permette...', 'Inclusione', 'https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=800', 'Sofia Neri');

-- Insert sample courses
INSERT INTO courses (title, level, discipline, description, requirements, duration_hours, start_date, end_date, location, price)
VALUES
  ('Corso Istruttore Nordic Walking - Livello Base', 'Base', 'Nordic Walking', 'Corso di formazione per diventare istruttore di Nordic Walking di primo livello.', 'Maggiore età, certificato medico sportivo', 40, '2026-05-15', '2026-05-18', 'Milano, Lombardia', 450.00),
  ('Corso Istruttore Fit Walking - Livello Avanzato', 'Avanzato', 'Fit Walking', 'Corso avanzato per istruttori che vogliono specializzarsi nel fit walking.', 'Certificazione Base, 2 anni di esperienza', 32, '2026-06-10', '2026-06-13', 'Roma, Lazio', 550.00),
  ('Corso Maestro Trekking Sportivo', 'Maestro', 'Trekking Sportivo', 'Corso di formazione per Maestri di Trekking Sportivo.', 'Certificazione Avanzata, 5 anni di esperienza', 48, '2026-09-05', '2026-09-09', 'Trento, Trentino-Alto Adige', 750.00);