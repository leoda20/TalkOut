// js/auth/env.example.js
// Copy this file to `js/auth/env.js` (or otherwise generate it at deploy time)
// DO NOT commit your real keys to the repo. Keep this file out of version control.

// Example: expose runtime env to the browser via a small script that sets
// `window.__ENV__`. For static sites you can generate this file at deploy time
// with your CI/CD or hosting provider (Vercel, Netlify, etc.) secrets.

window.__ENV__ = {
  // Replace with your Supabase project URL (found in Supabase project settings)
  SUPABASE_URL: 'https://ovomjuqotkdxcselclqp.supabase.co',

  // Replace with your Supabase anon/public key (not service_role)
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92b21qdXFvdGtkeGNzZWxjbHFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2OTU3MDYsImV4cCI6MjA4MDI3MTcwNn0.w35Nc9oe7rgYCyu4Obomno8WgrD4zIUf4fk5p-QY3Uo'
};

// Example usage in HTML:
// <script src="/js/auth/env.js"></script>
// <script type="module" src="/js/auth/supabaseClient.js"></script>
