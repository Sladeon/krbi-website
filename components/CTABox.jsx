export default function CTABox({ title, description, ctaText, onClick }) {
  return (
    <div className="bg-blue-50 p-8 rounded-lg text-center my-12 border border-blue-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-700 mb-6 max-w-2xl mx-auto">{description}</p>
      <button 
        onClick={onClick}
        className="cta-button"
      >
        {ctaText}
      </button>
    </div>
  );
}
