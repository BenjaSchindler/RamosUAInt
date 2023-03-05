import { ramos } from "../Components/HardCode/DataRamos";


const Malla: React.FC = () => {
  return (
    <>
      <div className="grid grid-rows-4 gap-4">
        {/* Titulo */}
        <div className="row-span-1 flex items-end h-24">
          <div className="flex-none w-12"></div>
          <div className="flex align-baseline items-baseline">
            <p className="flex-auto font-sans text-4xl font-bold mr-2">
              INGENIERIA COMERCIAL
            </p>
            <p className="flex-auto font-sans text-xl font-medium ">
              Malla 2020
            </p>
          </div>
        </div>
        {/* Ramos */}
        <div className="row-span-2">
            {/* Divison por Año (Añadir cuantos ramos son y cuantos años)*/}
            <div className="grid grid-cols-5 gap-4">
                {/* Semestres y Ramos */}
                <div className="grid grid-cols-2 gap-2">
                {/* Relleno */}
                    {ramos?.length > 0 ? (
                        <>
                        {ramos.map((ramo) => (
                            <div className={`${ramo.color_type}  shadow-lg p-6 flex justify-center`}>
                                <p className="text-gray-700">{ramo.title}</p>
                            </div>
                        ))}
                        </>
                    ) : (
                    <div className="">
                        <h2>No movies found</h2>
                    </div>
                    )}


                    {/* 
                    <div className="bg-white rounded-lg shadow-lg p-6 flex justify-center col-span-2">
                        <p className="text-gray-700">1er Año</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 flex justify-center">
                        <p className="text-gray-700">Sem I</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 flex justify-center">
                        <p className="text-gray-700">Sem II</p>
                    </div>


                    <div className="bg-white rounded-lg shadow-lg p-6 flex justify-center">
                        <p className="text-gray-700">Calculo I</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 flex justify-center">
                        <p className="text-gray-700">Calculo II</p>
                    </div>
                    */}
                </div>

            </div>

        </div>

      </div>
    </>
  );
};

export default Malla;
