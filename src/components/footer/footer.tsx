import React from "react";

const Footer = () => {
  return (
    <div className="flex gap-4 bg-black ">
      <div className="flex-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-black">
          <div className="bg-blue-500 text-white p-4">
            <h4 className="py-2">Abstract</h4>
            <p className="text-xs"> Start Trial</p>
            <p className="text-xs">Pricing</p>
            <p className="text-xs">Download</p>
          </div>
          <div className="bg-green-500 text-white p-4">
            <h4 className="py-2">Resources</h4>
            <p className="text-xs"> Start Trial</p>
            <p className="text-xs">Pricing</p>
            <p className="text-xs">Download</p>
          </div>
          <div className="bg-red-500 text-white p-4">
            <h4 className="py-2">Community</h4>
            <p className="text-xs"> Start Trial</p>
            <p className="text-xs">Pricing</p>
            <p className="text-xs">Download</p>
          </div>
          <div className="bg-yellow-500 text-white p-4">
            <div>
              <h4 className="py-2">Company</h4>
              <p className="text-xs"> Start Trial</p>
              <p className="text-xs">Pricing</p>
              <p className="text-xs">Download</p>
            </div>

            <div>
              <h4 className="py-2">Company</h4>
              <p className="text-xs"> Start Trial</p>
              <p className="text-xs">Pricing</p>
              <p className="text-xs">Download</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div>
          <p>
            © Copyright 2025 Abstract Studio Design, Inc. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
