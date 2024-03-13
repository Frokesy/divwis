import { FaStar } from "react-icons/fa"

const TwoStars = () => {
  return (
    <div className="py-2 flex items-center space-x-2">
      <FaStar fill="#ffc107" size={20} />
      <FaStar fill="#ffc107" size={20} />
      <FaStar fill="#ffffff" stroke="#ffc107" strokeWidth={50} size={20} />
      <FaStar fill="#ffffff" stroke="#ffc107" strokeWidth={50} size={20} />
      <FaStar fill="#ffffff" stroke="#ffc107" strokeWidth={50} size={20} />
    </div>
  )
}

export default TwoStars
