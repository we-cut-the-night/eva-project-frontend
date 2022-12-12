import { SPOT_COLORS } from '../../utils/employees';
import './EmplSpot.css';

function EmplSpot({ spot, size }) {
  const calcClassName = (spot, size) => {
    const name = 'empl-spot__indicator'
                 + (spot ? ' empl-spot__indicator_theme_' + SPOT_COLORS[spot] : '')
                 + (size ? ' empl-spot__indicator_size_' + size : '');
    return name;
  };

  return (
    <div className={calcClassName(spot, size)}></div>
  )
};

export default EmplSpot;
