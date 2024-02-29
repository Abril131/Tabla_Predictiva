import CodeCard from "../components/CodeCard";

function MiuDoc() {
  const ExamplesCodes = [
    {
      title: "Tabla Predictiva :)",
      content: [
        {
          subtitle: "Ejemplo",
          code: `mientras (a and b)`,
        }
      ],
    }
  ];

  return (
    <>
      <div className="border border-transparent border-r-white overflow-y-auto bg-slate-500 text-white w-1/2 h-full flex flex-col items-center content-center p-10 ">
        {/* <img src={logo} className="h-1/5 w-auto mb-10"></img> */}
        <h1 className="text-4xl mb-20">Tabla Predictiva</h1>
       <p>
        Ejemplo usando la tabla predictiva
       </p>
        <br />

        <div className="w-full pl-8">
          {ExamplesCodes.map((example, index) => {
            return (
              <CodeCard
                key={index}
                title={example.title}
                content={example.content}
              />
            );
          })}
        </div>
    
      </div>
    </>
  );
}

export default MiuDoc;
