const SUPABASE_URL = env.REACT_APP_SUPABASE_URL
const SUPABASE_KEY = env.REACT_APP_ANON_KEY
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Mount the ready-made Auth UI
supabase.auth.ui.createAuthComponent('#auth', {
  providers: [], // you can add 'google', 'github', etc.
  appearance: {
    theme: 'default',
    variables: {
      default: {
        colors: { brand: '#2f8bfd', brandAccent: '#1a6cf5' },
      },
    },
  },
});

// Redirect if already logged in
supabase.auth.getSession().then(({ data: { session } }) => {
  if (session) window.location.href = '/dashboard.html';
});

// Listen for login events
supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_IN') window.location.href = '/dashboard.html';
});
