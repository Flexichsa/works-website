import { FLOORS } from '../../utils/constants';
import { Floor } from './Floor';

export function Building() {
  return (
    <group>
      {FLOORS.map((floor) => (
        <Floor
          key={floor.id}
          level={floor.level}
        />
      ))}
    </group>
  );
}
