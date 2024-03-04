import { useEffect } from 'react';
import { useState } from 'react';

export const useOrders = () => {
  const [order, setOrder] = useState([]);
  console.log(order);
  useEffect(() => {
    fetch(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQGlRU2HkaFx49YfVZesQ8j_oV-Q4rqhzXUnSgLgn499jmLWIcaNbOxZf2zrMQXvVaqlKE2Se38RM_q/pub?output=tsv'
    )
      .then((res) => res.text())
      .then((data) => {
        console.log(data.split(''));
      });
  }, []);

  return order;
};
