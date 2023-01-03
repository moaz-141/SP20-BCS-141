import React from "react";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <div>
      <footer>
        <p>copyright &copy; {`${year}`}</p>
      </footer>
    </div>
  );
}
