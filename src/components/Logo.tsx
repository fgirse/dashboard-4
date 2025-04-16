const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="w-24 h-24"
      >
        <circle cx="50" cy="50" r="40" fill="#3498db" />
        <text x="50%" y="50%" textAnchor="middle" fill="#fff" fontSize="20">
          Logo
        </text>
      </svg>
    </div>
  );
}