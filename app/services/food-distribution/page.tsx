import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../_components/ui/button';
import Icon from '../../_components/AppIcon';

const FoodDistributionPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">African Food Distribution</h1>
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

        {/* Call to Action */}
        <section className="bg-primary/10 py-12 px-4 rounded-lg text-center">
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

export default FoodDistributionPage;