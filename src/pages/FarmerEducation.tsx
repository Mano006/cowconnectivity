import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { BookOpen, Video, MessageCircle, Search, ThumbsUp, MessageSquare, Calendar, Clock, MapPin, Play } from 'lucide-react';

const FarmerEducation = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const articles = [
    {
      id: 1,
      title: 'The Importance of Native Cow Breeds in Sustainable Agriculture',
      category: 'Cow Breeds',
      author: 'Dr. Rajesh Sharma',
      date: '2023-05-15',
      readTime: '8 min read',
      excerpt: 'This article explores why native cow breeds are crucial for sustainable farming practices in India...',
      likes: 124,
      comments: 32,
    },
    {
      id: 2,
      title: 'Organic Farming with Indigenous Cows: A Success Story',
      category: 'Sustainable Farming',
      author: 'Anita Desai',
      date: '2023-04-22',
      readTime: '12 min read',
      excerpt: 'Learn how farmers across rural India are reviving traditional farming practices with indigenous cows...',
      likes: 98,
      comments: 26,
    },
    {
      id: 3,
      title: 'Health Management for Indigenous Cow Breeds',
      category: 'Animal Health',
      author: 'Dr. Sunil Patel',
      date: '2023-06-10',
      readTime: '10 min read',
      excerpt: 'A comprehensive guide to maintaining the health of indigenous cow breeds using both traditional and modern approaches...',
      likes: 156,
      comments: 41,
    },
  ];

  const videos = [
    {
      id: 1,
      title: 'How to Identify Quality Traits in Gir Cows',
      thumbnail: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzkwMTQ5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
      duration: '18:24',
      views: '12K',
      instructor: 'Rajesh Patel',
    },
    {
      id: 2,
      title: 'Traditional Methods of Feeding Indigenous Cows',
      thumbnail: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzkwMTQ5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
      duration: '24:15',
      views: '8.5K',
      instructor: 'Sunita Singh',
    },
    {
      id: 3,
      title: 'Setting Up a Small Dairy Farm with Indigenous Cows',
      thumbnail: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzkwMTQ5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400',
      duration: '32:10',
      views: '15K',
      instructor: 'Manoj Kumar',
    },
  ];

  const discussions = [
    {
      id: 1,
      title: 'Best practices for breeding Sahiwal cows?',
      author: 'Ramesh Yadav',
      avatar: 'https://i.pravatar.cc/100?img=1',
      date: '2 days ago',
      replies: 34,
      excerpt: 'I recently acquired two Sahiwal cows and I'm looking for advice on breeding them for optimal milk production...',
    },
    {
      id: 2,
      title: 'Indigenous cow feed during summer months',
      author: 'Lakshmi N.',
      avatar: 'https://i.pravatar.cc/100?img=2',
      date: '1 week ago',
      replies: 28,
      excerpt: 'The summer heat is affecting my cows' appetite. What traditional feed supplements can help during this season?',
    },
    {
      id: 3,
      title: 'Marketing strategies for selling cow dung products',
      author: 'Vijay Sharma',
      avatar: 'https://i.pravatar.cc/100?img=3',
      date: '3 days ago',
      replies: 15,
      excerpt: 'I've started producing cow dung planters and organic fertilizer. Looking for ideas to market these products locally...',
    },
  ];

  const events = [
    {
      id: 1,
      title: 'Indigenous Cow Breed Exhibition',
      date: 'June 15-16, 2023',
      location: 'Ahmedabad, Gujarat',
      description: 'An exhibition showcasing various indigenous cow breeds of India with expert talks and demonstrations.',
    },
    {
      id: 2,
      title: 'Workshop on Organic Farming with Cow-based Inputs',
      date: 'July 8, 2023',
      location: 'Pune, Maharashtra',
      description: 'Learn practical techniques for implementing cow-based organic farming methods from experienced farmers.',
    },
    {
      id: 3,
      title: 'National Conference on Indigenous Cattle Conservation',
      date: 'August 22-24, 2023',
      location: 'Delhi',
      description: 'A three-day conference bringing together farmers, researchers, and policymakers to discuss strategies for indigenous cattle conservation.',
    },
  ];

  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredVideos = videos.filter(video => 
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredDiscussions = discussions.filter(discussion => 
    discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    discussion.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-kamdhenu-primary">
        Farmer Education Center
      </h1>
      
      <div className="max-w-4xl mx-auto mb-10">
        <p className="text-lg text-center text-gray-700 mb-8">
          Access educational resources on indigenous cow breeds, sustainable farming practices, and connect with fellow farmers.
        </p>
        
        <div className="max-w-md mx-auto mb-10 relative">
          <Input
            type="text"
            placeholder="Search for articles, videos, or discussions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-kamdhenu-primary/30 focus:border-kamdhenu-primary"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
        
        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="articles" className="flex items-center gap-2">
              <BookOpen size={16} />
              <span>Articles</span>
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video size={16} />
              <span>Videos</span>
            </TabsTrigger>
            <TabsTrigger value="community" className="flex items-center gap-2">
              <MessageCircle size={16} />
              <span>Community</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Calendar size={16} />
              <span>Events</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="articles" className="animate-fade-in">
            <div className="grid grid-cols-1 gap-6">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                  <Card key={article.id} className="border-kamdhenu-primary/20 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <span className="bg-kamdhenu-light text-kamdhenu-primary px-3 py-1 rounded-full text-sm font-medium">
                          {article.category}
                        </span>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock size={14} className="mr-1" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2 text-kamdhenu-primary">{article.title}</h3>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-gray-600">
                          By <span className="font-medium">{article.author}</span> • {article.date}
                        </div>
                        <div className="flex items-center space-x-4 text-gray-500">
                          <div className="flex items-center">
                            <ThumbsUp size={14} className="mr-1" />
                            <span>{article.likes}</span>
                          </div>
                          <div className="flex items-center">
                            <MessageSquare size={14} className="mr-1" />
                            <span>{article.comments}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-kamdhenu-light/50 p-4">
                      <Button 
                        className="w-full bg-kamdhenu-primary hover:bg-kamdhenu-primary/90 text-white"
                      >
                        Read Full Article
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-500">No articles found matching your search.</p>
                  {searchTerm && (
                    <Button 
                      variant="link" 
                      className="text-kamdhenu-primary"
                      onClick={() => setSearchTerm('')}
                    >
                      Clear search
                    </Button>
                  )}
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="videos" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.length > 0 ? (
                filteredVideos.map((video) => (
                  <Card key={video.id} className="overflow-hidden border-kamdhenu-primary/20 hover:shadow-md transition-shadow">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Button className="bg-kamdhenu-accent hover:bg-kamdhenu-accent/90 text-white flex items-center gap-2">
                          <Play size={18} />
                          Watch Now
                        </Button>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-kamdhenu-primary mb-2">{video.title}</h3>
                      <div className="flex justify-between text-sm text-gray-600">
                        <div>By {video.instructor}</div>
                        <div>{video.views} views</div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-10 col-span-3">
                  <p className="text-gray-500">No videos found matching your search.</p>
                  {searchTerm && (
                    <Button 
                      variant="link" 
                      className="text-kamdhenu-primary"
                      onClick={() => setSearchTerm('')}
                    >
                      Clear search
                    </Button>
                  )}
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="community" className="animate-fade-in">
            <div className="grid grid-cols-1 gap-4">
              {filteredDiscussions.length > 0 ? (
                filteredDiscussions.map((discussion) => (
                  <Card key={discussion.id} className="border-kamdhenu-primary/20 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <img 
                          src={discussion.avatar} 
                          alt={discussion.author} 
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-1 text-kamdhenu-primary">
                            {discussion.title}
                          </h3>
                          <div className="text-sm text-gray-500 mb-2">
                            Started by {discussion.author} • {discussion.date} • {discussion.replies} replies
                          </div>
                          <p className="text-gray-600 mb-4">{discussion.excerpt}</p>
                          <Button 
                            variant="outline" 
                            className="text-kamdhenu-primary border-kamdhenu-primary hover:bg-kamdhenu-primary hover:text-white"
                          >
                            Join Discussion
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-500">No discussions found matching your search.</p>
                  {searchTerm && (
                    <Button 
                      variant="link" 
                      className="text-kamdhenu-primary"
                      onClick={() => setSearchTerm('')}
                    >
                      Clear search
                    </Button>
                  )}
                </div>
              )}
              
              <div className="mt-6 text-center">
                <Button className="bg-kamdhenu-primary hover:bg-kamdhenu-primary/90">
                  Start New Discussion
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="events" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event) => (
                <Card key={event.id} className="border-kamdhenu-primary/20 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-kamdhenu-primary">{event.title}</h3>
                    
                    <div className="flex items-center text-gray-700 mb-2">
                      <Calendar className="mr-2 text-kamdhenu-accent" size={16} />
                      <span>{event.date}</span>
                    </div>
                    
                    <div className="flex items-start text-gray-700 mb-3">
                      <MapPin className="mr-2 text-kamdhenu-accent mt-1" size={16} />
                      <span>{event.location}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    
                    <Button 
                      className="w-full bg-kamdhenu-primary hover:bg-kamdhenu-primary/90 text-white"
                    >
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="bg-kamdhenu-light rounded-lg p-8 max-w-4xl mx-auto border border-kamdhenu-primary/20">
        <h2 className="text-2xl font-bold mb-4 text-center text-kamdhenu-primary">
          Want to contribute to our knowledge base?
        </h2>
        <p className="text-center mb-6 text-gray-700">
          Share your experience and knowledge with fellow farmers. Submit your articles, videos, or start a discussion.
        </p>
        <div className="flex justify-center">
          <Button className="bg-kamdhenu-primary hover:bg-kamdhenu-primary/90 text-white">
            Become a Contributor
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FarmerEducation;
