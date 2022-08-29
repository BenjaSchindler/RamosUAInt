import { useState } from "react";

interface ClassesProps {
  classes: ClassesModel;
}

interface ClassesModel {
  title: string;
  color_type: string;
  color_type2: string;
  semester: string;
}

const textstyle={
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden"
} as React.CSSProperties



const ClassesCard: React.FC<ClassesProps> = ({
  classes: { title, color_type, color_type2, semester },
}) => {
  const [expanded, setExpanded] = useState(false);

  if (expanded) {
    return (
      <div
        onClick={() => setExpanded(false)}
        className={`'w-full p-6 max-w-sm ' ${color_type} ' rounded-lg shadow-md ' ${color_type2} ' h-96 border border-gray-300 py-4 flex flex-col justify-start transition-all duration-500 cursor-pointer'`}
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 transition-all duration-500 cursor-pointer">
          {title}
        </h5>
        <p  className="font-normal text-gray-700 transition-all duration-900 cursor-pointer">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    );
  } else {
    return (
      <div
        onClick={() => setExpanded(true)}
        className={`'w-full p-6 max-w-sm ' ${color_type} ' rounded-lg shadow-md ' ${color_type2} ' h-32 border border-gray-300 py-4 flex flex-col justify-between transition-all duration-500 cursor-pointer'`}
      >
        <h5 style={textstyle} className="mb-2 text-xl font-bold tracking-tight text-gray-900 transition-all duration-500 cursor-pointer">
          {title}
        </h5>
      </div>
    );
  }
};

export default ClassesCard;
