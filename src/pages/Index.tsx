import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CampusInfoCard } from "@/components/CampusInfoCard";
import { ChatInterface } from "@/components/ChatInterface";
import { 
  Calendar, 
  MapPin, 
  Utensils, 
  BookOpen, 
  FileText, 
  MessageCircle,
  GraduationCap 
} from "lucide-react";
import campusHero from "@/assets/campus-hero.jpg";

const campusInfo = [
  {
    title: "Academic Schedules",
    description: "Class schedules, exams, and academic calendar",
    icon: Calendar,
    items: [
      "Current semester schedule",
      "Final exam timetable",
      "Registration deadlines",
      "Academic calendar events"
    ]
  },
  {
    title: "Campus Facilities",
    description: "Buildings, services, and accessibility info",
    icon: MapPin,
    items: [
      "Building locations and hours",
      "Study spaces and labs",
      "Accessibility services",
      "Campus map and directions"
    ]
  },
  {
    title: "Dining Services",
    description: "Meal plans, menus, and dining locations",
    icon: Utensils,
    items: [
      "Daily menu and specials",
      "Dining hall hours",
      "Meal plan information",
      "Food allergy accommodations"
    ]
  },
  {
    title: "Library Services",
    description: "Resources, hours, and study spaces",
    icon: BookOpen,
    items: [
      "Library hours and locations",
      "Book and resource search",
      "Study room reservations",
      "Research assistance"
    ]
  },
  {
    title: "Administrative",
    description: "Procedures, forms, and student services",
    icon: FileText,
    items: [
      "Registration procedures",
      "Financial aid information",
      "Student services",
      "Forms and documentation"
    ]
  }
];

const Index = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${campusHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="mb-6">
            <GraduationCap className="h-16 w-16 mx-auto mb-4 text-white drop-shadow-lg" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Smart Campus
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text">
              Assistant
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow">
            Your AI-powered guide to campus life. Get instant answers about schedules, 
            facilities, dining, library services, and administrative procedures.
          </p>
          <Button
            onClick={() => setShowChat(true)}
            size="lg"
            className="bg-white text-campus-primary hover:bg-white/90 text-lg px-8 py-6 shadow-large transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Chatting
          </Button>
        </div>
      </section>

      {/* Chat Interface Modal */}
      {showChat && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white">Campus Assistant</h2>
              <Button
                onClick={() => setShowChat(false)}
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Close
              </Button>
            </div>
            <ChatInterface />
          </div>
        </div>
      )}

      {/* Campus Information Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Campus Information at Your Fingertips
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore different areas of campus life and get instant, accurate information 
              from our AI assistant trained on the latest campus data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campusInfo.map((info, index) => (
              <CampusInfoCard
                key={index}
                title={info.title}
                description={info.description}
                icon={info.icon}
                items={info.items}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-foreground mb-8">
            Why Choose Smart Campus Assistant?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-campus-surface border-0 shadow-soft">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">24/7 Availability</h3>
                <p className="text-muted-foreground">
                  Get instant answers to your campus questions anytime, anywhere. 
                  No waiting for office hours or busy phone lines.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-campus-surface border-0 shadow-soft">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Personalized Help</h3>
                <p className="text-muted-foreground">
                  Receive tailored information based on your specific needs and 
                  current academic status for the most relevant assistance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of students who rely on Smart Campus Assistant for their daily campus needs.
          </p>
          <Button
            onClick={() => setShowChat(true)}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6 shadow-medium transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Try It Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;