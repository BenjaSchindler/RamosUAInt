
import ClassesCard from "../Components/ClassesCard";
import { datos } from "../Components/HardCode/DataClassesCard";

const Blogs: React.FC = () => {
  return (
    <main style={{ padding: "1rem 0" }}>
      <div className="grid grid-cols-4 gap-4">
        <h1 className="flex justify-center" >Blogs</h1>
        
        
        {datos?.length > 0 ? (
          <div >
            {datos.map((dato) => (
              <ClassesCard classes={dato} />
            ))}
          </div>
        ) : (
          <div >
            <h2>No datos found</h2>
          </div>
        )}
      
      
      
        </div>
    </main>
  );
}


export default Blogs;