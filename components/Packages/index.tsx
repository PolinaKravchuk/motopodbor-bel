import services from "@/data/services.json";
import { Package } from "./Package";
export const Packages = () => {
  return (
    <section
      id="services"
      className="min-h-screen  max-w-5xl w-full font-mono text-sm flex flex-col gap-8"
    >
      <h2 className="text-5xl drop-shadow-lg font-thin text-center">
        Ищете хороший мотоцикл за разумные деньги?
      </h2>
      <p className="text-lg text-center">
        Эксперты компании «Motopodbor.bel» проводят профессиональный автоподбор
        в Беларуси на выгодных условиях. Мы поможем выбрать, оценить и купить за
        адекватную сумму автомобиль в отличном техническом состоянии. Предлагаем
        также услуги по подбору мотоциклов.
      </p>
      <div className="mt-20 mb-32 gap-4 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        {services.map((service) => (
          <Package {...service} key={service.id} />
        ))}
      </div>
    </section>
  );
};
