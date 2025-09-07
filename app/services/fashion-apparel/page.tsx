import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../_components/ui/button';
import Icon from '../../_components/AppIcon';

const FashionApparelPage = () => {
  // Fashion categories showcasing actual clothing items
  const fashionCategories = [
    {
      id: 1,
      name: "Jeans & Denim",
      image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600",
      items: ["Skinny Jeans", "Straight Fit", "Bootcut", "High Waist", "Distressed Denim"]
    },
    {
      id: 2,
      name: "Polo Shirts",
      image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600",
      items: ["Classic Polo", "Long Sleeve Polo", "Performance Polo", "Striped Polo", "Color Block Polo"]
    },
    {
      id: 3,
      name: "Corporate Shirts",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
      items: ["Dress Shirts", "Oxford Shirts", "Button Down", "Formal Shirts", "Business Casual"]
    },
    {
      id: 4,
      name: "T-Shirts & Tops",
      image: "https://images.pexels.com/photos/1304469/pexels-photo-1304469.jpeg?auto=compress&cs=tinysrgb&w=600", 
      items: ["Basic Tees", "Graphic Tees", "V-Neck", "Crew Neck", "Tank Tops"]
    },
  
    {
      id: 6,
      name: "Dresses & Skirts",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1757244833/3a348fe0-2ef7-4cfb-8dd5-50118bc64e6b_yuwhlm.jpg",
      items: ["Casual Dresses", "Formal Dresses", "Maxi Dresses", "A-Line Skirts", "Pencil Skirts"]
    },
    {
      id: 7,
      name: "Pants & Trousers",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1757244676/03ab892b-a38c-46a6-ac9d-0edc2c7fa2c8_mjnzb2.jpg",
      items: ["Chinos", "Dress Pants", "Cargo Pants", "Wide Leg", "Tapered Fit"]
    },
    {
      id: 8,
      name: "Sports wear",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1757244214/SOUTH_AFRICA_2008_2009_AWAY_FOOTBAL_SHIRT_SOCCER_cxexts.jpg",
      items: ["Sports Bras", "Leggings", "Athletic Shorts", "Performance Tees", "Workout Sets"]
    },
    {
      id: 9,
      name: "Footwear",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1757244757/Kente_African_Print_Unisex_High_Top_Slip-on_Canvas_nu2mc8.jpg",
      items: ["Sneakers", "Dress Shoes", "Boots", "Sandals", "Loafers"]
    }
  ];

  const services = [
    {
      title: "Bulk Manufacturing",
      description: "Large-scale production of African-inspired clothing lines",
      icon: "Factory"
    },
    {
      title: "Retail Distribution",
      description: "Supply to boutiques, department stores, and fashion retailers",
      icon: "ShoppingBag"
    },
    {
      title: "E-commerce Fulfillment",
      description: "End-to-end online order processing and shipping",
      icon: "Truck"
    },
    {
      title: "Custom Design Services",
      description: "Collaboration with designers for exclusive collections",
      icon: "Palette"
    },
    {
      title: "Quality Control",
      description: "Rigorous inspection to maintain high standards",
      icon: "CheckCircle"
    },
    {
      title: "International Export",
      description: "Global distribution of African fashion worldwide",
      icon: "Plane"
    }
  ];

  const designers = [
    {
      name: "Lisa Folawiyo",
      specialty: "Modern Ankara Designs",
      image: "https://images.pexels.com/photos/3760610/pexels-photo-3760610.jpeg"
    },
    {
      name: "Orange Culture",
      specialty: "Gender-Fluid Fashion",
      image: "https://images.pexels.com/photos/2065189/pexels-photo-2065189.jpeg"
    },
    {
      name: "Maki Oh",
      specialty: "Adire Contemporary Wear",
      image: "https://images.pexels.com/photos/2531553/pexels-photo-2531553.jpeg"
    },
    {
      name: "Tiffany Amber",
      specialty: "Luxury Ready-to-Wear",
      image: "https://images.pexels.com/photos/2917623/pexels-photo-2917623.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 w-full pt-28">
        <Image
          src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg"
          alt="African Fashion Distribution"
          fill
          className="object-cover"
          loading='lazy'
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4 pt-28">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">African Fashion & Apparel</h1>
            <p className="text-xl mb-8">Distributing authentic African fashion to the world</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Request Fashion Distribution
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Premium African Fashion Distribution</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We connect African fashion designers and manufacturers with global markets. 
            Our distribution network ensures that authentic African apparel reaches retailers 
            and consumers while preserving cultural heritage and supporting local artisans.
          </p>
        </div>

        {/* Clothing Delivery Video Section */}
                <div className="mb-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Our Clothing Delivery Service</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                      Watch how we efficiently deliver clothing items across regions with our specialized logistics network
                    </p>
                  </div>
                  
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                    {/* Video Player */}
                    <div className="flex-1 max-w-2xl">
                      <div className="relative rounded-xl overflow-hidden shadow-2xl">
                        <video 
                          controls 
                          className="w-full h-[300px] rounded-xl"
                          poster="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756308159/workwear-coats-jackets-hanging-rack_29_li8heb.jpg" // Optional: add a thumbnail
                        >
                          <source 
                            src="https://res.cloudinary.com/dpkn1ppzj/video/upload/v1756306883/AQN99WsETBcfI1K01zrcpNEGiqVfnKxsi9w3CDCyE4-p19-ZqvvsxSMBuEEwupb13-UCiatZ7bCF9myK1uEE2peL_dbegid.mp4" 
                            type="video/mp4" 
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                    
                    {/* Video Description and Link */}
                    <div className="flex-1 max-w-md text-center lg:text-left">
                      <h3 className="text-2xl font-semibold mb-4">Efficient Clothing Logistics</h3>
                      <p className="text-muted-foreground mb-6">
                        Our specialized delivery service ensures that clothing items reach their destination 
                        in perfect condition, on time, and with complete tracking visibility throughout 
                        the journey.
                      </p>
                      
                      <div className="bg-white p-6 rounded-xl shadow-md">
                        <h4 className="font-semibold mb-3 text-lg">See More on Facebook</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Watch additional videos and see customer testimonials on our Facebook page
                        </p>
                        <a 
                          href="https://web.facebook.com/100082895544838/videos/1216946240204540/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                          <Icon name="ExternalLink" size={20} className="mr-2" />
                          Watch on Facebook
                        </a>
                      </div>
                    </div>
                  </div>
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

        {/* Fashion Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Clothing Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fashionCategories.map((category) => (
              <div key={category.id} className="group relative overflow-hidden rounded-lg cursor-pointer">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  loading='lazy'
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.slice(0, 3).map((item, index) => (
                      <span key={index} className="text-sm text-white/90 bg-white/20 px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                    {category.items.length > 3 && (
                      <span className="text-sm text-white/90 bg-white/20 px-2 py-1 rounded">
                        +{category.items.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      

       

        {/* Call to Action */}
        <section className="bg-primary/10 py-12 px-4 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Distribute Your Fashion Line?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our network of fashion designers and retailers. We handle the distribution so you can focus on creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Become a Partner
            </Button>
            <Button size="lg" variant="outline">
              Request Distribution
            </Button>
          </div>
        </section>

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

export default FashionApparelPage;