export const JsonLd = () => {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://innovation-compass.rukn.cloud/#organization",
                "name": "بوصلة الابتكار",
                "alternateName": "Innovation Compass",
                "url": "https://innovation-compass.rukn.cloud",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://innovation-compass.rukn.cloud/Logo/Innovation-compass-logo.png",
                    "width": 112,
                    "height": 112
                },
                "description": "مبادرة لتمكين الجهات المتخصصة في مجال الطفولة والشباب من ابتكار حلول مستدامة وصناعة الأثر.",
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "SA",
                    "addressRegion": "Riyadh"
                },
                "sameAs": [
                    "https://twitter.com/InnovationCompass"
                ]
            },
            {
                "@type": "WebSite",
                "@id": "https://innovation-compass.rukn.cloud/#website",
                "url": "https://innovation-compass.rukn.cloud",
                "name": "بوصلة الابتكار",
                "description": "مبادرة لتمكين الجهات المتخصصة في مجال الطفولة والشباب",
                "publisher": {
                    "@id": "https://innovation-compass.rukn.cloud/#organization"
                },
                "inLanguage": "ar-SA"
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};
