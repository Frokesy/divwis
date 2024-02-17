import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nvtswugwmcgzarjqiiml.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52dHN3dWd3bWNnemFyanFpaW1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ5MDIzMDgsImV4cCI6MjAxMDQ3ODMwOH0.yT2Rer3A3p3-t0bs2Ko2cXuAl2_Br4T7HDndqml6qQE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)