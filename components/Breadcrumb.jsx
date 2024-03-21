import React from "react";
import Link from "next/link";

const Breadcrumb = ({ paths }) => {
  return (
    <nav aria-label="breadcrumb" className="flex">
      {paths.map((path, index) => {
        const isLast = index === paths.length - 1;
        // Decode the path name for display
        const decodedName = decodeURIComponent(path.name).replace(
          /(^|\s)\S/g,
          (l) => l.toUpperCase()
        );

        return (
          <React.Fragment key={index}>
            {index > 0 && <span className="mx-2">/</span>}{" "}
            {/* Add leading slash for items after the first */}
            {isLast ? (
              <span className="text-gray-500">{decodedName}</span> // Last item, not a link, decoded
            ) : (
              <Link href={path.path} passHref>
                <a className="text-blue-600 hover:text-blue-800">
                  {decodedName}
                </a>{" "}
                {/* Decoded path name */}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
