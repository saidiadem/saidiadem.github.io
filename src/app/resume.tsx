"use client";
import React from 'react';

const ResumePage = () => {
  return (
    <object
      data="/resume.pdf"
      type="application/pdf"
      width="100%"
      height="100%"
      style={{ height: '100vh' }}
    >
      <p>Your browser does not support PDFs. Please download the PDF to view it: <a href="/resume.pdf">Download PDF</a>.</p>
    </object>
  );
};

export default ResumePage;
