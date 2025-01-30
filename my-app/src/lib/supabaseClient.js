import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://wbzwmfglwmidzdfmvgnw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiendtZmdsd21pZHpkZm12Z253Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyNDcwMDgsImV4cCI6MjA1MzgyMzAwOH0.j0zU7xH8y2l7m5VoNggL_9cvzMEPtVeLY-qt1LeVlIg')