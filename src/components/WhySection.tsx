
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart, LineChart, PieChart, Percent } from "lucide-react";

export const WhySection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Почему некоторые кейсы выгоднее других?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            При выборе кейса важно учитывать несколько факторов, которые влияют на потенциальную выгоду
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <BarChart className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Шанс окупаемости</CardTitle>
              <CardDescription>
                Каждый кейс имеет свой процент выпадения предметов, стоимость которых превышает цену кейса
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Мы рассчитываем этот параметр на основе актуальных данных рынка и частоты выпадения 
                каждого предмета. Кейсы с показателем выше 25% считаются хорошим выбором.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <LineChart className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Потенциальная прибыль</CardTitle>
              <CardDescription>
                Максимальная возможная прибыль при выпадении самых редких предметов из кейса
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Мы оцениваем не только вероятность окупиться, но и насколько выгодной может быть 
                удача. Некоторые кейсы могут давать до +400% к стоимости при выпадении редких ножей.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <PieChart className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Статистика открытий</CardTitle>
              <CardDescription>
                Анализ тысяч открытий кейсов реальными пользователями
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Мы собираем статистику открытий и анализируем реальные результаты. Это позволяет нам 
                давать более точные рекомендации по выбору наиболее выгодных кейсов в текущий момент.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
            Подробнее о нашей методике расчета
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
