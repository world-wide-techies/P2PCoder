import { createContext, useContext, useEffect, useState } from 'react';

export const TabContext = createContext();

export const TabProvider = ({ children }) => {
  const barItems = [{ id: 1, title: 'Welcome', active: true }];
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (items.length == 0) {
      setItems(barItems);
    } else {
      window.localStorage.setItem('barItems', JSON.stringify(items));
    }
  }, [items]);
  useEffect(() => {
    const storedItems = window.localStorage.getItem('barItems');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    } else {
      setItems(barItems);
    }
  }, []);

  const handleLanguage = (lang) => {
    if (lang && items.length < 5) {
      console.log(lang);
      const oldItems = items.map((item) => ({
        ...item,
        active: false,
      }));
      const newItems = [
        ...oldItems,
        {
          id: items.length + 1,
          title:
            lang === 'js'
              ? 'scripts'
              : lang === 'css'
              ? 'styles'
              : lang === 'html'
              ? 'index'
              : 'untitled',
          ext:
            lang === 'js'
              ? '.js'
              : lang === 'css'
              ? '.css'
              : lang === 'html'
              ? '.html'
              : '',
          active: true,
        },
      ];
      setItems(newItems);
    }
  };

  return (
    <TabContext.Provider value={{ barItems, items, setItems, handleLanguage }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabContext = () => {
  return useContext(TabContext);
};
