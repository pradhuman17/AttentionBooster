import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import CaseStudiesDetail from "@/pages/CaseStudiesDetail";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { CaseStudyButton } from "@/components/ui/case-study-button";
import { ProgressTracker } from "@/components/ui/progress-tracker";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/case-studies" component={CaseStudiesDetail} />
      <Route component={NotFound} />
    </Switch>
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
    </QueryClientProvider>
  );
}

export default App;
