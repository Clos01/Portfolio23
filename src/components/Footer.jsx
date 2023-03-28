import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-[#1c5f93c3]  text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-bold mb-4">Carlos Rivas</h4>
              <p className="mb-4">
          Please feel free to contact for any questions
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          © {new Date().getFullYear()}. Made by{' '}
          <p className="inline-block">Carlos</p>
        </div>
      </div>
    </footer>
  );
};
