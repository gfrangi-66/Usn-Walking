/*
  # Fix RLS Security Policies

  This migration addresses critical security vulnerabilities by:
  1. Creating an admin role management system
  2. Removing insecure policies that use USING (true) 
  3. Implementing proper role-based access control

  ## Changes Made

  ### 1. New Tables
  - `admin_users` - Tracks users with admin privileges
    - `user_id` (uuid, references auth.users)
    - `created_at` (timestamptz)
    - `created_by` (uuid, tracks who granted admin access)

  ### 2. Security Updates
  
  **Removed Policies (Insecure):**
  - All policies with USING (true) or WITH CHECK (true) that bypass RLS
  
  **New Secure Policies:**
  
  For `instructors` table:
  - Public SELECT access (data is public on website)
  - INSERT/UPDATE/DELETE only for admin users
  
  For `blog_posts` table:
  - Public SELECT access (articles are public)
  - INSERT/UPDATE/DELETE only for admin users
  
  For `courses` table:
  - Public SELECT access (course listings are public)
  - INSERT/UPDATE/DELETE only for admin users

  ### 3. Admin Management
  - Function to check if user is admin
  - RLS policies on admin_users table
  - Only existing admins can grant admin access to others

  ## Important Notes
  
  1. **Admin Setup Required**: After this migration, you must manually add your first admin user:
     ```sql
     INSERT INTO admin_users (user_id) VALUES ('your-user-uuid-here');
     ```
  
  2. **Access Control**: Only users in the `admin_users` table can modify content
  
  3. **Public Read Access**: All tables remain publicly readable for website visitors
*/

-- Create admin_users table to track who has admin privileges
CREATE TABLE IF NOT EXISTS admin_users (
  user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  created_by uuid REFERENCES auth.users(id)
);

-- Enable RLS on admin_users
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Function to check if current user is admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM admin_users
    WHERE user_id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- RLS policies for admin_users table
CREATE POLICY "Admins can view all admin users"
  ON admin_users FOR SELECT
  TO authenticated
  USING (is_admin());

CREATE POLICY "Admins can grant admin access"
  ON admin_users FOR INSERT
  TO authenticated
  WITH CHECK (is_admin());

CREATE POLICY "Admins can revoke admin access"
  ON admin_users FOR DELETE
  TO authenticated
  USING (is_admin());

-- DROP INSECURE POLICIES FOR INSTRUCTORS
DROP POLICY IF EXISTS "Authenticated users can insert instructors" ON instructors;
DROP POLICY IF EXISTS "Authenticated users can update instructors" ON instructors;
DROP POLICY IF EXISTS "Authenticated users can delete instructors" ON instructors;

-- CREATE SECURE POLICIES FOR INSTRUCTORS
CREATE POLICY "Admins can insert instructors"
  ON instructors FOR INSERT
  TO authenticated
  WITH CHECK (is_admin());

CREATE POLICY "Admins can update instructors"
  ON instructors FOR UPDATE
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

CREATE POLICY "Admins can delete instructors"
  ON instructors FOR DELETE
  TO authenticated
  USING (is_admin());

-- DROP INSECURE POLICIES FOR BLOG_POSTS
DROP POLICY IF EXISTS "Authenticated users can insert blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can update blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Authenticated users can delete blog posts" ON blog_posts;

-- CREATE SECURE POLICIES FOR BLOG_POSTS
CREATE POLICY "Admins can insert blog posts"
  ON blog_posts FOR INSERT
  TO authenticated
  WITH CHECK (is_admin());

CREATE POLICY "Admins can update blog posts"
  ON blog_posts FOR UPDATE
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

CREATE POLICY "Admins can delete blog posts"
  ON blog_posts FOR DELETE
  TO authenticated
  USING (is_admin());

-- DROP INSECURE POLICIES FOR COURSES
DROP POLICY IF EXISTS "Authenticated users can insert courses" ON courses;
DROP POLICY IF EXISTS "Authenticated users can update courses" ON courses;
DROP POLICY IF EXISTS "Authenticated users can delete courses" ON courses;

-- CREATE SECURE POLICIES FOR COURSES
CREATE POLICY "Admins can insert courses"
  ON courses FOR INSERT
  TO authenticated
  WITH CHECK (is_admin());

CREATE POLICY "Admins can update courses"
  ON courses FOR UPDATE
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

CREATE POLICY "Admins can delete courses"
  ON courses FOR DELETE
  TO authenticated
  USING (is_admin());
