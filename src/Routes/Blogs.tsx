import ClassesCard from "../Components/ClassesCard";
import { datos } from "../Components/HardCode/DataClassesCard";



const Blogs: React.FC = () => {
  return (
    <main style={{ padding: "1rem 0" }}>
      <div className="p-1 bg-white">
        {datos?.length > 0 ? (
          <div className="grid grid-cols-4 gap-2">
            {datos.map((dato) => (
              <div>
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
