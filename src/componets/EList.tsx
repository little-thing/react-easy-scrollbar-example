import { useEasyScrollbar } from 'react-easy-scrollbar';
import { useRef } from 'react';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}


const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}


const EList: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEasyScrollbar(ref)

  return <div style={{ width: 300, height: 500 , overflow: 'auto', position: 'relative' }} ref={ref}>
    {
      data.map(item => {
        return <div style={{ display: 'flex', justifyItems: 'start', alignItems: 'center' }} key={item.key}>
          <div>{item.name}</div>
          <div>{item.age}</div>
          <div>{item.address}</div>
        </div>
      })
    }
  </div>
};

export default EList;
