import { ramos2 } from "../Components/HardCode/DataRamos";


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
            <div className="grid grid-cols-5 gap-4 mx-12">
                {/* Semestres y Ramos */}

                {/* Relleno */}
                    {ramos2?.length > 0 ? (
                        <>
                        {ramos2.map((ramo) => (
                              /* Año y Semestres */
                            <div className="grid grid-cols-2 gap-2">
                              <div className="bg-white col-span-2 shadow-lg p-6 flex justify-center">
                                  <p className="text-gray-700">Año {ramo.año}</p>
                              </div>
                              <div className="bg-white shadow-lg p-6 flex justify-center">
                                  <p className="text-gray-700">Semestre {ramo.sA}</p>
                              </div>
                              <div className="bg-white shadow-lg p-6 flex justify-center">
                                  <p className="text-gray-700">Semestre {ramo.sA+1}</p>
                              </div>
                                    {/* Semestres por separado */}
                                {ramo.semestre1.map((ramoS1) => (
                                  <>
                                  {console.log(ramoS1.title)}
                                  <div className={`${ramoS1.color_type} col-start-1 border border-gray-500 h-24 w-34 flex items-center justify-center`}>
                                      <p className="text-gray-700 text-l text-center">{ramoS1.title}</p>
                                  </div>
                                  </>
                                ))}
                                {ramo.semestre2.map((ramoS2) => (
                                  <>
                                  {console.log(ramoS2.title)}
                                  <div className={`${ramoS2.color_type} col-start-2 border border-gray-500 h-24 w-34 flex items-center justify-center`}>
                                      <p className="text-gray-700 text-l text-center">{ramoS2.title}</p>
                                  </div>
                                  </>
                                ))}
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
    </>
  );
};

export default Malla;
