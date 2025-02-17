import { ContactInfoProps } from "@/data/contactData";

export const ContactInfo: React.FC<ContactInfoProps> = ({
  title,
  byWho,
  info,
}) => {
  return (
    <article
      className="contact-card"
      role="group"
      aria-labelledby={`contact-${title}`}
    >
      <h3 id={`contact-${title}`}>{title}</h3>
      <div className="by-who" aria-hidden="true">
        {byWho}
      </div>

      <div className="contact-details">
        {info.map((item, index) => {
          const ItemIcon = item.icon;
          return (
            <a
              key={index}
              href={item.href}
              className="contact-link"
              target={item.target}
              rel={item.target ? "noopener noreferrer" : undefined}
              aria-label={item.text}
            >
              <ItemIcon aria-hidden="true" />
              <span>{item.text}</span>
            </a>
          );
        })}
      </div>
    </article>
  );
};
