/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  includes: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualifications: string[];
  bio: string;
  imageUrl: string;
}

export interface Review {
  id: string;
  author: string;
  text: string;
  rating: number;
  source: 'Google' | 'Facebook';
}

export interface GalleryItem {
  id: string;
  url: string;
  type: 'image' | 'video';
  caption?: string;
}
