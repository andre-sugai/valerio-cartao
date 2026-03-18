import { Star } from 'lucide-react';

interface StarRatingProps {
  rating?: number;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export const StarRating = ({
  rating = 5,
  size = 'md',
  animated = false,
}: StarRatingProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <div
      className="flex items-center"
      style={{
        gap: '0.25rem',
        width: '180px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`${sizeClasses[size]} text-star-gold fill-star-gold ${
            animated ? 'animate-star-glow' : ''
          } ${animated ? `animation-delay-${i * 100}` : ''}`}
          style={animated ? { animationDelay: `${i * 0.1}s` } : {}}
        />
      ))}
    </div>
  );
};
