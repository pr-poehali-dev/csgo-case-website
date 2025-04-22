
import { CaseCard } from "@/components/CaseCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const BestCasesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Самые выгодные кейсы CS:GO</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы проанализировали все доступные кейсы и выбрали самые выгодные варианты, 
            основываясь на соотношении стоимости и потенциальной прибыли.
          </p>
        </div>

        <Tabs defaultValue="profit" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="profit">По прибыли</TabsTrigger>
            <TabsTrigger value="chance">По шансам</TabsTrigger>
            <TabsTrigger value="price">По цене</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profit" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CaseCard
                name="Кейс «Сны и кошмары»"
                image="/placeholder.svg"
                price="$2.15"
                chance="32%"
                profit="+175%"
                rating={4.9}
                description="Высокий шанс окупаемости и доступная цена делают этот кейс лучшим выбором для новичков."
              />
              <CaseCard
                name="Кейс «Опасная зона»"
                image="/placeholder.svg"
                price="$1.90"
                chance="28%"
                profit="+160%"
                rating={4.7}
                description="Содержит несколько редких скинов, которые могут принести существенную прибыль."
              />
              <CaseCard
                name="Кейс «Расколотая сеть»"
                image="/placeholder.svg"
                price="$2.50"
                chance="25%"
                profit="+145%"
                rating={4.5}
                description="Отличное соотношение цены и потенциальной прибыли при более высокой начальной стоимости."
              />
            </div>
          </TabsContent>
          
          <TabsContent value="chance" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CaseCard
                name="Кейс «Прорыв»"
                image="/placeholder.svg"
                price="$1.85"
                chance="38%"
                profit="+120%"
                rating={4.6}
                description="Наивысший шанс выпадения окупаемого предмета среди всех кейсов."
              />
              <CaseCard
                name="Кейс «Гамма»"
                image="/placeholder.svg"
                price="$3.10"
                chance="35%"
                profit="+110%"
                rating={4.3}
                description="Дорогой кейс, но с высокими шансами на редкие предметы."
              />
              <CaseCard
                name="Кейс «Хрома 3»"
                image="/placeholder.svg"
                price="$1.45"
                chance="33%"
                profit="+95%"
                rating={4.1}
                description="Бюджетный вариант с хорошими шансами на окупаемость."
              />
            </div>
          </TabsContent>
          
          <TabsContent value="price" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CaseCard
                name="Кейс «Призма 2»"
                image="/placeholder.svg"
                price="$0.95"
                chance="20%"
                profit="+200%"
                rating={4.2}
                description="Самый доступный кейс с потенциально высокой прибылью."
              />
              <CaseCard
                name="Кейс «Спектр»"
                image="/placeholder.svg"
                price="$1.25"
                chance="24%"
                profit="+180%"
                rating={4.4}
                description="Доступный кейс с хорошим балансом между ценой и шансами."
              />
              <CaseCard
                name="Кейс «Горизонт»"
                image="/placeholder.svg"
                price="$1.50"
                chance="26%"
                profit="+165%"
                rating={4.3}
                description="Средняя ценовая категория с достойными шансами на окупаемость."
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
