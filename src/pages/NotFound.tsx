import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <SEO title="Page Not Found" />
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="font-heading text-6xl md:text-8xl font-bold text-accent mb-4">
            404
          </h1>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild size="lg">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
