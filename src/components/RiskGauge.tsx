import { useEffect, useState } from "react";

interface RiskGaugeProps {
  percentage: number;
}

const RiskGauge = ({ percentage }: RiskGaugeProps) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 200);
    return () => clearTimeout(timer);
  }, [percentage]);

  const angle = (animatedPercentage / 100) * 180;
  const riskColor = percentage > 60 ? "#FF6B6B" : percentage > 30 ? "#FFB800" : "#3B6FB3";

  return (
    <div className="relative w-full max-w-md mx-auto animate-scale-in">
      <svg viewBox="0 0 200 120" className="w-full">
        {/* Background arc */}
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="#E8F0FF"
          strokeWidth="20"
          strokeLinecap="round"
        />
        
        {/* Animated risk arc */}
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke={riskColor}
          strokeWidth="20"
          strokeLinecap="round"
          strokeDasharray={`${(angle / 180) * 251.2} 251.2`}
          className="transition-all duration-1000 ease-out"
        />
        
        {/* Center text */}
        <text
          x="100"
          y="75"
          textAnchor="middle"
          className="text-3xl font-bold"
          fill={riskColor}
        >
          {animatedPercentage}%
        </text>
        <text
          x="100"
          y="95"
          textAnchor="middle"
          className="text-sm"
          fill="#1E1E1E"
        >
          em risco de evasão
        </text>
      </svg>
    </div>
  );
};

export default RiskGauge;
