
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface BreedType {
  id: number;
  name: string;
  description: string;
  traits: string[];
  region: string;
  image: string;
}

const BreedInformation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data for Indian cow breeds
  const breeds: BreedType[] = [
    {
      id: 1,
      name: 'Gir',
      description: 'One of the principal Zebu breeds originating in India, known for its milk production and hardiness.',
      traits: ['High milk yield', 'Heat tolerant', 'Disease resistant'],
      region: 'Gujarat, Maharashtra',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzkwMTQ5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400'
    },
    {
      id: 2,
      name: 'Sahiwal',
      description: 'A breed from the Punjab region, known for its milk production and resistance to parasites.',
      traits: ['High milk yield', 'Parasite resistant', 'Heat tolerant'],
      region: 'Punjab, Haryana',
      image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzkwMTQ5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400'
    },
    {
      id: 3,
      name: 'Vechur',
      description: 'A small-sized breed known for its high milk quality and adaptability.',
      traits: ['Low feed requirement', 'Drought resistant', 'High quality milk'],
      region: 'Kerala',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzkwMTQ5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400'
    },
    {
      id: 4,
      name: 'Tharparkar',
      description: 'A dairy breed from the Thar desert region, adapted to harsh conditions.',
      traits: ['Drought resistant', 'Heat tolerant', 'Moderate milk yield'],
      region: 'Rajasthan',
      image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzkwMTQ5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400'
    },
    {
      id: 5,
      name: 'Red Sindhi',
      description: 'A dairy breed known for its rich milk and adaptability to various climates.',
      traits: ['High milk fat content', 'Disease resistant', 'Adaptable'],
      region: 'Sindh (now in Pakistan) and Gujarat',
      image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzkwMTQ5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400'
    },
    {
      id: 6,
      name: 'Rathi',
      description: 'A dual-purpose breed known for its milk production in arid regions.',
      traits: ['Good milk yield', 'Drought resistant', 'Adaptable to harsh conditions'],
      region: 'Rajasthan',
      image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzkwMTQ5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400'
    }
  ];

  // Filter breeds based on search term
  const filteredBreeds = breeds.filter(breed => 
    breed.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    breed.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
    breed.traits.some(trait => trait.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-kamdhenu-primary">
        Indigenous Cow Breeds of India
      </h1>
      
      {/* Search bar */}
      <div className="max-w-md mx-auto mb-8 relative">
        <Input
          type="text"
          placeholder="Search by breed name, region, or trait..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 border-kamdhenu-primary/30 focus:border-kamdhenu-primary"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
      </div>
      
      {/* Breed cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBreeds.map((breed) => (
          <Card key={breed.id} className="overflow-hidden border-kamdhenu-primary/20 hover:shadow-md transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                src={breed.image} 
                alt={breed.name} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-kamdhenu-primary">{breed.name}</h3>
              <p className="text-gray-600 mb-4">{breed.description}</p>
              <div className="mb-3">
                <span className="font-medium text-kamdhenu-dark">Region: </span> 
                <span className="text-gray-600">{breed.region}</span>
              </div>
              <h4 className="font-medium text-kamdhenu-dark mb-2">Key Traits:</h4>
              <ul className="list-disc pl-5 text-gray-600">
                {breed.traits.map((trait, index) => (
                  <li key={index}>{trait}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="bg-kamdhenu-light/50 p-4">
              <Button 
                className="w-full bg-kamdhenu-primary hover:bg-kamdhenu-primary/90 text-white"
              >
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {filteredBreeds.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No breeds found matching your search.</p>
          <Button 
            variant="link" 
            className="text-kamdhenu-primary"
            onClick={() => setSearchTerm('')}
          >
            Clear search
          </Button>
        </div>
      )}
    </div>
  );
};

export default BreedInformation;
