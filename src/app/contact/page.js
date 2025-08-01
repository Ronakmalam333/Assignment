export default function ContactPage() {
  return (
    <div className="card">
      <h1>Contact Us</h1>
      <p>
        Have a project in mind? We&apos;d love to hear from you. Reach out to us for a
        free consultation and let&apos;s discuss how we can bring your vision to life.
      </p>
      <a
        href="mailto:help@dev-hire.com"
        style={{
          color: "var(--primary-color)",
          fontWeight: "bold",
          marginTop: "1rem",
          display: "inline-block"
        }}
      >
        help@dev-hire.com
      </a>
    </div>
  );
}