interface menuDataType {
  name: string;
  link: string;
}
interface servicesDataType {
  iconSrc: string;
  title: string;
}

export const menuData: menuDataType[] = [
  {
    name: "پزشکان",
    link: "doctors",
  },
  {
    name: "محصولات",
    link: "products",
  },
  {
    name: "عطاری",
    link: "attari",
  },
  {
    name: "هوش مصنوعی",
    link: "ai",
  },
  {
    name: "تست سلامت",
    link: "healthtest",
  },
  {
    name: "بلاگ",
    link: "blog",
  },
];
export const servicesData: servicesDataType[] = [
  {
    iconSrc: "/svgs/Doctor.svg",
    title: "پزشکان",  
  },
  {
    iconSrc: "/svgs/Store.svg",
    title: "فروشگاه",
  },
  {
    iconSrc: "/svgs/Attari.svg",
    title: "عطاری",
  },
  {
    iconSrc: "/svgs/BotEments.svg",
    title: "هوش مصنوعی",
  },
  {
    iconSrc: "/svgs/HearthElement.svg",
    title: "تست سلامت",
  },
];
