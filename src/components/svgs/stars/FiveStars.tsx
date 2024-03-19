import { FC } from "react"
import { FaStar } from "react-icons/fa"

interface StarsProps {
  size?: string
}

const FiveStars: FC<StarsProps> = ({ size }) => {
  return (
    <div className="py-2 flex items-center">
      <FaStar fill="#ffc107" size={size === "sm" ? 16 : 20} />
      <FaStar fill="#ffc107" size={size === "sm" ? 16 : 20} />
      <FaStar fill="#ffc107" size={size === "sm" ? 16 : 20} />
      <FaStar fill="#ffc107" size={size === "sm" ? 16 : 20} />
      <FaStar fill="#ffc107" size={size === "sm" ? 16 : 20} />
    </div>
  )
}

export default FiveStars
