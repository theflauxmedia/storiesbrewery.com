interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
}

const ResponsiveImage = ({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  loading = "lazy",
  priority = false
}: ResponsiveImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      sizes={sizes}
      loading={priority ? "eager" : loading}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
    />
  );
};

export default ResponsiveImage;