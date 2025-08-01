const stackData = {
  mern: { name: 'MERN Stack', description: '...', components: ['MongoDB', 'Express.js', 'React', 'Node.js'] },
  mean: { name: 'MEAN Stack', description: '...', components: ['MongoDB', 'Express.js', 'Angular', 'Node.js'] },
  dotnet: { name: '.NET Stack', description: '...', components: ['C#', 'ASP.NET Core', 'SQL Server'] }
};

export default function StackPage({ params }) {
  const { stack } = params;
  const data = stackData[stack];

  if (!data) {
    return (
        <div className="card">
            <h1>Stack not found</h1>
        </div>
    );
  }

  return (
    <div className="card">
      <h1>{data.name}</h1>
      <p>{data.description || "A powerful stack for modern applications."}</p>
      <h3>Core Components:</h3>
      <ul style={{ paddingLeft: '20px' }}>
        {data.components.map(component => <li key={component}>{component}</li>)}
      </ul>
    </div>
  );
}

export async function generateStaticParams() {
    return Object.keys(stackData).map((stack) => ({
      stack: stack,
    }));
}