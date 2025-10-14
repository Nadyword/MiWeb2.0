"use client";
import { useState, useEffect } from 'react';

export default function DynamicYear() {
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return <span>{year}</span>;
}
