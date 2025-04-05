
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const LoginPage: React.FC = () => {
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  // Get the path the user was trying to access
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (login(password)) {
      // Successful login
      toast({
        title: "Success",
        description: "You've successfully logged in as admin.",
      });
      navigate(from, { replace: true });
    } else {
      // Failed login
      toast({
        title: "Access Denied",
        description: "The password you entered is incorrect.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Admin Access</h1>
          <p className="mt-2 text-gray-600">
            Please enter the admin password to continue
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <Input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-cricket-primary focus:border-cricket-primary"
            />
          </div>
          
          <div>
            <Button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cricket-primary hover:bg-cricket-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cricket-primary"
            >
              Sign in
            </Button>
          </div>
        </form>
        
        <div className="text-center mt-4">
          <Button 
            variant="link" 
            onClick={() => navigate("/")}
            className="text-cricket-primary hover:text-cricket-secondary"
          >
            Return to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
