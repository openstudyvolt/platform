export default function Heading({ title, description }: { title: string; description?: string }) {
    return (
        <div className="mb-3 space-y-1">
            <h2 className="text-h2 font-semibold text-text-primary">{title}</h2>
            {description && <p className="text-base text-text-secondary">{description}</p>}
        </div>
    );
}
