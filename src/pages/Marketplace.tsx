
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { 
  Tabs, TabsContent, TabsList, TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Search, Filter, MessageSquare, Star, MapPin, ChevronDown 
} from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  unit: string;
  seller: string;
  location: string;
  distance: string;
  rating: number;
  reviews: number;
  image: string;
}

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'milk', name: 'Milk & Dairy' },
    { id: 'fertilizer', name: 'Fertilizers' },
    { id: 'cattle', name: 'Cattle & Livestock' },
    { id: 'products', name: 'Cow Products' },
    { id: 'feed', name: 'Cow Feed' },
  ];
  
  const products: Product[] = [
    {
      id: 1,
      name: 'Organic A2 Gir Cow Milk',
      category: 'milk',
      price: 80,
      unit: 'liter',
      seller: 'Prakash Dairy Farm',
      location: 'Ahmedabad, Gujarat',
      distance: '5 km',
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=400'
    },
    {
      id: 2,
      name: 'Cow Dung Based Organic Fertilizer',
      category: 'fertilizer',
      price: 250,
      unit: '10 kg',
      seller: 'Green Earth Products',
      location: 'Pune, Maharashtra',
      distance: '12 km',
      rating: 4.6,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1586765677067-f8030bd8e303?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=400'
    },
    {
      id: 3,
      name: 'Pure Sahiwal Cow Ghee',
      category: 'milk',
      price: 850,
      unit: 'kg',
      seller: 'Traditional Dairy',
      location: 'Jaipur, Rajasthan',
      distance: '8 km',
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1631213755128-b7ee33332821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=400'
    },
    {
      id: 4,
      name: 'Healthy Gir Cow (3 years)',
      category: 'cattle',
      price: 65000,
      unit: 'cow',
      seller: 'Sharma Cattle Farm',
      location: 'Mehsana, Gujarat',
      distance: '25 km',
      rating: 4.7,
      reviews: 42,
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzkwMTQ5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400'
    },
    {
      id: 5,
      name: 'Cow Dung Cakes (Pack of 12)',
      category: 'products',
      price: 120,
      unit: 'pack',
      seller: 'Rural Crafts',
      location: 'Lucknow, UP',
      distance: '15 km',
      rating: 4.5,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1626542019711-758060b104b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=400'
    },
    {
      id: 6,
      name: 'Organic Cow Feed Mixture',
      category: 'feed',
      price: 450,
      unit: '25 kg',
      seller: 'Natural Feed Supplies',
      location: 'Coimbatore, TN',
      distance: '18 km',
      rating: 4.4,
      reviews: 63,
      image: 'https://images.unsplash.com/photo-1501944443/6a0c12de980a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=400'
    },
  ];
  
  // Filter products based on search term and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.seller.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-kamdhenu-primary">
        Marketplace
      </h1>
      
      <div className="max-w-6xl mx-auto">
        <Tabs defaultValue="buy" className="w-full">
          <TabsList className="grid grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="buy">Browse Products</TabsTrigger>
            <TabsTrigger value="sell">Sell Products</TabsTrigger>
          </TabsList>
          
          <TabsContent value="buy" className="animate-fade-in">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Sidebar with filters */}
              <div className="w-full md:w-64 shrink-0">
                <div className="bg-white rounded-lg shadow-sm border border-kamdhenu-primary/20 p-4 sticky top-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-kamdhenu-primary">Categories</h3>
                    <Filter size={18} className="text-kamdhenu-primary" />
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                          activeCategory === category.id
                            ? 'bg-kamdhenu-primary text-white'
                            : 'text-gray-700 hover:bg-kamdhenu-light/50'
                        }`}
                        onClick={() => setActiveCategory(category.id)}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 mb-6">
                    <h3 className="font-semibold text-kamdhenu-primary mb-3">Price Range</h3>
                    <div className="flex items-center gap-2">
                      <Input type="number" placeholder="Min" className="w-full" />
                      <span>-</span>
                      <Input type="number" placeholder="Max" className="w-full" />
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 mb-6">
                    <h3 className="font-semibold text-kamdhenu-primary mb-3">Location</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <Input placeholder="Your location" className="w-full" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Distance</span>
                      <button className="flex items-center text-kamdhenu-primary">
                        <span>25 km</span>
                        <ChevronDown size={16} />
                      </button>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-kamdhenu-primary hover:bg-kamdhenu-primary/90">
                    Apply Filters
                  </Button>
                </div>
              </div>
              
              {/* Main content */}
              <div className="flex-1">
                {/* Search bar */}
                <div className="relative mb-6">
                  <Input
                    type="text"
                    placeholder="Search for products, sellers, or locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-kamdhenu-primary/30 focus:border-kamdhenu-primary"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
                
                {/* Product grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <Card key={product.id} className="overflow-hidden border-kamdhenu-primary/20 hover:shadow-md transition-shadow">
                        <div className="h-48 overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-4">
                          <div className="text-sm text-kamdhenu-accent font-medium mb-1">
                            {categories.find(c => c.id === product.category)?.name || product.category}
                          </div>
                          <h3 className="font-semibold text-kamdhenu-primary mb-2">{product.name}</h3>
                          <div className="flex justify-between items-center mb-3">
                            <div className="text-lg font-bold text-kamdhenu-dark">
                              ₹{product.price} <span className="text-sm font-normal text-gray-500">/ {product.unit}</span>
                            </div>
                            <div className="flex items-center">
                              <Star size={14} className="text-yellow-500 fill-yellow-500" />
                              <span className="text-sm ml-1 font-medium">{product.rating}</span>
                              <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                            </div>
                          </div>
                          
                          <div className="text-sm text-gray-600 mb-1">Seller: {product.seller}</div>
                          <div className="flex items-start text-sm text-gray-600 mb-3">
                            <MapPin size={14} className="mr-1 mt-0.5 shrink-0" />
                            <span>{product.location} ({product.distance})</span>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 flex justify-between">
                          <Button variant="outline" className="flex-1 mr-2 border-kamdhenu-primary text-kamdhenu-primary hover:bg-kamdhenu-primary hover:text-white">
                            <MessageSquare size={16} className="mr-2" />
                            Contact
                          </Button>
                          <Button className="flex-1 bg-kamdhenu-primary hover:bg-kamdhenu-primary/90">
                            Buy Now
                          </Button>
                        </CardFooter>
                      </Card>
                    ))
                  ) : (
                    <div className="col-span-3 text-center py-10">
                      <p className="text-gray-500">No products found matching your search.</p>
                      {(searchTerm || activeCategory !== 'all') && (
                        <Button 
                          variant="link" 
                          className="text-kamdhenu-primary"
                          onClick={() => {
                            setSearchTerm('');
                            setActiveCategory('all');
                          }}
                        >
                          Clear filters
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="sell" className="animate-fade-in">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border border-kamdhenu-primary/20 p-6">
              <h2 className="text-2xl font-bold mb-6 text-center text-kamdhenu-primary">List Your Product</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Product Name</label>
                  <Input placeholder="e.g., Organic Gir Cow Milk" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Category</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kamdhenu-primary focus:border-transparent">
                      <option value="">Select a category</option>
                      {categories.filter(c => c.id !== 'all').map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Price (₹)</label>
                    <Input type="number" placeholder="e.g., 100" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Unit</label>
                    <Input placeholder="e.g., liter, kg, etc." />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Quantity Available</label>
                    <Input type="number" placeholder="e.g., 50" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Description</label>
                  <textarea 
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kamdhenu-primary focus:border-transparent min-h-[100px]"
                    placeholder="Describe your product in detail..."
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Upload Product Images</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                    <p className="text-gray-500">Click to upload or drag images here</p>
                    <p className="text-xs text-gray-400 mt-1">PNG, JPG, or WEBP (max. 5MB)</p>
                    <Input type="file" accept="image/*" multiple className="hidden" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Your Location</label>
                  <Input placeholder="e.g., Ahmedabad, Gujarat" />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Contact Information</label>
                  <Input placeholder="Phone number or email" />
                </div>
                
                <Button className="w-full bg-kamdhenu-primary hover:bg-kamdhenu-primary/90">
                  List Product
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Marketplace;
