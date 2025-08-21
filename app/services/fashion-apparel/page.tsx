import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../_components/ui/button';
import Icon from '../../_components/AppIcon';

const FashionApparelPage = () => {
  // Sample data for African fashion categories
  const fashionCategories = [
    {
      id: 1,
      name: "Traditional Attire",
       image: "https://images.pexels.com/photos/8942186/pexels-photo-8942186.jpeg?auto=compress&cs=tinysrgb&w=600",
      items: ["Ankara Dresses", "Aso Ebi", "Kente Outfits", "Agbada", "Boubous"]
    },
    {
      id: 2,
      name: "Modern African Wear",
      image: "https://images.pexels.com/photos/1841189/pexels-photo-1841189.jpeg?auto=compress&cs=tinysrgb&w=600",
      items: ["African Print Suits", "Contemporary Dresses", "Fusion Wear", "Designer Pieces", "Statement Outfits"]
    },
    {
      id: 3,
      name: "Accessories",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600",
      items: ["Beaded Jewelry", "Headwraps/Gele", "African Print Bags", "Leather Goods", "Traditional Footwear"]
    },
    {
      id: 4,
      name: "Textiles & Fabrics",
      image: "https://images.pexels.com/photos/1304469/pexels-photo-1304469.jpeg?auto=compress&cs=tinysrgb&w=600", 
      items: ["Ankara Prints", "Kente Cloth", "Aso Oke", "Adire", "Bogolan Mud Cloth"]
    },
    {
      id: 5,
      name: "Children's Wear",
      image: "https://images.pexels.com/photos/913254/pexels-photo-913254.jpeg?auto=compress&cs=tinysrgb&w=600",
      items: ["Traditional Outfits", "Modern Styles", "Celebration Wear", "School Uniforms", "Casual Wear"]
    },
    {
      id: 6,
      name: "Unisex Collections",
      image: "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600",
      items: ["African Print Shirts", "Dashikis", "Kaftans", "Matching Sets", "Loungewear"]
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
          priority
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
          <h2 className="text-3xl font-bold text-center mb-12">Our Fashion Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fashionCategories.map((category) => (
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

        {/* Featured Designers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Featured African Designers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designers.map((designer, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden shadow-md">
                <Image
                  src={designer.image}
                  alt={designer.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{designer.name}</h3>
                  <p className="text-muted-foreground text-sm">{designer.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fashion Showcase */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">African Fashion Showcase</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2">
              <Image
                src="https://images.pexels.com/photos/9146686/pexels-photo-9146686.jpeg"
                alt="Fashion 1"
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <Image
                src="https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg"
                alt="Fashion 2"
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div>
              <Image
                src="https://images.pexels.com/photos/4065181/pexels-photo-4065181.jpeg"
                alt="Fashion 3"
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div>
              <Image
                src="https://images.pexels.com/photos/14565997/pexels-photo-14565997.jpeg"
                alt="Fashion 4"
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div>
              <Image
                src="https://images.pexels.com/photos/3738089/pexels-photo-3738089.jpeg"
                alt="Fashion 5"
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
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