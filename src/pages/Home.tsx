
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const features = [
    {
      title: 'Breed Information',
      description: 'Explore detailed information about indigenous cow breeds of India.',
      icon: '🐄',
      path: '/breeds',
    },
    {
      title: 'Breeding Recommendations',
      description: 'Get personalized breeding suggestions based on genetic diversity.',
      icon: '🧬',
      path: '/breeding',
    },
    {
      title: 'Cow Dung Utilization',
      description: 'Learn how to effectively use cow dung for organic farming and energy.',
      icon: '🌱',
      path: '/dung',
    },
    {
      title: 'Farmer Education',
      description: 'Access educational resources on sustainable farming practices.',
      icon: '📚',
      path: '/education',
    },
    {
      title: 'Marketplace',
      description: 'Buy and sell cow products, including milk, fertilizer, and more.',
      icon: '🛒',
      path: '/marketplace',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <div className="kamdhenu-pattern py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-kamdhenu-dark mb-6">
            Welcome to Kamdhenu Connect!
          </h1>
          <p className="text-xl md:text-2xl text-kamdhenu-dark/80 mb-8 max-w-3xl mx-auto">
            Your partner in preserving Indian cow breeds and promoting sustainable agriculture.
          </p>
          <Link to="/breeds">
            <Button 
              size="lg" 
              className="bg-kamdhenu-primary hover:bg-kamdhenu-primary/90 text-white px-8 py-6 text-lg"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      {/* Features section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-kamdhenu-dark">Our Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border border-kamdhenu-primary/20 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-kamdhenu-primary">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link to={feature.path}>
                  <Button variant="outline" className="text-kamdhenu-primary border-kamdhenu-primary hover:bg-kamdhenu-primary hover:text-white">
                    Explore
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-kamdhenu-secondary py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join the Movement to Preserve Indigenous Cow Breeds
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Together, we can protect India's agricultural heritage while promoting sustainable farming practices for future generations.
          </p>
          <Link to="/breeds">
            <Button 
              size="lg"
              className="bg-white text-kamdhenu-secondary hover:bg-kamdhenu-light"
            >
              Get Started Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
