export const TechIcon = ({ component: Component }) => {
  return (
    <div className="size-8 ">
       <Component fill="url(#tech-icon)" />
      <svg width="0" height="0">
        <linearGradient id="tech-icon">
          <stop offset="0%" stopColor="rgb(110 231 183)" />
          <stop offset="100%" stopColor="rgb(56 189 248)" />
        </linearGradient>
      </svg>
    </div>
  );
};
