import { FaStar } from "react-icons/fa"

const TwoStars = () => {
  return (
    <div className="py-2 flex items-center">
      <FaStar fill="#ffc107" size={20} />
      <FaStar fill="#ffc107" size={20} />
      <FaStar fill="#ffffff" stroke="#ffc107" strokeWidth={40} size={20} />
      <FaStar fill="#ffffff" stroke="#ffc107" strokeWidth={40} size={20} />
      <FaStar fill="#ffffff" stroke="#ffc107" strokeWidth={40} size={20} />
    </div>
  )
}

export default TwoStars
