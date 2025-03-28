
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { User, Settings, History, Bell, ChevronRight, Edit2 } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  // Mock user data
  const userData = {
    name: 'Rajesh Kumar',
    location: 'Mehsana, Gujarat',
    phone: '+91 98765 43210',
    email: 'rajesh.kumar@example.com',
    farmSize: '5 acres',
    experience: '15+ years',
    preferredLanguage: 'Gujarati',
  };
  
  // Mock breeding history
  const breedingHistory = [
    {
      id: 1,
      cowId: 'C001',
      cowBreed: 'Gir',
      bullId: 'B234',
      bullBreed: 'Gir',
      date: '2023-04-12',
      status: 'Successful',
      offspring: 1,
    },
    {
      id: 2,
      cowId: 'C003',
      cowBreed: 'Sahiwal',
      bullId: 'B145',
      bullBreed: 'Sahiwal',
      date: '2023-02-18',
      status: 'Successful',
      offspring: 1,
    },
    {
      id: 3,
      cowId: 'C007',
      cowBreed: 'Tharparkar',
      bullId: 'B098',
      bullBreed: 'Tharparkar',
      date: '2022-11-05',
      status: 'Unsuccessful',
      offspring: 0,
    },
  ];
  
  // Mock notifications settings
  const notificationSettings = [
    {
      id: 'breeding-tips',
      title: 'Breeding Tips & Updates',
      description: 'Receive helpful tips and updates about optimal breeding practices',
      enabled: true,
    },
    {
      id: 'marketplace',
      title: 'Marketplace Activity',
      description: 'Get notified about new products, price changes, and buyer inquiries',
      enabled: true,
    },
    {
      id: 'educational',
      title: 'Educational Content',
      description: 'New articles, videos, and webinars related to cow care and farming',
      enabled: false,
    },
    {
      id: 'community',
      title: 'Community Discussions',
      description: 'Updates from forums and discussions you're participating in',
      enabled: true,
    },
  ];
  
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-kamdhenu-primary">
        Your Profile
      </h1>
      
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="personal" className="flex items-center gap-2">
              <User size={16} />
              <span>Personal Info</span>
            </TabsTrigger>
            <TabsTrigger value="breeding" className="flex items-center gap-2">
              <History size={16} />
              <span>Breeding History</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings size={16} />
              <span>Settings</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="personal" className="animate-fade-in">
            <Card className="border border-kamdhenu-primary/20">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-kamdhenu-primary">Personal Information</h2>
                  <Button 
                    variant="outline"
                    className="flex items-center gap-2 border-kamdhenu-primary text-kamdhenu-primary hover:bg-kamdhenu-primary hover:text-white"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    {isEditing ? 'Cancel' : <><Edit2 size={16} /> Edit Profile</>}
                  </Button>
                </div>
                
                {isEditing ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" defaultValue={userData.name} />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" defaultValue={userData.location} />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" defaultValue={userData.phone} />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" defaultValue={userData.email} />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="farmSize">Farm Size</Label>
                        <Input id="farmSize" defaultValue={userData.farmSize} />
                      </div>
                      <div>
                        <Label htmlFor="experience">Farming Experience</Label>
                        <Input id="experience" defaultValue={userData.experience} />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="language">Preferred Language</Label>
                      <select 
                        id="language"
                        defaultValue={userData.preferredLanguage}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kamdhenu-primary focus:border-transparent"
                      >
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Gujarati">Gujarati</option>
                        <option value="Marathi">Marathi</option>
                        <option value="Tamil">Tamil</option>
                        <option value="Telugu">Telugu</option>
                        <option value="Kannada">Kannada</option>
                        <option value="Malayalam">Malayalam</option>
                        <option value="Punjabi">Punjabi</option>
                      </select>
                    </div>
                    
                    <div className="pt-4 flex justify-end gap-3">
                      <Button 
                        variant="outline" 
                        className="border-kamdhenu-primary text-kamdhenu-primary hover:bg-kamdhenu-primary hover:text-white"
                        onClick={() => setIsEditing(false)}
                      >
                        Cancel
                      </Button>
                      <Button 
                        className="bg-kamdhenu-primary hover:bg-kamdhenu-primary/90"
                        onClick={() => setIsEditing(false)}
                      >
                        Save Changes
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
                    <div>
                      <h3 className="text-gray-500 text-sm mb-1">Full Name</h3>
                      <p className="text-kamdhenu-dark font-medium">{userData.name}</p>
                    </div>
                    <div>
                      <h3 className="text-gray-500 text-sm mb-1">Location</h3>
                      <p className="text-kamdhenu-dark font-medium">{userData.location}</p>
                    </div>
                    <div>
                      <h3 className="text-gray-500 text-sm mb-1">Phone Number</h3>
                      <p className="text-kamdhenu-dark font-medium">{userData.phone}</p>
                    </div>
                    <div>
                      <h3 className="text-gray-500 text-sm mb-1">Email</h3>
                      <p className="text-kamdhenu-dark font-medium">{userData.email}</p>
                    </div>
                    <div>
                      <h3 className="text-gray-500 text-sm mb-1">Farm Size</h3>
                      <p className="text-kamdhenu-dark font-medium">{userData.farmSize}</p>
                    </div>
                    <div>
                      <h3 className="text-gray-500 text-sm mb-1">Farming Experience</h3>
                      <p className="text-kamdhenu-dark font-medium">{userData.experience}</p>
                    </div>
                    <div>
                      <h3 className="text-gray-500 text-sm mb-1">Preferred Language</h3>
                      <p className="text-kamdhenu-dark font-medium">{userData.preferredLanguage}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="breeding" className="animate-fade-in">
            <Card className="border border-kamdhenu-primary/20">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-kamdhenu-primary">Breeding History</h2>
                  <Button 
                    className="bg-kamdhenu-primary hover:bg-kamdhenu-primary/90"
                  >
                    Add New Record
                  </Button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-kamdhenu-light/70 text-kamdhenu-primary">
                        <th className="px-4 py-3 text-left">Cow ID & Breed</th>
                        <th className="px-4 py-3 text-left">Bull ID & Breed</th>
                        <th className="px-4 py-3 text-left">Date</th>
                        <th className="px-4 py-3 text-left">Status</th>
                        <th className="px-4 py-3 text-left">Offspring</th>
                        <th className="px-4 py-3 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {breedingHistory.map((record) => (
                        <tr key={record.id} className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3">
                            <div className="font-medium">{record.cowId}</div>
                            <div className="text-sm text-gray-500">{record.cowBreed}</div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="font-medium">{record.bullId}</div>
                            <div className="text-sm text-gray-500">{record.bullBreed}</div>
                          </td>
                          <td className="px-4 py-3">{record.date}</td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              record.status === 'Successful' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {record.status}
                            </span>
                          </td>
                          <td className="px-4 py-3">{record.offspring}</td>
                          <td className="px-4 py-3">
                            <Button 
                              variant="ghost" 
                              size="sm"
                              className="text-kamdhenu-primary hover:bg-kamdhenu-light/50"
                            >
                              View Details
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {breedingHistory.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No breeding records found.</p>
                    <Button 
                      variant="link" 
                      className="text-kamdhenu-primary"
                    >
                      Add your first breeding record
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings" className="animate-fade-in">
            <Card className="border border-kamdhenu-primary/20">
              <CardContent className="p-6">
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-kamdhenu-primary mb-6">Notification Settings</h2>
                  
                  <div className="space-y-4">
                    {notificationSettings.map((setting) => (
                      <div key={setting.id} className="flex items-start p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                        <div className="mr-3 pt-0.5">
                          <div className="relative inline-block w-10 mr-2 align-middle select-none">
                            <input 
                              type="checkbox" 
                              id={setting.id} 
                              className="sr-only peer"
                              defaultChecked={setting.enabled}
                            />
                            <div className="block h-6 bg-gray-200 rounded-full w-10 peer-checked:bg-kamdhenu-primary"></div>
                            <div className="absolute w-4 h-4 bg-white rounded-full left-1 top-1 peer-checked:left-5 transition-all"></div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <label htmlFor={setting.id} className="font-medium text-kamdhenu-dark cursor-pointer">
                            {setting.title}
                          </label>
                          <p className="text-gray-500 text-sm">{setting.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-kamdhenu-primary mb-6">Language Preferences</h2>
                  
                  <div className="p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-kamdhenu-dark">App Language</h3>
                        <p className="text-gray-500 text-sm">Currently set to: {userData.preferredLanguage}</p>
                      </div>
                      <Button 
                        variant="ghost" 
                        className="text-kamdhenu-primary hover:bg-kamdhenu-light/50"
                      >
                        <ChevronRight size={18} />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold text-kamdhenu-primary mb-6">Account Settings</h2>
                  
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-between text-left font-normal border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <span>Change Password</span>
                      <ChevronRight size={18} />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-between text-left font-normal border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <span>Privacy Settings</span>
                      <ChevronRight size={18} />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-between text-left font-normal border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <span>Help & Support</span>
                      <ChevronRight size={18} />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-between text-left font-normal text-red-500 border-gray-200 hover:bg-red-50 transition-colors"
                    >
                      <span>Log Out</span>
                      <ChevronRight size={18} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
