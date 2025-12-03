const SUPABASE_URL = 'https://ovomjuqotkdxcselclqp.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92b21qdXFvdGtkeGNzZWxjbHFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2OTU3MDYsImV4cCI6MjA4MDI3MTcwNn0.w35Nc9oe7rgYCyu4Obomno8WgrD4zIUf4fk5p-QY3Uo';
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
