import ClassesCard from "../Components/ClassesCard";
import { datos } from "../Components/HardCode/DataClassesCard";

const Blogs: React.FC = () => {
  return (
    <main style={{ padding: "1rem 0" }}>
      <div className="p-1 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-2">
          <div className="col-start-3 col-span-2 pb-4">
            <h1 className="mb-2 text-4xl font-serif tracking-tight text-gray-900 text-center">
              Wiki Ramos UAI
            </h1>
            <div>
              <div className="flex justify-end">
                <p>Data cience</p>
                <div className="h-2 w-2 p-1 bg-purple-500"/>
              </div>
              <p>Ciencias Básicas y Ciencias de la Ingeniería</p>
              <div className="h-2 w-2 p-1 bg-gray-500"></div>
              <p>Asignaturas Complementarias U</p>
              <div className="h-2 w-2 p-1 bg-green-500"></div>
            </div>
          </div>
        </div>

        {datos?.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-8 gap-1">
            <div className="row-start-1 mb-2 text-2xl font-bold tracking-tight text-gray-900 -rotate-90">
              <h1 className="text-center">S 1</h1>
            </div>
            <div className="row-start-2 mb-2 text-2xl font-bold tracking-tight text-gray-900 -rotate-90">
              <h1 className="text-center">S 2</h1>
            </div>
            <div className="row-start-3 mb-2 text-2xl font-bold tracking-tight text-gray-900 -rotate-90">
              <h1 className="text-center">S 3</h1>
            </div>

            {datos.map((dato) => (
              <div className={dato.semester}>
                <ClassesCard classes={dato} />
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h2>No datos found</h2>
          </div>
        )}
      </div>
    </main>
  );
};

export default Blogs;
