import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Bot, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

const mockResponses = [
  "The library is open Monday-Friday 8am-10pm, weekends 10am-8pm. You can reserve study rooms online through the library portal.",
  "The dining hall serves breakfast 7-10am, lunch 11:30am-2:30pm, and dinner 5-8pm. Today's menu includes pasta bar, salad station, and grilled chicken.",
  "Registration for spring courses opens on November 15th. Priority registration begins for seniors, then juniors, sophomores, and freshmen.",
  "The fitness center is located in the Student Recreation Building and is open 6am-11pm. Your student ID grants access to all facilities.",
  "Parking permits can be purchased online through the campus portal. Daily visitor parking is available for $5 in the guest lot near the main entrance.",
  "Academic advising appointments can be scheduled through your student portal. Walk-in hours are Tuesday and Thursday 2-4pm.",
];

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your Smart Campus Assistant. I can help you with information about schedules, facilities, dining, library services, and administrative procedures. What would you like to know?",
      sender: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateTyping = () => {
    setIsTyping(true);
    setTimeout(() => {
      const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
      const newMessage: Message = {
        id: Date.now().toString(),
        content: randomResponse,
        sender: "assistant",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, newMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    simulateTyping();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className="h-[600px] flex flex-col bg-campus-surface border-0 shadow-medium">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
          >
            <div className={`p-2 rounded-full ${
              message.sender === "user" 
                ? "bg-campus-primary" 
                : "bg-gradient-primary"
            }`}>
              {message.sender === "user" ? (
                <User className="h-4 w-4 text-white" />
              ) : (
                <Bot className="h-4 w-4 text-white" />
              )}
            </div>
            <div
              className={`max-w-[80%] p-3 rounded-2xl ${
                message.sender === "user"
                  ? "bg-campus-primary text-white"
                  : "bg-campus-accent text-foreground"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
              <span className={`text-xs opacity-70 mt-1 block ${
                message.sender === "user" ? "text-white" : "text-muted-foreground"
              }`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex gap-3">
            <div className="p-2 rounded-full bg-gradient-primary">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div className="bg-campus-accent p-3 rounded-2xl">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-campus-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 bg-campus-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 bg-campus-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about campus..."
            className="flex-1 border-campus-primary/20 focus:border-campus-primary"
            disabled={isTyping}
          />
          <Button
            onClick={handleSendMessage}
            disabled={isTyping || !inputValue.trim()}
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};