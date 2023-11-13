import { Subscription } from "../../../subscription/Subscription";
import styles from "./ModalEventsCost.module.scss"

const ModalEventsCost = () => {

  const subscriptions = [
    {
      label: "Добавьте свое событие в",
      topic: "ТОП-10",
      amount: "5000",
      title: "ТОП-событий",
      price: "99",
    },
    {
      label: "Добавьте свое событие в",
      topic: "Статьи",
      amount: "2000",
      title: "Размещение в статьях",
      price: "199",
    },
    {
      label: "Выведите свое событие на",
      topic: "1 место",
      amount: "10000",
      title: "1 место в списке по категориям",
      price: "299",
    },
    {
      label: "Добавьте свое событие в",
      topic: "Подборку",
      amount: "4000",
      title: "Подборка событий по тематике",
      price: "249",
    },
  ]

  return (
    <div className={styles.wrapper}>
      {subscriptions.map(item => 
      <Subscription
      key={item.topic}
        label={item.label}
        topic={item.topic}
        amount={item.amount}
        title={item.title}
        price={item.price}
      />)}
    </div>
  );
};

export  {ModalEventsCost};