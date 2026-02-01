interface VimeoEmbedProps {
  html: string;
  className?: string;
}

const VimeoEmbed = ({ html, className = "" }: VimeoEmbedProps) => {
  return (
    <div
      className={`w-full ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default VimeoEmbed;
