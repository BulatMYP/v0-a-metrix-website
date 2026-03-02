import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lzedhcgtfztqkbyhedig.supabase.co'
const supabaseAnonKey = 'sb_publishable_UAlkujXbpelJLQxom7EqKA_S8onRLic'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
