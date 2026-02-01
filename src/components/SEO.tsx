import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO = ({
  title = "Ziad Naboulsi — Videographer & Editor",
  description = "Cinematic visual storytelling. Videographer and editor based in Lebanon, specializing in commercials, social content, broadcast, and film.",
  image = "/og-image.jpg",
  url = "https://ziadnaboulsi.com",
}: SEOProps) => {
  const fullTitle = title.includes("Ziad Naboulsi") ? title : `${title} | Ziad Naboulsi`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
