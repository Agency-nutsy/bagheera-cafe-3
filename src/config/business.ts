// This file contains all business-specific configuration. 
// Change values here to update them globally across the entire website.

export const BUSINESS_CONFIG = {
  name: "Bagheera Cafe & Lounge",
  domain: "www.bagheeracafeandlounge.in",
  tagline: "Step Into The Wild Side of Luxury",
  description: "North Delhi's premier jungle-themed restaurant and lounge on Hudson Lane, GTB Nagar. Signature cocktails, multicuisine menu, live DJ.",
  contact: {
    phone: "09910192252",
    phoneDisplay: "+91-09910192252",
    whatsapp: "https://wa.me/919910192252",
    email: "info@bagheeracafeandlounge.in", // Placeholder, update if client provides one
  },
  address: {
    full: "2529, 2nd Floor, Hudson Lane, GTB Nagar, New Delhi, Delhi 110033",
    street: "2529, 2nd Floor, Hudson Lane, GTB Nagar",
    city: "New Delhi",
    state: "Delhi",
    zip: "110009", // Used in JSON-LD
    country: "IN",
  },
  coordinates: {
    latitude: 28.6946494,
    longitude: 77.2042514,
  },
  social: {
    instagram: "https://www.instagram.com/bagheeracafelounge",
  },
  maps: {
    link: "https://maps.app.goo.gl/B9Ue3e81M6N6t8pWA",
    embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.6053890123537!2d77.20330663854992!3d28.694665495574586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdf568600a91%3A0xe54d622f671ff215!2sBagheera%20cafe%20%26%20Lounge!5e0!3m2!1sen!2sin!4v1709210214300!5m2!1sen!2sin",
  },
  hours: {
    open: "11:00",
    close: "01:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  },
  seo: {
    priceRange: "₹₹",
    cuisine: ["Multicuisine", "North Indian", "Chinese", "Italian"],
  }
};
