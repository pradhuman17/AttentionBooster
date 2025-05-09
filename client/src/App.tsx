import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import CaseStudiesDetail from "@/pages/CaseStudiesDetail";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { CaseStudyButton } from "@/components/ui/case-study-button";
import { ProgressTracker } from "@/components/ui/progress-tracker";
import { RewardsSystem } from "@/components/ui/rewards-system";
import { PageTransition } from "@/components/ui/page-transition";
import { useEffect } from "react";

function Router() {
  const [location] = useLocation();
  
  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <PageTransition>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/case-studies" component={CaseStudiesDetail} />
        <Route component={NotFound} />
      </Switch>
    </PageTransition>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
      <CustomCursor />
      <CaseStudyButton />
      <ProgressTracker />
      <RewardsSystem />
    </QueryClientProvider>
  );
}

export default App;
