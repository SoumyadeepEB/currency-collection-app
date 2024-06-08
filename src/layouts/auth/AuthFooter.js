import React from 'react';

export default function AuthFooter() {
  return (
    <footer className="bg-light text-dark p-3">
        &copy; All rights reserved - {new Date().getFullYear()}
    </footer>
  )
}
