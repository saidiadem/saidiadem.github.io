"use client";
import React from 'react';

const ResumePage = () => {
  const resumeUrl = "https://cdn.jsdelivr.net/gh/saidiadem/saidiadem.github.io@8a0bd4627bd018080326ebb842ba2846f300099d/media/adem-saidi-resume.pdf";

  return (
    <object
      data={resumeUrl}
      type="application/pdf"
      width="100%"
      height="100%"
      style={{ height: '100vh' }}
    >
      <p>Your browser does not support PDFs. Please download the PDF to view it: <a href={resumeUrl}>Download PDF</a>.</p>
    </object>
  );
};

export default ResumePage;
