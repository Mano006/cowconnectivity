
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Camera, Upload } from 'lucide-react';

interface HealthMetric {
  id: string;
  label: string;
}

const BreedingRecommendations = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [milkYield, setMilkYield] = useState('');
  const [healthMetrics, setHealthMetrics] = useState<string[]>([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  
  // Mock health metrics
  const availableHealthMetrics: HealthMetric[] = [
    { id: 'disease-free', label: 'Disease Free' },
    { id: 'vaccination', label: 'Up-to-date Vaccination' },
    { id: 'parasite-free', label: 'Parasite Free' },
    { id: 'good-fertility', label: 'Good Fertility History' },
    { id: 'good-udder', label: 'Healthy Udder' },
  ];

  const handleHealthMetricChange = (id: string) => {
    setHealthMetrics(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would normally send the data to an API
    // For now, we'll just set hasSubmitted to show recommendations
    setHasSubmitted(true);
    console.log({
      image: selectedImage ? "Image uploaded" : "No image",
      milkYield,
      healthMetrics
    });
  };

  // Mock breeding recommendations (would normally come from an API)
  const breedingRecommendations = {
    suggestions: [
      {
        bullId: "B1234",
        breed: "Gir",
        compatibility: "High",
        traits: ["High milk yield", "Disease resistance", "Heat tolerance"]
      },
      {
        bullId: "B5678",
        breed: "Sahiwal",
        compatibility: "Medium",
        traits: ["Improved fertility", "Adaptability", "Docile temperament"]
      }
    ],
    geneticOverview: "Based on your cow's profile, breeding with these bulls will enhance milk production while maintaining disease resistance. The offspring are expected to show improved adaptability to local climate conditions."
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-kamdhenu-primary">
        Breeding Recommendations
      </h1>
      
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 border border-kamdhenu-primary/20">
        {!hasSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-kamdhenu-dark">Upload Cow Photo</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                  className={`border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center h-60 cursor-pointer hover:bg-kamdhenu-light/50 transition-colors ${
                    selectedImage ? 'border-kamdhenu-primary' : 'border-gray-300'
                  }`}
                  onClick={() => document.getElementById('cow-photo')?.click()}
                >
                  <input
                    id="cow-photo"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                  
                  {selectedImage ? (
                    <img 
                      src={selectedImage} 
                      alt="Uploaded cow" 
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <>
                      <Upload className="h-12 w-12 text-kamdhenu-primary mb-4" />
                      <p className="text-gray-500 text-center">Click or drag to upload a photo</p>
                      <Button 
                        type="button"
                        variant="outline" 
                        className="mt-4 border-kamdhenu-primary text-kamdhenu-primary hover:bg-kamdhenu-primary hover:text-white"
                      >
                        Select Image
                      </Button>
                    </>
                  )}
                </div>
                
                <div>
                  <p className="text-gray-600 mb-4">
                    Upload a clear photo of your cow for more accurate breeding recommendations.
                  </p>
                  
                  <div className="flex flex-col gap-4">
                    <Button 
                      type="button"
                      className="flex items-center gap-2 bg-kamdhenu-primary hover:bg-kamdhenu-primary/90"
                      onClick={() => document.getElementById('cow-photo')?.click()}
                    >
                      <Upload size={18} />
                      Upload from Gallery
                    </Button>
                    
                    <Button 
                      type="button"
                      variant="outline"
                      className="flex items-center gap-2 border-kamdhenu-primary text-kamdhenu-primary hover:bg-kamdhenu-primary hover:text-white"
                    >
                      <Camera size={18} />
                      Take Photo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4 text-kamdhenu-dark">Milk Yield Data</h2>
              <Label htmlFor="milk-yield">Average Daily Milk Yield (Liters)</Label>
              <Input
                id="milk-yield"
                type="number"
                placeholder="e.g., 15"
                value={milkYield}
                onChange={(e) => setMilkYield(e.target.value)}
                className="border-kamdhenu-primary/30 focus:border-kamdhenu-primary max-w-xs"
                required
              />
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-kamdhenu-dark">Health Metrics</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {availableHealthMetrics.map((metric) => (
                  <div key={metric.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={metric.id} 
                      checked={healthMetrics.includes(metric.id)}
                      onCheckedChange={() => handleHealthMetricChange(metric.id)}
                      className="border-kamdhenu-primary data-[state=checked]:bg-kamdhenu-primary data-[state=checked]:text-white"
                    />
                    <Label htmlFor={metric.id} className="cursor-pointer">{metric.label}</Label>
                  </div>
                ))}
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full md:w-auto bg-kamdhenu-primary hover:bg-kamdhenu-primary/90"
            >
              Get Breeding Suggestions
            </Button>
          </form>
        ) : (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-semibold mb-6 text-kamdhenu-primary text-center">
              Recommended Breeding Pairs
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {breedingRecommendations.suggestions.map((suggestion, index) => (
                <Card key={index} className="border border-kamdhenu-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-kamdhenu-dark">
                      Bull ID: {suggestion.bullId}
                    </h3>
                    <p className="mb-2"><span className="font-medium">Breed:</span> {suggestion.breed}</p>
                    <p className="mb-2">
                      <span className="font-medium">Compatibility:</span>{' '}
                      <span className={
                        suggestion.compatibility === "High" 
                          ? "text-green-600 font-medium" 
                          : "text-yellow-600 font-medium"
                      }>
                        {suggestion.compatibility}
                      </span>
                    </p>
                    
                    <h4 className="font-medium mt-4 mb-2">Genetic Traits:</h4>
                    <ul className="list-disc pl-5 text-gray-600">
                      {suggestion.traits.map((trait, i) => (
                        <li key={i}>{trait}</li>
                      ))}
                    </ul>
                    
                    <Button className="mt-4 w-full bg-kamdhenu-primary hover:bg-kamdhenu-primary/90">
                      Request Breeding
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-kamdhenu-light p-4 rounded-lg border border-kamdhenu-primary/20">
              <h3 className="text-lg font-semibold mb-2 text-kamdhenu-primary">Genetic Traits Overview</h3>
              <p className="text-gray-700">{breedingRecommendations.geneticOverview}</p>
            </div>
            
            <div className="flex justify-center mt-8">
              <Button 
                variant="outline" 
                className="border-kamdhenu-primary text-kamdhenu-primary hover:bg-kamdhenu-primary hover:text-white"
                onClick={() => setHasSubmitted(false)}
              >
                Start New Recommendation
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BreedingRecommendations;
