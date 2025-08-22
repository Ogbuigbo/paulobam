"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../_components/ui/button';
import Icon from '../../_components/AppIcon';

const FoodDistributionPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Our actual food products with images
  const ourProducts = [
    {
      id: 1,
      name: "Premium Rice Varieties",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755893748/PHOTO-2025-08-22-18-41-44_2_xatwfs.jpg",
      description: "High-quality rice varieties sourced from local farmers"
    },
    {
      id: 2,
      name: "Fresh Garri",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755893750/PHOTO-2025-08-22-18-41-44_dijqhz.jpg",
      description: "Farm-fresh garri and seasonal produce"
    },
    {
      id: 3,
      name: "Traditional Grains & Cereals",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755893750/PHOTO-2025-08-22-18-41-45_qvmntm.jpg",
      description: "Authentic African grains and cereals"
    },
    {
      id: 4,
      name: "Dried Fish & Seafood",
            image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755893754/PHOTO-2025-08-22-18-41-46_4_fnnsnm.jpg",    
      description: "Premium dried fish and seafood products"
    },
    {
      id: 5,
      name: "Spices & Seasonings",
   image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755893752/PHOTO-2025-08-22-18-41-44_3_lnbwtj.jpg",
      description: "Authentic African spices and seasonings"
    },
    // {
    //   id: 6,
    //   name: "Legumes & Pulses",
    //   image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755893755/PHOTO-2025-08-22-18-41-46_3_nchyx8.jpg",
    //   description: "Nutritious beans, lentils, and pulses"
    // },
    {
      id: 7,
      name: "Dried Freshly Packaged Snails",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755893755/PHOTO-2025-08-22-18-41-46_2_p6hmko.jpg",
      description: "Dried freshly packed snails and premium seafood items"
    },
    {
      id: 8,
      name: "Processed Foods",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755893753/PHOTO-2025-08-22-18-41-45_2_wjnw6o.jpg",
      description: "Ready-to-cook and processed food items"
    },
    {
      id: 9,
      name: "Tropical Fruits",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755893759/PHOTO-2025-08-22-18-41-45_3_etjosd.jpg",
      description: "Fresh and dried tropical fruits"
    },
     {
      id: 10,
      name: "Dried Fish Products",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755893759/PHOTO-2025-08-22-18-41-47_2_sq8djl.jpg",
      description: "Premium dried fish varieties for long-term storage"
    },
    {
      id: 11,
      name: "Smoked Fish Delicacies",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755893760/PHOTO-2025-08-22-18-41-46_5_vjwy3w.jpg",
      description: "Traditionally smoked fish with authentic African flavors"
    },
    {
      id: 12,
      name: "Traditional Beverages",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755893763/PHOTO-2025-08-22-18-41-47_fb8v61.jpg",
      description: "Local beverages and drink mixes"
    },
    {
      id: 13,
      name: "Dried Meats & Proteins",
     image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755893769/PHOTO-2025-08-22-18-41-47_3_aoipi1.jpg", 
      description: "Preserved meats and protein sources"
    },
    {
      id: 14,
      name: "Specialty Items",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755893764/PHOTO-2025-08-22-18-41-47_5_zjscpx.jpg",
      description: "Unique African specialty food products"
    },
    {
      id: 15,
      name: "Packaged Goods",
     image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755893765/PHOTO-2025-08-22-18-41-46_dxaumk.jpg",
      description: "Ready-to-ship packaged food items"
    },
    {
      id: 16,
      name: "Bulk Supplies",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755893772/PHOTO-2025-08-22-18-41-47_4_wjrfzw.jpg",
      description: "Large quantity bulk food supplies"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(ourProducts.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(ourProducts.length / 4)) % Math.ceil(ourProducts.length / 4));
  };

  // Sample data for African food products
  const foodCategories = [
    {
      id: 1,
      name: "Grains & Cereals",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755854859/sacks-healthy-legumes-grains_13_zp5ev0.jpg",
      products: ["Rice", "Maize", "Millet", "Sorghum", "Wheat"]
    },
    {
      id: 2,
      name: "Tubers & Roots",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755855095/photorealistic-portrait-african-woman_1_13_urjpnj.jpg", // fresh yams & cassava
      products: ["Yam", "Cassava", "Sweet Potato", "Cocoyam", "Plantain"]
    },
    {
      id: 3,
      name: "Vegetables",
      image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg", // African market vegetables
      products: ["Spinach", "Okra", "Tomatoes", "Peppers", "Onions"]
    },
    {
      id: 4,
      name: "Fruits",
      image: "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg", // tropical fruits basket
      products: ["Mangoes", "Oranges", "Pineapples", "Bananas", "Pawpaw"]
    },
    {
      id: 5,
      name: "Legumes & Nuts",
      image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg", // beans & nuts closeup
      products: ["Beans", "Groundnuts", "Soybeans", "Bambara nuts", "Cowpeas"]
    },
    {
      id: 6,
      name: "Proteins",
      image: "https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg", // fish & meat market
      products: ["Beef", "Poultry", "Fish", "Goat Meat", "Eggs"]
    }
  ];

  const services = [
    {
      title: "Cold Chain Logistics",
      description: "Temperature-controlled storage and transportation for perishable goods",
      icon: "Snowflake"
    },
    {
      title: "Bulk Distribution",
      description: "Large-scale distribution to supermarkets, markets, and wholesalers",
      icon: "Package"
    },
    {
      title: "Direct Farm Sourcing",
      description: "Partnerships with local farmers for fresh, quality produce",
      icon: "Sprout"
    },
    {
      title: "Export Services",
      description: "International distribution of African specialty foods",
      icon: "Plane"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality checks and food safety standards",
      icon: "CheckCircle"
    },
    {
      title: "Custom Packaging",
      description: "Branded packaging solutions for retail and wholesale",
      icon: "PackageOpen"
    }
  ];

  const regions = [
    {
      name: "West Africa",
      specialties: ["Jollof Rice", "Fufu", "Suya", "Moin Moin", "Gari"]
    },
    {
      name: "East Africa",
      specialties: ["Injera", "Ugali", "Nyama Choma", "Sukuma Wiki", "Matoke"]
    },
    {
      name: "Southern Africa",
      specialties: ["Sadza", "Biltong", "Bobotie", "Pap", "Braai"]
    },
    {
      name: "North Africa",
      specialties: ["Couscous", "Tagine", "Ful Medames", "Shakshuka", "Brik"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 w-full pt-28">
        <Image
          src="https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg"
          alt="African Food Distribution"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4 pt-28">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">African Food Supplies</h1>
            <p className="text-xl mb-8">Connecting authentic African cuisine to markets worldwide</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Request Distribution Services
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Premium African Food Distribution</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We specialize in sourcing, packaging, and distributing authentic African food products 
            across Nigeria and international markets. Our network ensures fresh, quality produce 
            reaches consumers while supporting local farmers and producers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Icon name={service.icon as any} size={32} className="text-primary mr-4" />
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Our Products Showcase */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Premium Food Supplies</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We supply authentic African food products worldwide. From traditional grains to specialty items, 
              all our products are carefully sourced and quality-assured for international shipping.
            </p>
          </div>

          {/* Product Slider */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(ourProducts.length / 4) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                      {ourProducts.slice(slideIndex * 4, slideIndex * 4 + 4).map((product) => (
                        <div key={product.id} className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold mb-2 text-sm">{product.name}</h3>
                            <p className="text-xs text-muted-foreground">{product.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg z-10"
              disabled={currentSlide === 0}
            >
              <Icon name="ChevronLeft" size={24} className="text-primary" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg z-10"
              disabled={currentSlide === Math.ceil(ourProducts.length / 4) - 1}
            >
              <Icon name="ChevronRight" size={24} className="text-primary" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: Math.ceil(ourProducts.length / 4) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* International Shipping Notice */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
            <div className="flex items-center mb-3">
              <Icon name="Plane" size={24} className="text-green-600 mr-3" />
              <h3 className="text-lg font-semibold text-green-800">International Shipping Available</h3>
            </div>
            <p className="text-green-700">
              All our products can be shipped internationally with proper packaging and documentation. 
              We handle export compliance and ensure your products reach you fresh and in perfect condition.
            </p>
          </div>
        </div>

        {/* Food Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Food Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodCategories.map((category) => (
              <div key={category.id} className="group relative overflow-hidden rounded-lg cursor-pointer">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.products.slice(0, 3).map((product, index) => (
                      <span key={index} className="text-sm text-white/90 bg-white/20 px-2 py-1 rounded">
                        {product}
                      </span>
                    ))}
                    {category.products.length > 3 && (
                      <span className="text-sm text-white/90 bg-white/20 px-2 py-1 rounded">
                        +{category.products.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Specialties */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Regional African Specialties</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {regions.map((region, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-primary">{region.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {region.specialties.map((specialty, idx) => (
                    <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your food supply needs? Contact us today for personalized solutions.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-8">
              {/* WhatsApp Contact */}
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Send us a WhatsApp Message</h3>
                <p className="text-muted-foreground mb-4">Get instant response on WhatsApp</p>
                <a 
                  href="https://wa.me/2348118452043" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  08118452043
                </a>
              </div>

              {/* Form Contact */}
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fill out our Form</h3>
                <p className="text-muted-foreground mb-4">We'll get back to you within 24 hours</p>
                <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Icon name="Mail" size={20} className="mr-2" />
                  Contact Form
                </Button>
                </Link>
              </div>
            </div>

            {/* Quick Contact Info */}
            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Business Hours:</strong> Monday - Friday: 8:00 AM - 6:00 PM | Saturday: 9:00 AM - 4:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        {/* <section className="bg-primary/10 py-12 px-4 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Distribute Your Products?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our network of food producers and distributors. We handle the logistics so you can focus on what you do best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Become a Supplier
            </Button>
            <Button size="lg" variant="outline">
              Request Distribution
            </Button>
          </div>
        </section> */}

        {/* Back to Sectors */}
        <div className="text-center mt-12">
          <Link href="/services" className="text-primary hover:underline flex items-center justify-center">
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Back to All Sectors
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FoodDistributionPage;