
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative py-12 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background z-0"></div>
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Самые выгодные кейсы для Counter-Strike
          </h1>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Открывайте только лучшие кейсы с максимальными шансами на прибыль. 
            Наши эксперты ежедневно анализируют рынок и находят самые выгодные варианты.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="animate-pulse">
              Лучшие кейсы
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Как мы считаем выгоду
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
