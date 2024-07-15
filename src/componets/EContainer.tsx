import { useEasyScrollbar } from 'react-easy-scrollbar';
import { useRef } from 'react';
import EasyScrollbar from '../../../src/components/EasyScrollbar.tsx';

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

type Props = {
  addRef: boolean
}

const EContainer: React.FC = ({addRef}:Props) => {
  const ref = useRef<HTMLDivElement>(null);

  // ... You can use ref to complete your own logic, including event handling for scrollbars


  return <EasyScrollbar style={{ width: '100%', height: 500, overflow: 'auto', position: 'relative' }} ref={addRef?ref:undefined}>
    {
      data.map(item => {
        return <div style={{ display: 'flex', justifyItems: 'start', alignItems: 'center' }} key={item.key}>
          <div>{item.name}</div>
          <div>{item.age}</div>
          <div>{item.address}</div>
        </div>
      })
    }
  </EasyScrollbar>
};

export default EContainer;
