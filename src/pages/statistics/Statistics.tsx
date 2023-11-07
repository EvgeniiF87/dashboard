import { DiagramCircle } from "../../widgets";

const list = [
  { name: 'Выставки', color: '#D9E1FF', count: 1546 },
  { name: 'Фестивали', color: '#c1abff', count: 470 },
  { name: 'Активный отдых', color: '#FFD9D9', count: 840 },
  { name: 'Для детей', color: '#DDFFF3', count: 1200 },
  { name: 'Test', color: '#ff000051', count: 1200 },
];

const Statistics = () => {

  return (
    <>
      <DiagramCircle 
      title={'Проведенные события'} 
      list={list} 
      />
    </>
  );
}

export default Statistics;
