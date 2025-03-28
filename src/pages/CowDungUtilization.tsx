
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, BookOpen, Lightbulb } from 'lucide-react';

const CowDungUtilization = () => {
  const tutorials = [
    {
      id: 1,
      title: 'Making Organic Fertilizer from Cow Dung',
      description: 'Learn how to convert cow dung into high-quality organic fertilizer for your crops.',
      thumbnail: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzkwMTQ5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
      duration: '15 min',
    },
    {
      id: 2,
      title: 'Setting Up a Small-Scale Biogas Plant',
      description: 'A step-by-step guide to creating your own biogas production system using cow dung.',
      thumbnail: 'https://images.unsplash.com/photo-1452378229307-53043caa7e66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzkwMTQ5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
      duration: '22 min',
    },
    {
      id: 3,
      title: 'Natural Pest Control with Cow Dung',
      description: 'Use cow dung to create effective and chemical-free pest control solutions.',
      thumbnail: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzkwMTQ5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
      duration: '12 min',
    },
  ];

  const guides = [
    {
      id: 1,
      title: 'Cow Dung Cakes for Fuel',
      steps: [
        'Collect fresh cow dung',
        'Mix it with a small amount of dry straw or hay',
        'Form flat, round cakes using your hands or a mold',
        'Dry in the sun for 3-5 days until completely dry',
        'Store in a dry place for use as cooking fuel',
      ],
    },
    {
      id: 2,
      title: 'Vermicomposting with Cow Dung',
      steps: [
        'Prepare a container with drainage holes',
        'Add a layer of soil at the bottom',
        'Mix cow dung with agricultural waste in a 1:1 ratio',
        'Add earthworms (ideally Eisenia fetida or local varieties)',
        'Cover with a thin layer of soil and keep moist',
        'Harvest vermicompost after 45-60 days',
      ],
    },
    {
      id: 3,
      title: 'Cow Dung Slurry for Plants',
      steps: [
        'Mix 1 part cow dung with 10 parts water',
        'Let it ferment for 3-4 days, stirring occasionally',
        'Filter the slurry using a cloth',
        'Dilute further (1:10 ratio) before applying to plants',
        'Apply to soil around plants, avoiding direct contact with stems',
      ],
    },
  ];

  const tips = [
    {
      id: 1,
      title: 'Timing Matters',
      content: 'Apply cow dung manure to fields at least 2-3 weeks before sowing seeds for best results.',
    },
    {
      id: 2,
      title: 'Quality Check',
      content: 'Good quality cow dung should be free from antibiotics. Dung from cows that graze freely produces better quality manure.',
    },
    {
      id: 3,
      title: 'Storage Best Practices',
      content: 'Store processed cow dung in a cool, dry place. Cover it to prevent nutrient loss due to sun exposure or rain.',
    },
    {
      id: 4,
      title: 'Mixing with Other Waste',
      content: 'Combine cow dung with agricultural waste like dried leaves and crop residue for balanced compost.',
    },
    {
      id: 5,
      title: 'Caution for Vegetables',
      content: 'When using cow dung for vegetable gardens, ensure it's well-composted to avoid pathogens.',
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-kamdhenu-primary">
        Cow Dung Utilization
      </h1>
      
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-lg text-center text-gray-700 mb-6">
          Cow dung is a valuable resource that can be transformed into organic fertilizers, 
          biogas, construction materials, and more. Learn how to utilize this sustainable resource effectively.
        </p>
        
        <Tabs defaultValue="tutorials" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="tutorials" className="flex items-center gap-2">
              <Play size={16} />
              <span>Video Tutorials</span>
            </TabsTrigger>
            <TabsTrigger value="guides" className="flex items-center gap-2">
              <BookOpen size={16} />
              <span>Step-by-Step Guides</span>
            </TabsTrigger>
            <TabsTrigger value="tips" className="flex items-center gap-2">
              <Lightbulb size={16} />
              <span>Quick Tips</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="tutorials" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorials.map((tutorial) => (
                <Card key={tutorial.id} className="overflow-hidden border-kamdhenu-primary/20 hover:shadow-md transition-shadow">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={tutorial.thumbnail} 
                      alt={tutorial.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Button className="bg-kamdhenu-accent hover:bg-kamdhenu-accent/90 text-white flex items-center gap-2">
                        <Play size={18} />
                        Watch Now
                      </Button>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {tutorial.duration}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-kamdhenu-primary mb-2">{tutorial.title}</h3>
                    <p className="text-gray-600 text-sm">{tutorial.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="guides" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {guides.map((guide) => (
                <Card key={guide.id} className="border-kamdhenu-primary/20 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-kamdhenu-primary text-lg mb-4">{guide.title}</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                      {guide.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                    <Button 
                      className="mt-6 w-full bg-kamdhenu-primary hover:bg-kamdhenu-primary/90"
                    >
                      View Detailed Guide
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="tips" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tips.map((tip) => (
                <Card key={tip.id} className="border-kamdhenu-primary/20 hover:shadow-sm transition-shadow">
                  <CardContent className="p-4 flex items-start gap-3">
                    <Lightbulb className="text-kamdhenu-accent shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-kamdhenu-primary mb-1">{tip.title}</h3>
                      <p className="text-gray-600">{tip.content}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="bg-kamdhenu-primary text-white rounded-lg p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Ready to optimize your farm with cow dung?</h2>
        <p className="text-center mb-6">
          Join our upcoming workshops and learn from experts about the latest techniques in cow dung utilization.
        </p>
        <div className="flex justify-center">
          <Button className="bg-white text-kamdhenu-primary hover:bg-kamdhenu-light">
            Register for Workshop
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CowDungUtilization;
