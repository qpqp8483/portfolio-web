import Link from "next/link";
import React from "react";

const Hearder = () => {
  return (
    <div>
      <h1>FolioWoo</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/project">Project</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Hearder;
