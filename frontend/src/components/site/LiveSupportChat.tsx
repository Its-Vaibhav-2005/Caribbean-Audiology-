import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { MessageCircle, X, Calendar, Phone, Mail, Bot, Send } from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  actions?: {
    type: "appointment" | "contacts" | "email";
    label: string;
  }[];
}

export function LiveSupportChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const initialMessage: Message = {
    id: "initial",
    sender: "bot",
    text: "At the time we have AI assistance, for further details:",
    actions: [
      { type: "appointment", label: "Book Appointment" },
      { type: "contacts", label: "Contacts" },
      { type: "email", label: "Email" },
    ],
  };

  // Initialize and trigger auto-open or notification dot after a delay
  useEffect(() => {
    setMessages([initialMessage]);
    
    // Add a slight delay before indicating a notification
    const timer = setTimeout(() => {
      if (!isOpen) {
        setHasNewMessage(true);
      }
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Scroll to bottom when messages change or typing state changes
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isTyping]);

  const handleAction = (type: "appointment" | "contacts" | "email", label: string) => {
    // Add user response message
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: label,
    };

    setMessages((prev) => [...prev, userMsg]);

    // Handle bot response based on choice
    setTimeout(() => {
      if (type === "appointment") {
        const botMsg: Message = {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: "I'm redirecting you to our appointment page where you can schedule your appointment. Feel free to ask if you need anything else!",
        };
        setMessages((prev) => [...prev, botMsg]);
        // Navigate
        navigate({ to: "/appointments", hash: "appointment-form" });
      } else if (type === "contacts") {
        const botMsg: Message = {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: "You can reach our team via Call or WhatsApp at:\n\n📞 +1-868-735-6666\n\nAlternatively, you can visit our contact page below.",
          actions: [
            { type: "appointment", label: "Book Appointment" },
            { type: "email", label: "Email Support" },
          ],
        };
        setMessages((prev) => [...prev, botMsg]);
      } else if (type === "email") {
        const botMsg: Message = {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: "Opening your mail client to send an email to caribbeanaudiologytt@gmail.com...",
        };
        setMessages((prev) => [...prev, botMsg]);
        window.location.href = "mailto:caribbeanaudiologytt@gmail.com";
      }
    }, 600);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: `user-msg-${Date.now()}`,
      sender: "user",
      text: inputValue.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botMsg: Message = {
        id: `bot-msg-${Date.now()}`,
        sender: "bot",
        text: "Service will start soon",
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 850);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasNewMessage(false);
    }
  };

  return (
    <div className="font-sans">
      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 left-4 right-4 sm:right-auto sm:left-8 w-auto sm:w-96 max-h-[calc(100vh-120px)] sm:max-h-[520px] flex flex-col rounded-2xl bg-card border border-border shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300 z-50">
          {/* Header */}
          <div className="bg-teal p-4 text-cream flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream">
                <Bot className="h-5 w-5" />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-teal" />
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold leading-tight text-cream">Caribbean Audiology</h4>
                <p className="text-[10px] text-cream/70 font-semibold tracking-wider uppercase">AI Assistant</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="h-8 w-8 rounded-full flex items-center justify-center text-cream/80 hover:text-cream hover:bg-cream/10 transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[320px] min-h-[250px] bg-sand/10">
            {messages.map((msg) => (
              <div key={msg.id} className="space-y-3">
                <div className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.sender === "bot" && (
                    <div className="flex h-7 w-7 shrink-0 select-none items-center justify-center rounded-full bg-teal/10 text-teal">
                      <Bot className="h-4 w-4" />
                    </div>
                  )}
                  <div
                    className={`rounded-2xl px-4 py-2.5 text-sm max-w-[85%] whitespace-pre-line leading-relaxed shadow-sm ${
                      msg.sender === "user"
                        ? "bg-teal text-cream rounded-tr-none"
                        : "bg-card text-foreground border border-border/60 rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>

                {/* Show Actions / Buttons */}
                {msg.sender === "bot" && msg.actions && msg.actions.length > 0 && (
                  <div className="flex flex-col gap-2 pl-9 pr-4 mt-2">
                    {msg.actions.map((act) => (
                      <button
                        key={act.type}
                        onClick={() => handleAction(act.type, act.label)}
                        className="flex items-center justify-between w-full px-4 py-2.5 text-xs font-semibold text-teal bg-card border border-teal/20 hover:border-teal hover:bg-teal/5 rounded-xl transition-all duration-300 text-left hover:translate-x-1 cursor-pointer group shadow-sm"
                      >
                        <span className="flex items-center gap-2">
                          {act.type === "appointment" && <Calendar className="h-3.5 w-3.5" />}
                          {act.type === "contacts" && <Phone className="h-3.5 w-3.5" />}
                          {act.type === "email" && <Mail className="h-3.5 w-3.5" />}
                          {act.label}
                        </span>
                        <Send className="h-3 w-3 text-teal/40 group-hover:text-teal transition-colors" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2.5 items-center">
                <div className="flex h-7 w-7 shrink-0 select-none items-center justify-center rounded-full bg-teal/10 text-teal">
                  <Bot className="h-4 w-4 animate-bounce" />
                </div>
                <div className="bg-card text-muted-foreground border border-border/60 rounded-2xl rounded-tl-none px-4 py-2.5 text-sm shadow-sm">
                  <span className="flex items-center gap-1 font-semibold text-xs tracking-wide">
                    AI typing
                    <span className="inline-flex gap-0.5">
                      <span className="animate-pulse">.</span>
                      <span className="animate-pulse delay-100">.</span>
                      <span className="animate-pulse delay-200">.</span>
                    </span>
                  </span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Form message input */}
          <form onSubmit={handleSendMessage} className="border-t border-border p-3 bg-card flex gap-2 items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask AI Assistant..."
              className="flex-1 bg-muted px-4 py-2.5 rounded-full text-sm border-0 focus:ring-1 focus:ring-teal outline-none text-foreground placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="h-9.5 w-9.5 flex items-center justify-center rounded-full bg-teal text-cream hover:bg-teal-mid transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shrink-0"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 flex h-14 w-14 items-center justify-center rounded-full bg-teal text-cream shadow-lg shadow-teal/20 hover:shadow-xl hover:shadow-teal/30 transition-all duration-300 hover:bg-teal-mid hover:scale-110 active:scale-95 cursor-pointer z-50"
        aria-label="Toggle Live Support Chat"
      >
        <span className="absolute inset-0 rounded-full bg-teal animate-ping opacity-20 -z-10" />
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {hasNewMessage && !isOpen && (
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aqua opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-aqua"></span>
          </span>
        )}
      </button>
    </div>
  );
}
