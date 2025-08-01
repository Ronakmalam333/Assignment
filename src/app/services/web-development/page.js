
import Link from 'next/link';

export default function WebDevelopmentPage() {
  return (
    <div className="card">
      <h1>Web Development Services</h1>
      <p>We build fast, secure, and scalable web applications using modern technology stacks. Choose a stack below to learn more about our expertise.</p>
      
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Link href="/services/web-development/mern" style={{color: "var(--primary-color)", fontWeight: "bold"}}>
          MERN Stack
        </Link>
        <Link href="/services/web-development/mean" style={{color: "var(--primary-color)", fontWeight: "bold"}}>
          MEAN Stack
        </Link>
        <Link href="/services/web-development/dotnet" style={{color: "var(--primary-color)", fontWeight: "bold"}}>
          .NET Core
        </Link>
      </div>
    </div>
  );
}