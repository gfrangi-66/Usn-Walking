/*
  # Fix Performance and Security Issues

  This migration addresses remaining security and performance issues:

  ## Changes Made

  ### 1. Performance Improvements
  
  **Added Index:**
  - `idx_admin_users_created_by` - Index on `admin_users.created_by` foreign key
    - Improves query performance when looking up who created admin accounts
    - Prevents suboptimal performance on foreign key lookups

  ### 2. Security Improvements
  
  **Fixed Function Search Path:**
  - Updated `is_admin()` function to use immutable search_path
    - Added `SET search_path = ''` to prevent search path manipulation attacks
    - Fully qualifies all table references with schema names
    - Prevents potential privilege escalation vulnerabilities
  - Recreates all dependent RLS policies

  ## Security Notes

  1. **Search Path Security**: Functions marked as SECURITY DEFINER run with the privileges 
     of the function owner. Without a fixed search_path, attackers could potentially 
     manipulate the search_path to redirect function calls to malicious tables.

  2. **Performance**: The index on created_by improves JOIN performance and foreign key 
     constraint checking, especially as the admin_users table grows.
*/

-- Add index for foreign key to improve query performance
CREATE INDEX IF NOT EXISTS idx_admin_users_created_by 
  ON admin_users(created_by);

-- Drop the existing function with CASCADE to remove dependent policies
DROP FUNCTION IF EXISTS is_admin() CASCADE;

-- Recreate is_admin function with secure search_path
CREATE OR REPLACE FUNCTION is_admin()
RETURNS boolean 
LANGUAGE plpgsql 
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.admin_users
    WHERE user_id = auth.uid()
  );
END;
$$;

-- Recreate RLS policies for admin_users table
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

-- Recreate RLS policies for instructors table
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

-- Recreate RLS policies for blog_posts table
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

-- Recreate RLS policies for courses table
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
