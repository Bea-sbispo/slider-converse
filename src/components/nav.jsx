import logotipo from '../assets/img/logotipo.png';
export function NavMenu() {
  const menuItems = [
    {
      name: 'Home',
      link: '#',
    },
    {
      name: 'Shop',
      link: '#',
    },
    {
      name: 'About us',
      link: '#',
    },
    {
      name: 'Contact',
      link: '#',
    },
  ];
  return (
    <div className="absolute flex h-[10%] w-full justify-around bg-transparent px-5">
      <div className="flex w-fit items-center">
        <img src={logotipo} alt="Converse Logo" className="h-[30px] invert" />
      </div>
      <div className="flex w-full items-center justify-around">
        {menuItems.map(item => (
          <a
            key={item.name}
            href={'#' + item.link}
            className="text-foreground font-medium uppercase"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
