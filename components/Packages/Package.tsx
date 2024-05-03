interface IPackageProps {
  title: string;
  description: string;
  price: number;
  priceDesc: string;
}
export const Package = ({
  title,
  description,
  price,
  priceDesc,
}: IPackageProps) => {
  return (
    <div className="flex flex-col justify-between text-center group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <div className="flex flex-col gap-8">
        <h2 className={`mb-3 text-2xl font-semibold`}>
          {title}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
        </h2>
        <p className={`m-0 text-sm opacity-50`}>{description}</p>
        <p className="text-amber-700 text-3xl">{price} бел.руб</p>
        <span className="text-sm">
          °цена валидна по г.Минску, остальные города в зависимости от
          удаленности
          <br />
          {priceDesc}
        </span>
      </div>

      <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
        <a
          href="https://t.me/Expert_mot"
          target="_blank"
          className="hover:text-gray-400"
        >
          Заказать
        </a>
      </button>
    </div>
  );
};
