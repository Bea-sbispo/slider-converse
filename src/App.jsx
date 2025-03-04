// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import BlackShoes from './assets/img/black.png';
import BlueShoes from './assets/img/blue.png';
import PinkShoes from './assets/img/pink.png';
import RedShoes from './assets/img/red.png';
import WhiteShoes from './assets/img/white.png';
import WineShoes from './assets/img/wine.png';
import YellowShoes from './assets/img/yellow.png';
import loader from './assets/loader/loader.gif';
import logo from './assets/logo.svg';
import { NavMenu } from './components/nav';
import './index.css';

function App() {
  const productOptions = [
    { name: 'black', image: BlackShoes, color: '#030000' },
    { name: 'blue', image: BlueShoes, color: '#001b27' },
    { name: 'pink', image: PinkShoes, color: '#27001d' },
    { name: 'red', image: RedShoes, color: '#270000' },
    { name: 'white', image: WhiteShoes, color: '' },
    { name: 'wine', image: WineShoes, color: '#1a0000' },
    { name: 'yellow', image: YellowShoes, color: '#272400' },
  ];

  const [activeItem, setActiveItem] = useState(productOptions[0]);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = item => {
    if (activeItem.name === item.name) return;
    setIsLoading(true);
    setTimeout(() => {
      setActiveItem(item);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div
      className="slider h-dvh w-dvw transition-colors duration-500"
      style={{ backgroundColor: activeItem.color }}
    >
      <NavMenu />
      <div className="h-[80%] pt-24">
        <div className="flex h-full items-center justify-center">
          {isLoading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="loader"
            >
              <img src={loader} alt="Loading..." className="size-40 invert" />
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div key={activeItem.name} className="slide">
                <div className="converse">
                  <motion.h3
                    initial={{ y: '200%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.6, ease: [0.43, 0, 0.23, 1.3] }}
                    className="uppercase"
                  >
                    Converse
                  </motion.h3>
                  <motion.h3
                    initial={{ y: '-200%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.6, ease: [0.43, 0, 0.23, 1.3] }}
                    className="text-foreground uppercase"
                  >
                    Converse
                  </motion.h3>
                </div>
                <motion.img
                  src={activeItem.image}
                  alt={activeItem.name}
                  initial={{ x: '150%', y: '-100%', rotate: -150 }}
                  animate={{ x: 0, y: 0, rotate: 0 }}
                  transition={{ duration: 1.6, ease: [0.43, 0, 0.23, 1.3] }}
                  className="shoe w-1/2 opacity-100"
                />
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
      <div className="absolute flex h-[20%] w-full flex-wrap items-center justify-start bg-transparent px-5 pb-5 lg:flex-nowrap lg:justify-around">
        <div className="flex flex-wrap items-center gap-3 lg:flex-col lg:flex-nowrap lg:gap-0">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 1.6, ease: [0.43, 0, 0.23, 1.5] }}
          >
            <h1 className="text-foreground text-6xl font-bold lg:text-9xl">
              CLASSIC
            </h1>
          </motion.div>
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 2, ease: [0.43, 0, 0.23, 1.5] }}
          >
            <img src={logo} alt="Converse Logo" className="h-8 invert" />
          </motion.div>
        </div>
        <div className="flex w-full justify-start gap-8 lg:justify-end">
          {productOptions.map(item => (
            <button
              key={item.name}
              className={`option-button flex size-[65px] min-w-[65px] items-center justify-center rounded-full bg-gray-300/20 transition-all duration-300 ${
                activeItem.name === item.name ? 'active' : ''
              }`}
              onClick={() => handleClick(item)}
            >
              <img src={item.image} alt={item.name} className="w-full" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
