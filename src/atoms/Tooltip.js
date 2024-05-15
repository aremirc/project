import '../estilos/Tooltip.css';
import { useState } from "react";

function Tooltip({ children, content }) {
  const [isHovered, setIsHovered] = useState(false)

  const toggleHover = () => setIsHovered(isHovered => !isHovered)

  return (
    <div className="tooltip" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {children(isHovered, toggleHover, 'tooltip__children', 'tooltip__pin')}

      {isHovered && (
        <div className="tooltip__contentBox">
          {content('tooltip__content')}
        </div>
      )}

    </div>
  )
}

export default Tooltip;