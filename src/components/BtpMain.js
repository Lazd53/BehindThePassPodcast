import React from 'react';
import SocialMediaButton from './SocialMediaButton';

export default function BtpMain (props) {
  return (
    <main>
      <p>Listen up! - a Sacramento based group of friends who talk sports, food, and non-sense. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className="social-media-btn-container">
        <SocialMediaButton text="Add us on Apple Music"/>
        <SocialMediaButton text="Follow us on Twitter"/>
      </div>
    </main>
  )
}
