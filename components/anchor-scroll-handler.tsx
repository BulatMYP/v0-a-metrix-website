'use client';

import { useEffect } from 'react';

export function AnchorScrollHandler() {
  useEffect(() => {
    // Handle initial anchor on page load
    const handleAnchor = () => {
      const hash = window.location.hash;
      if (hash) {
        // Remove the # and get the element
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          // Small delay to ensure DOM is fully rendered
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    // Run on initial load
    handleAnchor();

    // Also handle hash changes
    window.addEventListener('hashchange', handleAnchor);
    return () => window.removeEventListener('hashchange', handleAnchor);
  }, []);

  return null;
}
