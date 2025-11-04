import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

type Sport = 'all' | 'boxing' | 'mma' | 'karate' | 'judo';

interface Product {
  id: number;
  name: string;
  price: number;
  sport: Sport;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Боксёрские перчатки Pro',
    price: 4990,
    sport: 'boxing',
    image: 'https://cdn.poehali.dev/projects/872ffaeb-26b5-4f3e-9205-bc9e50c3ee82/files/93bc9955-2a27-48db-ab41-b8c00a58afaa.jpg',
    category: 'Перчатки'
  },
  {
    id: 2,
    name: 'Набор для MMA',
    price: 8990,
    sport: 'mma',
    image: 'https://cdn.poehali.dev/projects/872ffaeb-26b5-4f3e-9205-bc9e50c3ee82/files/777dab98-478f-4e63-99cb-2d5e17aa67b2.jpg',
    category: 'Экипировка'
  },
  {
    id: 3,
    name: 'Кимоно для каратэ',
    price: 5490,
    sport: 'karate',
    image: 'https://cdn.poehali.dev/projects/872ffaeb-26b5-4f3e-9205-bc9e50c3ee82/files/483fe061-456c-4c0f-9bf7-6176faebe45d.jpg',
    category: 'Одежда'
  },
  {
    id: 4,
    name: 'Боксёрские бинты',
    price: 890,
    sport: 'boxing',
    image: 'https://cdn.poehali.dev/projects/872ffaeb-26b5-4f3e-9205-bc9e50c3ee82/files/93bc9955-2a27-48db-ab41-b8c00a58afaa.jpg',
    category: 'Аксессуары'
  },
  {
    id: 5,
    name: 'Защита для MMA',
    price: 3490,
    sport: 'mma',
    image: 'https://cdn.poehali.dev/projects/872ffaeb-26b5-4f3e-9205-bc9e50c3ee82/files/777dab98-478f-4e63-99cb-2d5e17aa67b2.jpg',
    category: 'Защита'
  },
  {
    id: 6,
    name: 'Пояс для дзюдо',
    price: 1290,
    sport: 'judo',
    image: 'https://cdn.poehali.dev/projects/872ffaeb-26b5-4f3e-9205-bc9e50c3ee82/files/483fe061-456c-4c0f-9bf7-6176faebe45d.jpg',
    category: 'Аксессуары'
  }
];

const Index = () => {
  const [selectedSport, setSelectedSport] = useState<Sport>('all');
  const [activeSection, setActiveSection] = useState<'home' | 'catalog' | 'delivery' | 'contacts'>('home');

  const filteredProducts = selectedSport === 'all' 
    ? products 
    : products.filter(p => p.sport === selectedSport);

  const sportFilters = [
    { id: 'all' as Sport, label: 'Все', icon: 'Zap' },
    { id: 'boxing' as Sport, label: 'Бокс', icon: 'Award' },
    { id: 'mma' as Sport, label: 'MMA', icon: 'Flame' },
    { id: 'karate' as Sport, label: 'Каратэ', icon: 'Target' },
    { id: 'judo' as Sport, label: 'Дзюдо', icon: 'Circle' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Icon name="Flame" className="text-primary" size={32} />
            <h1 className="text-2xl font-bold">Fight Store</h1>
          </div>
          
          <nav className="hidden md:flex gap-6">
            <button 
              onClick={() => setActiveSection('home')}
              className={`font-medium transition-colors hover:text-primary ${activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Главная
            </button>
            <button 
              onClick={() => setActiveSection('catalog')}
              className={`font-medium transition-colors hover:text-primary ${activeSection === 'catalog' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Каталог
            </button>
            <button 
              onClick={() => setActiveSection('delivery')}
              className={`font-medium transition-colors hover:text-primary ${activeSection === 'delivery' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Доставка
            </button>
            <button 
              onClick={() => setActiveSection('contacts')}
              className={`font-medium transition-colors hover:text-primary ${activeSection === 'contacts' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Контакты
            </button>
          </nav>

          <Button size="sm" className="gap-2">
            <Icon name="ShoppingCart" size={18} />
            Корзина
          </Button>
        </div>
      </header>

      {activeSection === 'home' && (
        <>
          <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary/90 to-primary/20 text-white">
            <div className="container px-4 py-24 md:py-32">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="animate-fade-in">
                  <Badge className="mb-4 bg-accent hover:bg-accent/90">Новая коллекция 2024</Badge>
                  <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
                    Экипировка для чемпионов
                  </h2>
                  <p className="text-lg text-white/90 mb-8 max-w-xl">
                    Профессиональная экипировка и одежда для всех видов единоборств. 
                    Качество, проверенное временем и спортсменами.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg" onClick={() => setActiveSection('catalog')}>
                      Перейти в каталог
                      <Icon name="ArrowRight" className="ml-2" size={20} />
                    </Button>
                    <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                      О нас
                    </Button>
                  </div>
                </div>
                
                <div className="relative h-[400px] lg:h-[500px] animate-scale-in">
                  <img 
                    src="https://cdn.poehali.dev/projects/872ffaeb-26b5-4f3e-9205-bc9e50c3ee82/files/93bc9955-2a27-48db-ab41-b8c00a58afaa.jpg"
                    alt="Боксёрские перчатки"
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="container px-4 py-16">
            <div className="text-center mb-12 animate-fade-in">
              <h3 className="text-3xl font-bold mb-4">Популярные категории</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Выберите экипировку для вашего вида спорта
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { sport: 'boxing', name: 'Бокс', icon: 'Award', color: 'bg-red-500' },
                { sport: 'mma', name: 'MMA', icon: 'Flame', color: 'bg-orange-500' },
                { sport: 'karate', name: 'Каратэ', icon: 'Target', color: 'bg-blue-500' },
                { sport: 'judo', name: 'Дзюдо', icon: 'Circle', color: 'bg-green-500' }
              ].map((item, index) => (
                <Card 
                  key={item.sport} 
                  className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => {
                    setSelectedSport(item.sport as Sport);
                    setActiveSection('catalog');
                  }}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon name={item.icon as any} className="text-white" size={32} />
                    </div>
                    <h4 className="font-semibold text-lg">{item.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </>
      )}

      {activeSection === 'catalog' && (
        <section className="container px-4 py-16">
          <div className="mb-8 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Каталог товаров</h2>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {sportFilters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={selectedSport === filter.id ? 'default' : 'outline'}
                  onClick={() => setSelectedSport(filter.id)}
                  className="gap-2"
                >
                  <Icon name={filter.icon as any} size={18} />
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="overflow-hidden group cursor-pointer transition-all hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 right-4 bg-accent">
                    {product.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price.toLocaleString()} ₽</span>
                    <Button size="sm" className="gap-2">
                      <Icon name="ShoppingCart" size={16} />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {activeSection === 'delivery' && (
        <section className="container px-4 py-16">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">Доставка и оплата</h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name="Truck" className="text-primary" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Доставка по России</h3>
                      <p className="text-muted-foreground">
                        Доставка транспортными компаниями СДЭК, Boxberry по всей России. 
                        Срок доставки от 2 до 7 дней в зависимости от региона.
                      </p>
                      <p className="mt-2 font-medium">Бесплатная доставка при заказе от 5000 ₽</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <Icon name="CreditCard" className="text-accent" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Способы оплаты</h3>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Банковские карты (Visa, MasterCard, МИР)</li>
                        <li>• Электронные кошельки</li>
                        <li>• Наложенный платёж</li>
                        <li>• Оплата при получении</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                        <Icon name="Shield" className="text-green-500" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Гарантия качества</h3>
                      <p className="text-muted-foreground">
                        Возврат товара в течение 14 дней. Гарантия на всю продукцию от производителя.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'contacts' && (
        <section className="container px-4 py-16">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">Контакты</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4 mb-4">
                    <Icon name="MapPin" className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Спортивная, д. 10</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4 mb-4">
                    <Icon name="Phone" className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4 mb-4">
                    <Icon name="Mail" className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@fightstore.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4 mb-4">
                    <Icon name="Clock" className="text-primary flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Время работы</h3>
                      <p className="text-muted-foreground">Пн-Пт: 10:00 - 20:00</p>
                      <p className="text-muted-foreground">Сб-Вс: 11:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Напишите нам</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Ваше сообщение" 
                      rows={4}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <footer className="border-t bg-secondary text-white mt-16">
        <div className="container px-4 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Flame" className="text-primary" size={28} />
                <h3 className="font-bold text-xl">Fight Store</h3>
              </div>
              <p className="text-white/80">
                Лучшая экипировка для единоборств с доставкой по всей России
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Бокс</a></li>
                <li><a href="#" className="hover:text-white transition-colors">MMA</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Каратэ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Дзюдо</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гарантия</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@fightstore.ru</li>
                <li className="flex gap-3 mt-4">
                  <Icon name="Instagram" className="cursor-pointer hover:text-primary transition-colors" size={20} />
                  <Icon name="Facebook" className="cursor-pointer hover:text-primary transition-colors" size={20} />
                  <Icon name="Youtube" className="cursor-pointer hover:text-primary transition-colors" size={20} />
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 Fight Store. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;