import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export enum ContactStatus {
  IDLE = 'IDLE',
  SENDING = 'SENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}